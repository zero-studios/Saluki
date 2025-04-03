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
      name: 'example',
      title: 'Example Content:',
      type: 'image',
      readOnly: true,
      initialValue: {_type: 'image', asset: {_type: 'reference', _ref: 'image-6c0ede86890f950f37a313da75cf62755f3395f5-1520x798-png'}}
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