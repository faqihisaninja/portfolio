import { writable } from 'svelte/store';

export const hover = writable(false);
export const coord = writable({ x: 50, y: 50 });
