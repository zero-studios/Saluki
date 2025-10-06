import type { ComponentType } from 'svelte';
import Example from "./example.svelte";
import Section from "./Section.svelte";


export const module_map: Record<string, ComponentType> = {
    example: Example,
    section: Section,
};
