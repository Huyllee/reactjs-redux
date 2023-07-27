import React, { useCallback } from 'react';
import { Container, Fab } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import Header from '../components/Header';
import PostList from '../components/PostList';
import useStyles from './styles';
import CreatePostModal from '../components/CreatePostModal';
import {showModal} from '../store/actions';

function HomePage() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const openCreatePostModal = useCallback(()=>{
        dispatch(showModal());
    }, [dispatch])

    return ( 
        <Container maxWidth='lg'>
            <Header  />
            <PostList />
            <CreatePostModal />
            <Fab color='primary' 
            className={classes.fab}
            onClick={openCreatePostModal} >
                <AddIcon />
            </Fab>
        </Container>
    );
}

export default HomePage;