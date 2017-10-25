import React from 'react'
import {connect} from 'dva'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import MyEditor from '../../components/editor/MyEditor'
import style from './style.css'
class noteEditor extends React.Component{
    constructor(props){
        super(props)
        this.state={
            editorState: EditorState.createEmpty(),
            title:''
        }
    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        })
    }
    handleSubmit=()=>{
        const data=draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
        const title=this.state.title
        const {dispatch}=this.props
        dispatch({
            type:'posts/postUserNote',
            payload:{title:title,content:data}
        })
    }
    handleTitleChange=(e)=>{
        this.setState({
            title:e.target.value
        })
    }
    render(){
        const { editorState } = this.state
        return (
            <div>
                <div className={style.title}>
                    <TextField
                        margin="dense"
                        label="Title"
                        type="text"
                        fullWidth
                        className={style.titleInput}
                        onChange={this.handleTitleChange}
                    />
                </div>
                <div style={{display:'flex',margin:20}}>
                    <Card style={{flex:2}}>
                        <MyEditor
                            wrapperStyle={{minHeight: 500,flex:2}}
                            editorStyle={{minHeight: 376,}}
                            editorState={editorState}
                            onEditorStateChange={this.onEditorStateChange}
                        />
                    </Card>
                    <textarea style={{
                        minHeight: 300,
                        background: '#f7f7f7',
                        borderColor: '#F1F1F1',
                        padding: '16px 8px',flex:2}}
                              disabled
                              value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                    />
                </div>
                <div style={{textAlign:'center'}}>
                    <Button raised color="accent" onClick={this.handleSubmit}>
                        SAVE
                    </Button>
                </div>

            </div>

        )
    }

}
export default connect(({posts})=>({posts}))(noteEditor)