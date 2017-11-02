import React from 'react'
import Grid from 'material-ui/Grid';
import Dropzone from '../../components/upload/Dropzone'



const formUpload =()=>{
    let props={}
    props.url='http://www.gitbase.com/api/file/upload'
    return (
        <div style={{padding:20}}>
            <Grid container>
                <Grid item style={{background:'#e3e3e3',borderRadius:10}} xs={12}>
                    <Dropzone {...props}/>
                </Grid>
            </Grid>
        </div>
    )
}
export default formUpload