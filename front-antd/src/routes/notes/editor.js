import React from 'react'
import {connect} from 'dva'
import { withStyles } from 'material-ui/styles';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import MyEditor from '../../components/editor/MyEditor'
import Grid from 'material-ui/Grid'


import style from './style.css'

const styles = theme => ({
    pageHeader:{
        backgroundColor:theme.palette.primary[800],
        height:100
    },
    pageTitle:{
        color:theme.palette.common.white,
        height:80,
        lineHeight:'100px',
        fontSize:20,
        textIndent:20
    },
    gridList: {
        height: 'auto',
    },
    subheader: {
        width: '100%',
    },
    tabsroot:{
        /*  backgroundColor: theme.palette.background.paper,*/
        marginBottom:6
    },
})
const noteEditor =({notes,dispatch,classes})=>{

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
    function handleTablePageChange(pagination,filters, sorter) {
        if(pagination.current===dashboard.pagination.current){
        }else{
            dispatch({
                type:'notes/getUserResource',
                payload:pagination
            })
        }
    }

        const { editorState } = notes
        return (
            <div>
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
                    <Button component="a" raised color="accent" href="/files-lists" target="_top">
                        Your Resource
                    </Button>
                </div>
                <Grid container spacing={0} style={{margin:0,padding:20}}>
                    <Grid item xs={12}>
                        <Card >
                            <MyEditor
                                wrapperStyle={{minHeight: 500}}
                                editorStyle={{minHeight: 376,}}
                                editorState={editorState}
                                onEditorStateChange={onEditorStateChange}
                            />
                        </Card>
                    </Grid>

                </Grid>

                <div style={{textAlign:'center'}}>
                    <Button raised color="accent" onClick={handleSubmit}>
                        SAVE
                    </Button>
                </div>

            </div>

        )


}
export default connect(({notes})=>({notes}))(withStyles(styles)(noteEditor))