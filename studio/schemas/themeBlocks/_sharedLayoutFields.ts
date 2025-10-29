import {defineField, defineType} from 'sanity'

export default [
    defineField({
        name: 'shareLayoutSettings', 
        title: 'Share layout settings across devices', 
        type: 'boolean', 
        initialValue: true,
        group: 'layout'
    }),
    defineField({
        name: 'visibility',
        title: 'Visibility',
        type: 'string',
        initialValue: 'visible-all',
        options: {list: [
          {title: 'All devices', value: 'visible-all'},
          {title: 'Mobile only', value: 'hidden--desktop'},
          {title: 'Desktop only', value: 'hidden--mobile'},
        ]},
        group: 'layout'
    }),
      defineField({
        name: 'width',
        title: 'Width',
        type: 'string',
        initialValue: 'fit-content',
        options: {
          layout: 'radio',
          list: [
            {title: 'Fit content', value: 'fit-content'},
            {title: 'Fill (100%)', value: '100%'},
          ],
        },
        group: 'layout'
      }),
      defineField({
        name: 'width_desktop',
        title: 'Width (Desktop)',
        type: 'string',
        initialValue: 'fit-content',
        options: {
          layout: 'radio',
          list: [
            {title: 'Fit content', value: 'fit-content'},
            {title: 'Fill (100%)', value: '100%'},
          ],
        },
        hidden: ({parent}) => parent?.shareLayoutSettings === true,
        group: 'layout'
      }),
      defineField({
        name: 'maxWidth',
        title: 'Max width',
        type: 'string',
        initialValue: 'normal',
        options: {
          list: [
            {title: 'Narrow', value: 'narrow'},
            {title: 'Normal', value: 'normal'},
            {title: 'None', value: 'none'},
          ],
        },
        group: 'layout'
      }),
      defineField({
        name: 'maxWidth_desktop',
        title: 'Max width (Desktop)',
        type: 'string',
        initialValue: 'normal',
        options: {
          list: [
            {title: 'Narrow', value: 'narrow'},
            {title: 'Normal', value: 'normal'},
            {title: 'None', value: 'none'},
          ],
        },
        hidden: ({parent}) => parent?.shareLayoutSettings === true,
        group: 'layout'
      }),
      defineField({
        name: 'alignment',
        title: 'Alignment',
        type: 'string',
        initialValue: 'left',
        options: {list: ['left', 'center', 'right']},
        hidden: ({parent}) => parent?.width !== '100%',
        group: 'layout'
      }),
      defineField({
        name: 'alignment_desktop',
        title: 'Alignment (Desktop)',
        type: 'string',
        initialValue: 'left',
        options: {list: ['left', 'center', 'right']},
        hidden: ({parent}) => parent?.shareLayoutSettings === true || parent?.width_desktop !== '100%',
        group: 'layout'
      }),
    defineField({
        name: 'cornerRadius',
        title: 'Corner radius',
        type: 'number',
        initialValue: 0,
        options: {layout: 'slider', min: 0, max: 50, step: 1},
        group: 'layout'
      }),
      defineField({
        name: 'cornerRadius_desktop',
        title: 'Corner radius (Desktop)',
        type: 'number',
        initialValue: 0,
        hidden: ({parent}) => parent?.shareLayoutSettings === true,
        options: {layout: 'slider', min: 0, max: 50, step: 1},
        group: 'layout'
      }),
      defineField({
        name: 'paddingBlockStart',
        title: 'Padding top',
        type: 'number',
        options: {layout: 'slider', min: 0, max: 100, step: 1},
        initialValue: 0,
        group: 'layout'
      }),
      defineField({
        name: 'paddingBlockStart_desktop',
        title: 'Padding top (Desktop)',
        type: 'number',
        options: {layout: 'slider', min: 0, max: 100, step: 1},
        initialValue: 0,
        hidden: ({parent}) => parent?.shareLayoutSettings === true,
        group: 'layout'
      }),
      defineField({
        name: 'paddingBlockEnd',
        title: 'Padding bottom',
        type: 'number',
        options: {layout: 'slider', min: 0, max: 100, step: 1},
        initialValue: 0,
        group: 'layout'
      }),
      defineField({
        name: 'paddingBlockEnd_desktop',
        title: 'Padding bottom (Desktop)',
        type: 'number',
        options: {layout: 'slider', min: 0, max: 100, step: 1},
        initialValue: 0,
        hidden: ({parent}) => parent?.shareLayoutSettings === true,
        group: 'layout'
      }),
      defineField({
        name: 'paddingInlineStart',
        title: 'Padding left',
        type: 'number',
        options: {layout: 'slider', min: 0, max: 100, step: 1},
        initialValue: 0,
        group: 'layout'
      }),
      defineField({
        name: 'paddingInlineStart_desktop',
        title: 'Padding left (Desktop)',
        type: 'number',
        options: {layout: 'slider', min: 0, max: 100, step: 1},
        initialValue: 0,
        hidden: ({parent}) => parent?.shareLayoutSettings === true,
        group: 'layout'
      }),
      defineField({
        name: 'paddingInlineEnd',
        title: 'Padding right',
        type: 'number',
        options: {layout: 'slider', min: 0, max: 100, step: 1},
        initialValue: 0,
        group: 'layout'
      }),
      defineField({
        name: 'paddingInlineEnd_desktop',
        title: 'Padding right (Desktop)',
        type: 'number',
        options: {layout: 'slider', min: 0, max: 100, step: 1},
        initialValue: 0,
        hidden: ({parent}) => parent?.shareLayoutSettings === true,
        group: 'layout'
      }),
]