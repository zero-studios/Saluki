import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'example',
  title: 'Example',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Example',
      readOnly: true,
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "color",
    })
  ],
})