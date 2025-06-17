import blockContent from './blockContent'
import post from './post'
import page from './page'
import pagebuilder from './pagebuilder'
import settings from './settings'

export const schemaTypes = [
    settings, 
    post, 
    blockContent,

    page,
    ...pagebuilder,
]
