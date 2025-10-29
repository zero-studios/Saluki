import type { ComponentType } from 'svelte';
import Text from './Text.svelte';
import Group from './Group.svelte';
import Image from './Image.svelte';

export const molecules_map: Record<string, ComponentType> = {
  textBlock: Text,
  groupBlock: Group,
  imageBlock: Image,
};


