import { get, writable } from 'svelte/store';
import { user } from './sessionStore';
import { supabase } from '$lib/supabaseClient';
import type * as db from '$lib/types/db';

import type { System, Storie } from '$lib/types/types';

export const systemsView = writable<DBSystem[]>([]);

export const loadSystems = async () => {
  const user_id = get(user)?.id;
  if (!user_id) return console.error('No user loaded');

  const { data, error } = await supabase
    .from('systems')
    .select().match({ user_id });

  if (error) {
    return console.error(error);
  }

  systemsView.set(data);
}

const loadRules = async (storie_id: string, user_id: string) => {
  const { data, error } = await supabase
    .from('rules')
    .select().match({ storie_id, user_id });

  if (error) {
    return console.error(error);
  }

  return data
}
const loadScenaries = async (storie_id: string, user_id: string) => {
  const { data, error } = await supabase
    .from('scenaries')
    .select().match({ storie_id, user_id });

  if (error) {
    return console.error(error);
  }

  return data
}
const loadStories = async (system_id: string, user_id: string) => {
  const { data, error } = await supabase
    .from('stories')
    .select().match({ system_id, user_id });

  if (error) {
    return console.error(error);
  }

  return data
}


export const currentSystem = writable<System>();

export const updateCurrentSystem = async (id: string) => {
  const user_id = get(user)?.id;
  if (!user_id) return console.error('No user loaded');

  if (!get(systemsView)) loadSystems();

  const systemView = get(systemsView).find(system => system.id === id);
  if (!systemView) return console.error(`No se encuentra el sistema: ${id}`);

  const storiesView = await loadStories(systemView.id, user_id) as DBStorie[];

  const stories: Storie[] = [];
  for (const storie of storiesView) {
    const scenaries = await loadScenaries(systemView.id, user_id) as DBScenarie[];
    const rules = await loadStories(systemView.id, user_id) as DBRule[];
    stories.push({
      ...storie,
      scenaries,
      rules,
    })
  }

  currentSystem.set({
    ...systemView,
    stories
  })
}

const toKebabCase = (word: string) => word
  .replace(/([a-z])([A-Z])/g, "$1-$2")
  .replace(/[\s_]+/g, '-')
  .toLowerCase();

const newSystem = (name: string, description: string = '', user_id: string) => {
  return {
    user_id,
    slug: toKebabCase(name),
    name,
    description
  }
}

export const addSystem = async (name: string, description: string = '', user_id: string) => {
  const { data, error } = await supabase
    .from('systems')
    .insert([newSystem(name, description, user_id)]);

  if (error) {
    return console.error(error);
  }

  systems.update($systems => [...$systems, {...data[0], stories:[]}]);
}

export const deleteSystem = async (id: string) => {
  const { data, error } = await supabase
    .from('systems')
    .delete()
    .match({ id });

  if (error) {
    return console.error(error);
  }

  systemsView.update($systemsView => $systemsView.filter($systemView => $systemView.id !== id))
}

export const systems = writable<System[]>([]);

export const newLoadSystems = async () => {
  const user_id = get(user)?.id;
  if (!user_id) return console.error('No user loaded');

  const { data, error } = await supabase
    .from('systems')
    .select().match({ user_id });

  if (error) {
    return console.error(error);
  }

  const newSystems: System[] = []
  for (const system of data as DBSystem[]) {
    const storiesView = await loadStories(system.id, user_id) as DBStorie[];

    const stories: Storie[] = [];
    for (const storie of storiesView) {
      const scenaries = await loadScenaries(storie.id, user_id) as DBScenarie[];
      const rules = await loadRules(storie.id, user_id) as DBRule[];
      stories.push({
        ...storie,
        scenaries,
        rules,
      })
    }
    newSystems.push({
      ...system,
      stories
    })
  }

  systems.set(newSystems);

  console.log('test: ', newSystems)
  const result = await supabase.from('systems').select(`
  *,
  stories(
    *,
    rules(*),
    scenaries(*)
  )`
  )
  systems.set(result?.data);
}

// supabase.auth.onAuthStateChange((_, session) => {
//   if (!session?.user) return user.set(null);

//   user.set(session.user);
//   newLoadSystems();
// });

export const addStorie = async (name: string, title: string, color: string, user_id: string, system_id:string) => {
  const { data, error } = await supabase
    .from('stories')
    .insert([{ slug:toKebabCase(name),name, title, color, user_id, system_id}]);

  if (error) {
    return console.error(error);
  }

  return data[0] as Storie
}
