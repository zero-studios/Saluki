import blockContent from './blockContent'
import post from './post'
import page from './page'
import section from './section'
import themeBlocks from './themeBlocks'
import settings from './settings'

export const schemaTypes = [
    settings, 
    post, 
    blockContent,

    page,
    section,

    ...themeBlocks,
]
