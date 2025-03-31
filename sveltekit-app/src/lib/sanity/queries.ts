import groq from 'groq';

export const homeQuery = groq`*[_type == "page" && slug.current == "home"][0]`
export const pageQuery = groq`*[_type == "page" && slug.current == $slug][0]`
export const pagesQuery = groq`*[_type == "page" && defined(slug.current)] | order(_createdAt desc)`
