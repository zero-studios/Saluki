import blockContent from './blockContent'
import post from './post'
import page from './page'
import pagebuilder from './pagebuilder'


export const schemaTypes = [
    post, 
    blockContent,

    page,
    ...pagebuilder,
]
