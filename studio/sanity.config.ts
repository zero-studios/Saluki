import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {colorInput} from '@sanity/color-input'
import { CogIcon } from "@sanity/icons";
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

import {presentationTool} from 'sanity/presentation'
import {locations, mainDocuments} from './lib/functions/resolve'

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
      {
        id: 'section-custom',
        title: 'Section: Custom',
        schemaType: 'section',
        value: {
          title: 'Custom Section',
          contentDirection: 'column',
          gap: 32,
          sectionWidth: 'page-width',
          colorScheme: '',
          backgroundMedia: 'none',
          paddingBlockStart: 48,
          paddingBlockEnd: 48,
          blocks: [
            {
              _type: 'textBlock',
              width: 'fit-content',
              maxWidth: 'narrow',
              text: [
                {
                  _type: 'block',
                  style: 'normal',
                  children: [{_type: 'span', text: 'Add text...'}]
                }
              ]
            }
          ]
        }
      },
      {
        id: 'section-pull-quote',
        title: 'Section: Pull Quote',
        schemaType: 'section',
        value: {
          title: 'Pull Quote',
          contentDirection: 'column',
          gap: 16,
          paddingBlockStart: 64,
          paddingBlockEnd: 64,
          blocks: [
            {
              _type: 'textBlock',
              typePreset: 'h2',
              width: '100%',
              maxWidth: 'narrow',
              alignment: 'center',
              text: [
                {
                  _type: 'block',
                  style: 'h2',
                  children: [{_type: 'span', text: 'At the heart of every product lies a unique story...'}]
                }
              ]
            }
          ]
        }
      },
      {
        id: 'section-email-signup',
        title: 'Section: Email Signup',
        schemaType: 'section',
        value: {
          title: 'Email signup',
          contentDirection: 'column',
          gap: 16,
          colorScheme: 'scheme-2',
          paddingBlockStart: 40,
          paddingBlockEnd: 40,
          blocks: [
            {
              _type: 'textBlock',
              typePreset: 'h2',
              width: '100%',
              alignment: 'center',
              text: [
                { _type: 'block', style: 'h2', children: [{_type:'span', text:'Subscribe to our emails'}] }
              ]
            },
            {
              _type: 'textBlock',
              typePreset: 'paragraph',
              width: '100%',
              alignment: 'center',
              text: [
                { _type: 'block', style: 'normal', children: [{_type:'span', text:'Be the first to know about new collections and special offers.'}] }
              ]
            }
          ]
        }
      }
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
