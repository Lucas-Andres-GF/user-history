import type { System } from './types';
import systemsSample from '$lib/data/systemsSample.json'

export function getSystem(id: string): System | null {
  let system = systemsSample.find((system) => system.id === id)
  return system === undefined ? null : system
}

export function getSystems(): System[] {
  return systemsSample
}

export function mapSystems<T>(fn: (system: System, index?: number, array?: System[]) => T): T[] {
  return systemsSample.map(fn)
}
