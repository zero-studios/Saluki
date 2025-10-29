import twoColumn from './twoColumn.json'

/**
 * Transforms a raw Sanity document into an initial value template
 * Strips out system fields (_id, _rev, _createdAt, _updatedAt, _system)
 * and returns a proper template object
 */
function createTemplateFromDocument(doc: any, templateId: string, templateTitle: string) {
  // Destructure to separate system fields from actual content
  const {
    _id,
    _rev,
    _createdAt,
    _updatedAt,
    _system,
    _type,
    title,
    ...rest
  } = doc

  return {
    id: templateId,
    title: templateTitle,
    schemaType: _type,
    description: `Create a new ${_type} with the ${templateTitle} layout`,
    value: {
      // Include the document type
      _type,
      // Include all other fields (blocks, settings, etc.)
      ...rest,
    }
  }
}

export default [
  createTemplateFromDocument(
    twoColumn,
    'section-two-column',
    'Two Column Section'
  ),
]