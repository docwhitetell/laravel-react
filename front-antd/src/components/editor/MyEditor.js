import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


import styles from './style.less'

const MyEditor=(props)=> {
        return (
            <div>
                <Editor
                        wrapperClassName={styles.wrapper}
                        toolbarClassName={styles.toolbar}
                        editorClassName={styles.editor}
                        {...props}
                    />
            </div>
        );

}
export default MyEditor