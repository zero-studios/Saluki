// resolve.js
import {defineDocuments, defineLocations} from 'sanity/presentation'

export const locations = {
  page: defineLocations({
    select: {
      title: 'title',
      slug: 'slug.current',
      parent: 'parent.slug.current',
    },
    resolve: (doc) => {
      if (!doc?.slug) return {locations: []}

      const fullPath = doc.parent ? `${doc.parent}/${doc.slug}` : doc.slug

      return {
        locations: [
          {
            title: doc.title || 'Untitled',
            href: `/${fullPath}`,
          },
        ],
      }
    },
  }),
}

// Configures documents presentation tool should open by default when navigating to an URL
export const mainDocuments = defineDocuments([
  {
    route: '/:slug',
    filter: `_type == "page" && slug.current == $slug && !defined(parent)`,
  },
  {
    route: '/:parent/:slug',
    filter: `_type == "page" && slug.current == $slug && parent->slug.current == $parent`,
  },
])