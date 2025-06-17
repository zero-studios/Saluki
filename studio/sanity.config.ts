import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {colorInput} from '@sanity/color-input'
import { CogIcon } from "@sanity/icons";
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

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

            
          ]),
    }),
    visionTool(),
    vercelDeployTool(),

  ],
  schema: {
    types: schemaTypes,
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
