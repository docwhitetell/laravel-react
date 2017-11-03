import React from 'react'
import Grid from 'material-ui/Grid';
import Dropzone from '../../components/upload/Dropzone'
import PageHeader from '../../components/pageHeader/pageHeader'
import Button from 'material-ui/Button';

const formUpload =()=>{
    let props={}
    props.url='http://www.gitbase.com/api/file/upload'
    return (
        <div>
            <PageHeader title="Multi-files drag & auto upload" />
            <Grid container style={{display:'block',margin:20,width:'auto'}}>
                <Grid item style={{background:'#e3e3e3',borderRadius:10}} xs={12}>
                    <Dropzone {...props}/>
                </Grid>
                <Grid item xs={12}>
                    <Button raised color="primary" style={{width:'100%'}}>
                        My Files
                    </Button>
                </Grid>

            </Grid>
        </div>
    )
}
export default formUpload