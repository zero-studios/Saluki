import {defineField} from 'sanity'

export const seoFields = [
  defineField({
    name: 'meta_title',
    title: 'Meta Title',
    type: 'string',
    group: 'seo',
  }),
  defineField({
    name: 'meta_description',
    title: 'Meta Description',
    type: 'text',
    group: 'seo',
  }),
  defineField({
    name: 'meta_keywords',
    title: 'Meta Keywords',
    type: 'array',
    of: [{type: 'string'}],
    group: 'seo',
  }),
  defineField({
    name: 'og_image',
    title: 'Open Graph Image',
    type: 'image',
    group: 'seo',
  }),
]
