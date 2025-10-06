import groq from 'groq';

export const homeQuery = groq`*[_type == "page" && slug.current == "home"][0]{
  ...,
  modules[]->{
    ...,
    blocks[]{
      ...,
      blocks[]{...}
    }
  }
}`
export const settingsQuery = groq`*[_type == "settings"][0]`
export const pageQuery = groq`*[_type == "page" && slug.current == $slug][0]{
  ...,
  modules[]->{
    ...,
    blocks[]{
      ...,
      blocks[]{...}
    }
  }
}`
export const pagesQuery = groq`*[_type == "page" && defined(slug.current)] | order(_createdAt desc)`
