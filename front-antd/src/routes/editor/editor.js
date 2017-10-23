import React from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
export default class MyEditor extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
        editorState: EditorState.createEmpty(),
    };
}
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    render(){
        return (
            <div style={{width:'90%',margin:'20px auto'}}>
                <Editor
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
        )
    }
}