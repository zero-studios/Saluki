import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {colorInput} from '@sanity/color-input'
import { CogIcon } from "@sanity/icons";
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

import {presentationTool} from 'sanity/presentation'
import {locations, mainDocuments} from './lib/functions/resolve'

import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import presets from './schemas/presets'
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
            .title("Settings")
            .id("settings")
            .icon(CogIcon)
            .child(
              S.document()
                .schemaType("settings")
                .documentId("settings")
            ),
            S.divider(),

            S.listItem()
              .title('Pages')
              .schemaType('page')
              .child(S.documentTypeList('page').title('Pages')),
            S.listItem()
              .title('Sections')
              .schemaType('section')
              .child(S.documentTypeList('section').title('Sections')),

            
          ]),
    }),
    // visionTool(),
    presentationTool({
      name: 'VisualEditor',
      previewUrl: {
        origin: 'http://localhost:5173/',
        // origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:5173/',
        preview: '/',
        previewMode: {
          enable: process.env.SANITY_STUDIO_VERCEL_BYPASS_TOKEN
            ? `/preview/enable?x-vercel-protection-bypass=${process.env.SANITY_STUDIO_VERCEL_BYPASS_TOKEN}`
            : `/preview/enable`,
          disable: process.env.SANITY_STUDIO_VERCEL_BYPASS_TOKEN
            ? `/preview/disable?x-vercel-protection-bypass=${process.env.SANITY_STUDIO_VERCEL_BYPASS_TOKEN}`
            : `/preview/disable`,
        },
      },
      resolve: {locations, mainDocuments},
    }),
    vercelDeployTool(),

  ],
  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev,
      ...presets,
    ],
  },
  document: {
    actions: (prev, { schemaType }) => {
      if (schemaType === 'settings') {
        return prev.filter((obj) => obj.action === 'publish');
      }
      return prev;
    }
  }
})
