import React, { useEffect } from 'react';
import {Grid} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import {postsState$} from '../../store/selectors';
import PostItem from './PostItem';

function PostList() {
    const dispatch = useDispatch();
    const posts = useSelector(postsState$);

    console.log('post selectors', posts);

    useEffect(()=>{
        dispatch(actions.getPosts.getPostsRequest());
    }, [dispatch])

  return (
    <Grid container spacing={2} alignItems='stretch'>
        {posts && posts.map((item,index)=>{
            return (
                <Grid xs={12} sm={6}>
                    <PostItem post={item} key={item._id} />
                </Grid>
            )
        })}
    </Grid>
  )
}

export default PostList