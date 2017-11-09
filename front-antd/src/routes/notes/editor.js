import React from 'react'
import {connect} from 'dva'
import PageHeader from '../../components/pageHeader/pageHeader'
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

const noteEditor =({notes,dispatch})=>{

    function onEditorStateChange(editorState) {
       dispatch({
           type:'notes/update',
           payload:{editorState:editorState}
       })
    }
    function handleSubmit(){
        const data=draftToHtml(convertToRaw(notes.editorState.getCurrentContent()))
        const title=notes.editTitle
        if(notes.current){
            console.log('has current')
            dispatch({
                type:'notes/updateNote',
                payload:{title:title,content:data,id:notes.current.id}
            })
        }else{
            dispatch({
                type:'notes/createNote',
                payload:{title:title,content:data}
            })
        }

    }
    function handleTitleChange(e){
        if(notes.current!==null) {
            dispatch({
                type:'notes/update',
                payload:{editTitle:e.target.value}
            })
        }else{
            dispatch({
                type:'notes/update',
                payload:{editTitle:e.target.value}
            })
        }

    }


        const { editorState } = notes
        return (
            <div>
                <PageHeader title="Create New Note" />
                <div className={style.title}>
                    <TextField
                        margin="dense"
                        label="Title"
                        type="text"
                        fullWidth
                        value={notes.editTitle?notes.editTitle:''}
                        className={style.titleInput}
                        onChange={handleTitleChange}
                    />
                </div>
                <div style={{display:'flex',margin:20}}>
                    <Card style={{flex:2}}>
                        <MyEditor
                            wrapperStyle={{minHeight: 500,flex:2}}
                            editorStyle={{minHeight: 376,}}
                            editorState={editorState}
                            onEditorStateChange={onEditorStateChange}
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
                    <Button raised color="accent" onClick={handleSubmit}>
                        SAVE
                    </Button>
                </div>

            </div>

        )


}
export default connect(({notes})=>({notes}))(noteEditor)