import {defineField, defineType} from 'sanity'
import {isUniqueAcrossAllDocuments} from '../lib/functions/isUnique'
import {seoFields} from "../lib/blocks/seoFields"

// Removed pagebuilder modules in favor of reusable Section documents

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    groups: [
      {
        name: 'main',
        title: 'Main Details',
        default: true,
      },
      {
        name: 'seo',
        title: 'SEO',
      },
    ],
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        group: 'main',
      }),
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        group: 'main',
        validation: (Rule) => Rule.required(),
        options: {
          source: 'title',
          maxLength: 96,
          isUnique: isUniqueAcrossAllDocuments,
        },
      }),
      ...seoFields,
      defineField({
        name: 'modules',
        title: 'Sections',
        type: 'array',
        group: 'main',
        of: [
          {type: 'reference', to: [{type: 'section'}]},
        ],
      }),
    ],
    preview: {
      select: {
        title: 'title',
      },
    },

  })