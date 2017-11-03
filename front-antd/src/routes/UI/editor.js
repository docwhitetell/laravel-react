import React from 'react'
import {connect} from 'dva'
import { withStyles } from 'material-ui/styles';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Card from 'material-ui/Card';
import MyEditor from '../../components/editor/MyEditor'
const styles=theme=>({
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
})
class UIEditor extends React.Component{
    constructor(props){
        super(props)
        this.state={
            editorState:EditorState.createEmpty(),
        }
    }
     onEditorStateChange=(editorState)=>{
        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
        this.setState({
            editorState
        })
     }
    render(){
        const {editorState}=this.state
        const {classes}=this.props
        return (
            <div>
                <section className={classes.pageHeader}>
                    <h4 className={classes.pageTitle}>React Editor</h4>
                </section>
                <div style={{display:'flex',margin:20}}>
                    <Card style={{flex:2}}>
                        <MyEditor
                            wrapperStyle={{minHeight: 400,flex:2}}
                            editorStyle={{minHeight: 276,}}
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
            </div>
        )
    }

    //const editorState = state.editorState



}
export default connect(({editor})=>({editor}))(withStyles(styles)(UIEditor))