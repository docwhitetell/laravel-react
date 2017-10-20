import React from 'react'
import ReactDOM from 'react-dom'

import Editor, { Editable } from 'ory-editor-core'

import image from 'ory-editor-plugins-image'
import 'ory-editor-plugins-image/lib/index.css'

const editor = new Editor({
    plugins: {
        content: [image]
    }
})

const EditorPage=()=>{
    return (
        <Editable editor={editor} />
    )
}
export default EditorPage