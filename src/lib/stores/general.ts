import { writable } from 'svelte/store';
import type { System } from '$lib/types';

export const currentSystem = writable<System>();
