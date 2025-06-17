import type { Component } from 'svelte';
import Example from "./Example.svelte";


export const module_map: Record<string, Component> = {
    example: Example,
};
