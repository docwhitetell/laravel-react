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
import {Icon} from 'antd'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styles from './styles'

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
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        vertical:false,
        swipe:true,
        verticalSwiping: false,
        slidesToShow: 5,
        swipeToSlide: true,
        slidesToScroll: 1,
        arrows:true,
        responsive:[
            { breakpoint: 600, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 1312, settings: { slidesToShow: 5 } },
            { breakpoint: 1920, settings: { slidesToShow: 6 } },

        ]
    };
        const { editorState } = notes
        return (
            <div style={{marginTop:-68}}>

                <Grid container spacing={0} style={{margin:0,padding:20}}>
                    <Grid item xs={12} style={{position:'relative'}}>
                        <Card style={{height:120,overflow:'hidden'}}>
                            <Slider {...settings}>
                                {notes.userResource.map((item,index)=>{
                                    return (
                                        <div style={{position:'relative',height:120,overflow:'hidden'}} key={index}>
                                            {item.type==='video/mp4' && <video src={item.path} style={{width:'100%',height:'100%',objectFit:'fill'}}></video>}
                                            {item.type!=='video/mp4' && <img src={item.path} style={{width:'100%',height:'100%',objectFit:'fill'}} alt=""/>}
                                            <div className="mask"
                                                 style={{
                                                     position:'absolute',
                                                     height:"100%",
                                                     width:'100%',
                                                     top:0,left:0,
                                                     background:'rgba(0,0,0,0.4)',
                                                     color:'#ffffff',zIndex:99999
                                                 }}
                                            >
                                                {item.type==='video/mp4' &&
                                                <div>
                                                    <p style={{textIndent:'1em',marginTop:10}}>{item.original_name}</p>
                                                    <Icon type="video-camera" style={{position:'absolute',right:10,top:10}} />
                                                </div>

                                                }
                                                {item.type!=='video/mp4' &&
                                                <div>
                                                    <p style={{textIndent:'1em',marginTop:10}}>{item.original_name}</p>
                                                    <Icon type="picture" style={{position:'absolute',right:10,top:10}} />
                                                </div>

                                                }
                                                <Button
                                                    data-clipboard-text={item.path}
                                                    raised color="primary"
                                                    className="copy-button"
                                                    style={{position:'absolute',
                                                        top:'50%',left:'50%',
                                                        transform:'translate(-50%,-50%)',
                                                        fontSize:'12px',
                                                        padding:'0 12px',
                                                        height:'28px',
                                                        minWidth:'0',minHeight:'0'
                                                    }}
                                                >Copy</Button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </Card>
                        <Card>
                            <div className={classes.title}>
                                <TextField
                                    margin="dense"
                                    label="Title"
                                    type="text"
                                    style={{margin:'0 auto',width:300}}
                                    fullWidth
                                    value={notes.editTitle?notes.editTitle:''}
                                    className={classes.titleInput}
                                    onChange={handleTitleChange}
                                />
                            </div>
                            <MyEditor
                                wrapperStyle={{minHeight: 600}}
                                editorStyle={{height: 520,}}
                                editorState={editorState}
                                onEditorStateChange={onEditorStateChange}
                            />
                        </Card>
                    </Grid>

                </Grid>

                <div style={{textAlign:'center',marginBottom:20}}>
                    <Button raised color="accent" onClick={handleSubmit} style={{marginRight:20}}>
                        SAVE
                    </Button>
                    <Button raised color="primary" onClick={handleSubmit}>
                        PREVIEW
                    </Button>
                </div>

            </div>

        )


}
export default connect(({notes})=>({notes}))(withStyles(styles)(noteEditor))