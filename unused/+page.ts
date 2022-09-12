import type { Load, Page } from "@sveltejs/kit";
import { error } from '@sveltejs/kit';
import { getSystem } from '$lib/stores/systemsStore';

interface Params extends Page {
  id: string
}

export async function load({ params }: Params) {
  const system = getSystem(parseInt(params.id));
  console.log(params.id)
  if (!system) throw error(404, `No esta disponible el sistema ${params.id.replace('_', ' ')}`);

  return system;
}
