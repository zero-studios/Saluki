import {defineField, defineType} from 'sanity'
import sharedStyleFields from './_sharedStyleFields'
import { SliderInput } from '../../lib/components/SliderInput'
import { ButtonGroupInput } from '../../lib/components/ButtonGroupInput'

export default defineType({
    name: 'groupBlock',
    title: 'Group',
    type: 'object',
    groups: [
      {name: 'content', title: 'Content', default: true},
      {name: 'styles', title: 'Styles'},
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
        group: 'content',
        components: {
          input: ButtonGroupInput
        }
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
        group: 'content',
        components: {
          input: ButtonGroupInput
        }
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
        group: 'content',
        components: {
          input: ButtonGroupInput
        }
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
        group: 'content',
        components: {
          input: ButtonGroupInput
        }
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
        group: 'content',
        components: {
          input: ButtonGroupInput
        }
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
        group: 'content',
        components: {
          input: ButtonGroupInput
        }
      }),

      // Gap
      defineField({
        name: 'gap',
        title: 'Gap',
        type: 'number',
        options: {min: 0, max: 100, step: 1},
        initialValue: 12,
        group: 'content',
        components: {
          input: SliderInput
        }
      }),
      defineField({
        name: 'gap_desktop',
        title: 'Gap (Desktop)',
        type: 'number',
        options: {min: 0, max: 100, step: 1},
        initialValue: 12,
        hidden: ({parent}) => parent?.shareContentSettings === true,
        group: 'content',
        components: {
          input: SliderInput
        }
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
        group: 'content',
        components: {
          input: ButtonGroupInput
        }
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
        group: 'content',
        components: {
          input: ButtonGroupInput
        }
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
        group: 'content',
        components: {
          input: ButtonGroupInput
        }
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
        group: 'content',
        components: {
          input: ButtonGroupInput
        }
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
        group: 'content',
        components: {
          input: ButtonGroupInput
        }
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
        group: 'content',
        components: {
          input: ButtonGroupInput
        }
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

      // Style fields from sharedStyleFields
      ...sharedStyleFields,
    ],
    preview: {
      select: {title: 'title'},
      prepare: ({title}) => ({
        title: title || 'Group Block',
        subtitle: 'Group Block',
      }),
    },
  })
