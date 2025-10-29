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
            name: 'alt',
            title: 'Alt text',
            type: 'string',
            group: 'content',
            description: 'Alternative text for accessibility and SEO',
        }),

        defineField({
            name: 'backgroundColor',
            title: 'Background color',
            type: 'color',
            group: 'content',
        }),
        defineField({
            name: 'shareContentSettings',
            title: 'Share content settings across devices',
            type: 'boolean',
            initialValue: true,
            group: 'content',
        }),
        defineField({
            name: 'aspectRatio',
            title: 'Aspect ratio',
            type: 'string',
            initialValue: 'auto',
            options: {
                list: [
                    {title: 'Auto', value: 'auto'},
                    {title: 'Square (1:1)', value: '1 / 1'},
                    {title: 'Portrait (3:4)', value: '3 / 4'},
                    {title: 'Portrait (2:3)', value: '2 / 3'},
                    {title: 'Portrait (9:16)', value: '9 / 16'},
                    {title: 'Landscape (4:3)', value: '4 / 3'},
                    {title: 'Landscape (3:2)', value: '3 / 2'},
                    {title: 'Landscape (16:9)', value: '16 / 9'},
                    {title: 'Landscape (21:9)', value: '21 / 9'},
                ],
            },
            group: 'content',
        }),
        defineField({
            name: 'aspectRatio_desktop',
            title: 'Aspect ratio (Desktop)',
            type: 'string',
            initialValue: 'auto',
            options: {
                list: [
                    {title: 'Auto', value: 'auto'},
                    {title: 'Square (1:1)', value: '1 / 1'},
                    {title: 'Portrait (3:4)', value: '3 / 4'},
                    {title: 'Portrait (2:3)', value: '2 / 3'},
                    {title: 'Portrait (9:16)', value: '9 / 16'},
                    {title: 'Landscape (4:3)', value: '4 / 3'},
                    {title: 'Landscape (3:2)', value: '3 / 2'},
                    {title: 'Landscape (16:9)', value: '16 / 9'},
                    {title: 'Landscape (21:9)', value: '21 / 9'},
                ],
            },
            hidden: ({parent}) => parent?.shareContentSettings === true,
            group: 'content',
        }),
        defineField({
            name: 'objectFit',
            title: 'Object fit',
            type: 'string',
            initialValue: 'cover',
            options: {
                list: [
                    {title: 'Cover', value: 'cover'},
                    {title: 'Contain', value: 'contain'},
                    {title: 'Fill', value: 'fill'},
                    {title: 'None', value: 'none'},
                ],
            },
            group: 'content',
        }),
        defineField({
            name: 'objectFit_desktop',
            title: 'Object fit (Desktop)',
            type: 'string',
            initialValue: 'cover',
            options: {
                list: [
                    {title: 'Cover', value: 'cover'},
                    {title: 'Contain', value: 'contain'},
                    {title: 'Fill', value: 'fill'},
                    {title: 'None', value: 'none'},
                ],
            },
            hidden: ({parent}) => parent?.shareContentSettings === true,
            group: 'content',
        }),

        ...sharedLayoutFields,
    ]
})