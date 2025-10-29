import { stegaClean } from '@sanity/client/stega'

export function cleanString(str) {
  if (typeof str !== 'string') {
    return str;
  }
  return stegaClean(str);
}
export function cleanObject(obj) {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => cleanObject(item));
  }
  
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      if (typeof value === 'string') {
        return [key, cleanString(value)];
      }
      if (typeof value === 'object' && value !== null) {
        return [key, cleanObject(value)];
      }
      return [key, value];
    })
  );
}