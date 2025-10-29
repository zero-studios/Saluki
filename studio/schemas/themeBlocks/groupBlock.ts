import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'groupBlock',
    title: 'Group',
    type: 'object',
    groups: [
      {name: 'content', title: 'Content', default: true},
      {name: 'layout', title: 'Layout'},
    ],
    fields: [
      defineField({
        name: 'title', 
        title: 'Title', 
        type: 'string',
        group: 'content'
      }),

      defineField({
        name: 'blocks',
        title: 'Blocks',
        type: 'array',
        of: [
          {type: 'textBlock'},
          {type: 'imageBlock'},
        ],
        group: 'content'
      }),

      defineField({
        name: 'shareContentSettings', 
        title: 'Share content settings across devices', 
        type: 'boolean', 
        initialValue: true,
        group: 'content'
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
          group: 'content'
      }),

      // Content Direction
      defineField({
        name: 'contentDirection',
        title: 'Content direction',
        type: 'string',
        initialValue: 'column',
        options: {
          layout: "radio",
          list: [
            {title: 'Vertical', value: 'column'},
            {title: 'Horizontal', value: 'row'},
          ]
        },
        group: 'content'
      }),
      defineField({
        name: 'contentDirection_desktop',
        title: 'Content direction (Desktop)',
        type: 'string',
        initialValue: 'column',
        options: {
          layout: "radio",
          list: [
            {title: 'Vertical', value: 'column'},
            {title: 'Horizontal', value: 'row'},
          ]
        },
        hidden: ({parent}) => parent?.shareContentSettings === true,
        group: 'content'
      }),

      // Content Alignment
      defineField({
        name: 'contentAlignment',
        title: 'Content alignment',
        type: 'string',
        initialValue: 'flex-start',
        options: {
          layout: "radio",
          list: [
            {title: 'Start', value: 'flex-start'},
            {title: 'Center', value: 'center'},
            {title: 'End', value: 'flex-end'},
            {title: 'Space between', value: 'space-between'},
          ]
        },
        group: 'content'
      }),
      defineField({
        name: 'contentAlignment_desktop',
        title: 'Content alignment (Desktop)',
        type: 'string',
        initialValue: 'flex-start',
        options: {
          layout: "radio",
          list: [
            {title: 'Start', value: 'flex-start'},
            {title: 'Center', value: 'center'},
            {title: 'End', value: 'flex-end'},
            {title: 'Space between', value: 'space-between'},
          ]
        },
        hidden: ({parent}) => parent?.shareContentSettings === true,
        group: 'content'
      }),

      // Cross-axis Alignment
      defineField({
        name: 'contentAlignmentCrossAxis',
        title: 'Cross-axis alignment',
        type: 'string',
        initialValue: 'center',
        options: {
          layout: "radio",
          list: [
            {title: 'Start', value: 'start'},
            {title: 'Center', value: 'center'},
            {title: 'End', value: 'end'},
          ]
        },
        group: 'content'
      }),
      defineField({
        name: 'contentAlignmentCrossAxis_desktop',
        title: 'Cross-axis alignment (Desktop)',
        type: 'string',
        initialValue: 'center',
        options: {
          layout: "radio",
          list: [
            {title: 'Start', value: 'start'},
            {title: 'Center', value: 'center'},
            {title: 'End', value: 'end'},
          ]
        },
        hidden: ({parent}) => parent?.shareContentSettings === true,
        group: 'content'
      }),

      // Gap
      defineField({
        name: 'gap',
        title: 'Gap',
        type: 'number',
        options: {layout: 'slider', min: 0, max: 100, step: 1},
        initialValue: 12,
        group: 'content'
      }),
      defineField({
        name: 'gap_desktop',
        title: 'Gap (Desktop)',
        type: 'number',
        options: {layout: 'slider', min: 0, max: 100, step: 1},
        initialValue: 12,
        hidden: ({parent}) => parent?.shareContentSettings === true,
        group: 'content'
      }),

      // Width
      defineField({
        name: 'width',
        title: 'Width',
        type: 'string',
        initialValue: 'fill',
        options: {list: [
          {title: 'Fit content', value: 'fit-content'},
          {title: 'Fill', value: 'fill'},
          {title: 'Custom', value: 'custom'},
        ]},
        group: 'content'
      }),
      defineField({
        name: 'customWidth',
        title: 'Custom width (%)',
        type: 'number',
        options: {layout: 'slider', min: 0, max: 100, step: 1},
        initialValue: 100,
        hidden: ({parent}) => parent?.width !== 'custom',
        group: 'content'
      }),
      defineField({
        name: 'width_desktop',
        title: 'Width (Desktop)',
        type: 'string',
        initialValue: 'fill',
        options: {list: [
          {title: 'Fit content', value: 'fit-content'},
          {title: 'Fill', value: 'fill'},
          {title: 'Custom', value: 'custom'},
        ]},
        hidden: ({parent}) => parent?.shareContentSettings === true,
        group: 'content'
      }),
      defineField({
        name: 'customWidth_desktop',
        title: 'Custom width (Desktop) (%)',
        type: 'number',
        options: {layout: 'slider', min: 0, max: 100, step: 1},
        initialValue: 100,
        hidden: ({parent}) => parent?.shareContentSettings === true || parent?.width_desktop !== 'custom',
        group: 'content'
      }),

      // Background Media
      defineField({
        name: 'backgroundMedia',
        title: 'Background media',
        type: 'string',
        initialValue: 'none',
        options: {list: [
          {title: 'None', value: 'none'},
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'},
        ]},
        group: 'content'
      }),
      defineField({
        name: 'backgroundMedia_desktop',
        title: 'Background media (Desktop)',
        type: 'string',
        initialValue: 'none',
        options: {list: [
          {title: 'None', value: 'none'},
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'},
        ]},
        hidden: ({parent}) => parent?.shareContentSettings === true,
        group: 'content'
      }),
      
      // Video - Mobile
      defineField({
        name: 'video',
        title: 'Video',
        type: 'file',
        hidden: ({parent}) => parent?.backgroundMedia !== 'video',
        group: 'content'
      }),
      defineField({
        name: 'videoPosition',
        title: 'Video position',
        type: 'string',
        initialValue: 'cover',
        options: {list: [
          {title: 'Cover', value: 'cover'},
          {title: 'Contain', value: 'contain'},
        ]},
        hidden: ({parent}) => parent?.backgroundMedia !== 'video',
        group: 'content'
      }),

      // Video - Desktop
      defineField({
        name: 'video_desktop',
        title: 'Video (Desktop)',
        type: 'file',
        hidden: ({parent}) => parent?.shareContentSettings === true || parent?.backgroundMedia_desktop !== 'video',
        group: 'content'
      }),
      defineField({
        name: 'videoPosition_desktop',
        title: 'Video position (Desktop)',
        type: 'string',
        initialValue: 'cover',
        options: {list: [
          {title: 'Cover', value: 'cover'},
          {title: 'Contain', value: 'contain'},
        ]},
        hidden: ({parent}) => parent?.shareContentSettings === true || parent?.backgroundMedia_desktop !== 'video',
        group: 'content'
      }),

      // Image - Mobile
      defineField({
        name: 'backgroundImage',
        title: 'Background image',
        type: 'image',
        hidden: ({parent}) => parent?.backgroundMedia !== 'image',
        group: 'content'
      }),
      defineField({
        name: 'backgroundImagePosition',
        title: 'Image position',
        type: 'string',
        initialValue: 'cover',
        options: {list: [
          {title: 'Cover', value: 'cover'},
          {title: 'Fit', value: 'fit'},
        ]},
        hidden: ({parent}) => parent?.backgroundMedia !== 'image',
        group: 'content'
      }),

      // Image - Desktop
      defineField({
        name: 'backgroundImage_desktop',
        title: 'Background image (Desktop)',
        type: 'image',
        hidden: ({parent}) => parent?.shareContentSettings === true || parent?.backgroundMedia_desktop !== 'image',
        group: 'content'
      }),
      defineField({
        name: 'backgroundImagePosition_desktop',
        title: 'Image position (Desktop)',
        type: 'string',
        initialValue: 'cover',
        options: {list: [
          {title: 'Cover', value: 'cover'},
          {title: 'Fit', value: 'fit'},
        ]},
        hidden: ({parent}) => parent?.shareContentSettings === true || parent?.backgroundMedia_desktop !== 'image',
        group: 'content'
      }),

      // Background Color & Overlay
      defineField({
        name: 'backgroundColor',
        title: 'Background color',
        type: 'color',
        group: 'content',
      }),
      defineField({
        name: 'toggleOverlay', 
        title: 'Background overlay', 
        type: 'boolean', 
        initialValue: false,
        group: 'content'
      }),
      defineField({
        name: 'overlayColor', 
        title: 'Overlay color', 
        type: 'color', 
        hidden: ({parent}) => !parent?.toggleOverlay,
        group: 'content'
      }),

      // Link
      defineField({
        name: 'link', 
        title: 'Link', 
        type: 'url',
        group: 'content'
      }),
      defineField({
        name: 'openInNewTab', 
        title: 'Open in new tab', 
        type: 'boolean', 
        initialValue: false,
        group: 'content'
      }),

      // Layout fields (from sharedLayoutFields, but manually added)
      defineField({
        name: 'shareLayoutSettings', 
        title: 'Share layout settings across devices', 
        type: 'boolean', 
        initialValue: true,
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
    ],
    preview: {
      select: {title: 'title'},
      prepare: ({title}) => ({
        title: title || 'Group Block',
        subtitle: 'Group Block',
      }),
    },
  })
