import type { ComponentType } from 'svelte';
import Text from './Text.svelte';
import Group from './Group.svelte';

export const molecules_map: Record<string, ComponentType> = {
  textBlock: Text,
  groupBlock: Group,
};


