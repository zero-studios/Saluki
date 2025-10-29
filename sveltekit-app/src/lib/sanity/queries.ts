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


// from niagara ...
// export const pageQuery = `*[_type == "page" && slug.current == $last_slug][0] {
//   _id,
//   title,
//   slug,
//   parent,
//   "fullPath": select(
//     defined(parent) => *[_type == "page" && _id == ^.parent._ref][0].slug.current + "/" + slug.current,
//     slug.current
//   )
// }`;

// export const pagesQuery = `*[_type == "page" && defined(slug.current)] | order(_createdAt desc) {
// _id,
// title,
// slug,
// parent,
// "fullPath": select(
//   defined(parent) => *[_type == "page" && _id == ^.parent._ref][0].slug.current + "/" + slug.current,
//   slug.current
// )
// }`;