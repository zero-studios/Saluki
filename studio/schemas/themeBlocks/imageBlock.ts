import {defineField, defineType} from 'sanity'
import sharedLayoutFields from './_sharedLayoutFields'

export default defineType({
    name: 'imageBlock',
    title: 'Image',
    type: 'object',
    groups: [
        {name: 'content', title: 'Content', default: true},
        {name: 'layout', title: 'Layout'},
    ],
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            group: 'content',
        }),
        defineField({
            name: 'backgroundColor',
            title: 'Background color',
            type: 'color',
            group: 'content',
          }),

        ...sharedLayoutFields,
    ]
})