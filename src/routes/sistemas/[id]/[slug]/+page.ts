import type { Load, Page } from "@sveltejs/kit";
import { error } from '@sveltejs/kit';
import { currentSystem } from '$lib/stores/general';
import { get } from 'svelte/store';

interface Params extends Page {
  slug: string
}

export async function load({ params }: Params) {
  let historie = get(currentSystem)?.histories.find(historie => historie.slug === params.slug);
  // console.log(historie)
  // if (!historie) throw error(404, `No esta disponible la historia ${params.slug.replace('_', ' ')}`);

  return historie;
}
