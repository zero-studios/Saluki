import {defineField, defineType} from 'sanity'
import { SliderInput } from '../lib/components/SliderInput'
import { ButtonGroupInput } from '../lib/components/ButtonGroupInput'

export default defineType({
  name: 'section',
  title: 'Section',
  type: 'document',
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
        {type: 'groupBlock'},
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
      hidden: ({document}) => document?.shareContentSettings === true,
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
      hidden: ({document}) => document?.shareContentSettings === true,
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
      hidden: ({document}) => document?.shareContentSettings === true,
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
      hidden: ({document}) => document?.shareContentSettings === true,
      group: 'content',
      components: {
        input: SliderInput
      }
    }),

    // Section Width
    defineField({
      name: 'sectionWidth',
      title: 'Section width',
      type: 'string',
      initialValue: 'page-width',
      options: {list: [
        {title: 'Page width', value: 'page-width'},
        {title: 'Full width', value: 'full-width'},
      ]},
      group: 'content',
      components: {
        input: ButtonGroupInput
      }
    }),

    // Section Height
    defineField({
      name: 'height',
      title: 'Section height',
      type: 'string',
      initialValue: 'auto',
      options: {list: [
        {title: 'Auto', value: 'auto'},
        {title: 'Fullscreen', value: 'fullscreen'},
        {title: 'Square', value: 'square'},
        {title: 'Landscape', value: 'landscape'},
        {title: 'Portrait', value: 'portrait'},
      ]},
      group: 'content',
      components: {
        input: ButtonGroupInput
      }
    }),
    defineField({
      name: 'height_desktop',
      title: 'Section height (Desktop)',
      type: 'string',
      initialValue: 'auto',
      options: {list: [
        {title: 'Auto', value: 'auto'},
        {title: 'Fullscreen', value: 'fullscreen'},
        {title: 'Square', value: 'square'},
        {title: 'Landscape', value: 'landscape'},
        {title: 'Portrait', value: 'portrait'},
      ]},
      hidden: ({document}) => document?.shareContentSettings === true,
      group: 'content',
      components: {
        input: ButtonGroupInput
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
      hidden: ({document}) => document?.shareContentSettings === true,
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
      hidden: ({document}) => document?.backgroundMedia !== 'video',
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
      hidden: ({document}) => document?.backgroundMedia !== 'video',
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
      hidden: ({document}) => document?.shareContentSettings === true || document?.backgroundMedia_desktop !== 'video',
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
      hidden: ({document}) => document?.shareContentSettings === true || document?.backgroundMedia_desktop !== 'video',
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
      hidden: ({document}) => document?.backgroundMedia !== 'image',
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
      hidden: ({document}) => document?.backgroundMedia !== 'image',
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
      hidden: ({document}) => document?.shareContentSettings === true || document?.backgroundMedia_desktop !== 'image',
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
      hidden: ({document}) => document?.shareContentSettings === true || document?.backgroundMedia_desktop !== 'image',
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
      hidden: ({document}) => !document?.toggleOverlay,
      group: 'content'
    }),

    // Styles group
    defineField({
      name: 'shareLayoutSettings', 
      title: 'Share layout settings across devices', 
      type: 'boolean', 
      initialValue: true,
      group: 'styles'
    }),

    // Corner Radius
    defineField({
      name: 'cornerRadius',
      title: 'Corner radius',
      type: 'number',
      initialValue: 0,
      options: {min: 0, max: 50, step: 1},
      group: 'styles',
      components: {
        input: SliderInput
      }
    }),
    defineField({
      name: 'cornerRadius_desktop',
      title: 'Corner radius (Desktop)',
      type: 'number',
      initialValue: 0,
      hidden: ({document}) => document?.shareLayoutSettings === true,
      options: {min: 0, max: 50, step: 1},
      group: 'styles',
      components: {
        input: SliderInput
      }
    }),

    // Padding
    defineField({
      name: 'paddingBlockStart',
      title: 'Padding top',
      type: 'number',
      options: {min: 0, max: 100, step: 1},
      initialValue: 0,
      group: 'styles',
      components: {
        input: SliderInput
      }
    }),
    defineField({
      name: 'paddingBlockStart_desktop',
      title: 'Padding top (Desktop)',
      type: 'number',
      options: {min: 0, max: 100, step: 1},
      initialValue: 0,
      hidden: ({document}) => document?.shareLayoutSettings === true,
      group: 'styles',
      components: {
        input: SliderInput
      }
    }),
    defineField({
      name: 'paddingBlockEnd',
      title: 'Padding bottom',
      type: 'number',
      options: {min: 0, max: 100, step: 1},
      initialValue: 0,
      group: 'styles',
      components: {
        input: SliderInput
      }
    }),
    defineField({
      name: 'paddingBlockEnd_desktop',
      title: 'Padding bottom (Desktop)',
      type: 'number',
      options: {min: 0, max: 100, step: 1},
      initialValue: 0,
      hidden: ({document}) => document?.shareLayoutSettings === true,
      group: 'styles',
      components: {
        input: SliderInput
      }
    }),
    defineField({
      name: 'paddingInlineStart',
      title: 'Padding left',
      type: 'number',
      options: {min: 0, max: 100, step: 1},
      initialValue: 0,
      group: 'styles',
      components: {
        input: SliderInput
      }
    }),
    defineField({
      name: 'paddingInlineStart_desktop',
      title: 'Padding left (Desktop)',
      type: 'number',
      options: {min: 0, max: 100, step: 1},
      initialValue: 0,
      hidden: ({document}) => document?.shareLayoutSettings === true,
      group: 'styles',
      components: {
        input: SliderInput
      }
    }),
    defineField({
      name: 'paddingInlineEnd',
      title: 'Padding right',
      type: 'number',
      options: {min: 0, max: 100, step: 1},
      initialValue: 0,
      group: 'styles',
      components: {
        input: SliderInput
      }
    }),
    defineField({
      name: 'paddingInlineEnd_desktop',
      title: 'Padding right (Desktop)',
      type: 'number',
      options: {min: 0, max: 100, step: 1},
      initialValue: 0,
      hidden: ({document}) => document?.shareLayoutSettings === true,
      group: 'styles',
      components: {
        input: SliderInput
      }
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title}) => ({
      title: title || 'Section',
      subtitle: 'Custom Section',
    }),
  },
})


