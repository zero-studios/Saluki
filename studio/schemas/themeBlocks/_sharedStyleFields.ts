import {defineField, defineType} from 'sanity'
import { SliderInput } from '../../lib/components/SliderInput'
import { ButtonGroupInput } from '../../lib/components/ButtonGroupInput'

export default [
    defineField({
        name: 'shareLayoutSettings', 
        title: 'Share layout settings across devices', 
        type: 'boolean', 
        initialValue: true,
        group: 'styles'
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
        group: 'styles',
        components: {
          input: ButtonGroupInput
        }
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
            {title: 'Custom', value: 'custom'},
          ],
        },
        group: 'styles',
        components: {
          input: ButtonGroupInput
        }
      }),
      defineField({
        name: 'custom_width',
        title: 'Custom width',
        type: 'number',
        initialValue: 50,
        options: {min: 0, max: 100, step: 1, unit: '%'},
        hidden: ({parent}) => parent?.width !== 'custom',
        group: 'styles',
        components: {
          input: SliderInput
        }
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
            {title: 'Custom', value: 'custom'},
          ],
        },
        hidden: ({parent}) => parent?.shareLayoutSettings === true,
        group: 'styles',
        components: {
          input: ButtonGroupInput
        }
      }),
      defineField({
        name: 'custom_width_desktop',
        title: 'Custom width (Desktop)',
        type: 'number',
        initialValue: 50,
        options: {min: 0, max: 100, step: 1, unit: '%'},
        hidden: ({parent}) => parent?.shareLayoutSettings === true || parent?.width_desktop !== 'custom',
        group: 'styles',
        components: {
          input: SliderInput
        }
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
        group: 'styles',
        components: {
          input: ButtonGroupInput
        }
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
        group: 'styles',
        components: {
          input: ButtonGroupInput
        }
      }),
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
        hidden: ({parent}) => parent?.shareLayoutSettings === true,
        options: {min: 0, max: 50, step: 1},
        group: 'styles',
        components: {
          input: SliderInput
        }
      }),
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
        hidden: ({parent}) => parent?.shareLayoutSettings === true,
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
        hidden: ({parent}) => parent?.shareLayoutSettings === true,
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
        hidden: ({parent}) => parent?.shareLayoutSettings === true,
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
        hidden: ({parent}) => parent?.shareLayoutSettings === true,
        group: 'styles',
        components: {
          input: SliderInput
        }
      }),
]

