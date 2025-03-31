import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {colorInput} from '@sanity/color-input'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

import {schemaTypes} from './schemas'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'saluki',
  title: 'Saluki',
  projectId,
  dataset,
  plugins: [
    colorInput(),

    structureTool({
      name: 'default',
      title: 'Structure',
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            
            S.listItem()
              .title('Pages')
              .schemaType('page')
              .child(S.documentTypeList('page').title('Pages')),
            S.divider(),

            
          ]),
    }),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:5173',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
