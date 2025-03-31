import {defineField, defineType} from 'sanity'
import {isUniqueAcrossAllDocuments} from '../lib/functions/isUnique'
import {seoFields} from "../lib/blocks/seoFields"

import pagebuilder from './pagebuilder'

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
          ...pagebuilder.map((module) => ({type: module.name})),
        ],
      }),
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  })