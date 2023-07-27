import React, { useCallback, useState } from 'react';
import FileBase64 from 'react-file-base64'
import {Button, Modal, TextField, TextareaAutosize} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {modalState$} from '../../store/selectors';
import useStyles from './styles';
import { createPost, hideModal } from '../../store/actions';

export default function CreatePostModal() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { isShow } = useSelector(modalState$);
    const [data, setData] = useState({
        title: '',
        content: '',
        attachment: ''
    });

    const onClose = useCallback(()=>{
        dispatch(hideModal());
        setData({
            title: '',
            content: '',
            attachment: '' 
        })
    }, [dispatch])

    const onSubmit = useCallback(()=>{
        dispatch(createPost.createPostRequest(data));
    }, [data, dispatch])

    const body = (
        <div className={classes.paper} id='simple-modal-title'>
            <h2>Create New Post</h2>
            <form noValidate autoComplete='off' className={classes.form}>
                <TextField 
                className={classes.title}
                label='Title'
                value={data.title} 
                onChange={e=>setData({...data, title: e.target.value})}
                required />
                <TextareaAutosize 
                className={classes.textarea}
                rowsMin={10}
                rowsMax={15}
                placeholder='Content...'
                value={data.content}
                onChange={e=>setData({...data, content: e.target.value})} />
                <FileBase64 
                accept='image/*' 
                multiple={false} 
                type="file"
                value={data.attachment}
                onDone={({ base64 }) => setData({ ...data, attachment: base64 })} />
                <div className={classes.footer}>
                    <Button 
                    variant='contained'
                    color='primary'
                    component='span'
                    onClick={onSubmit}
                    fullWidth>
                        Create
                    </Button>
                </div>
            </form>
        </div>
    );

  return (
    <div>
        <Modal open={isShow} onClose={onClose}>
            {body}
        </Modal>
    </div>
  )
}
