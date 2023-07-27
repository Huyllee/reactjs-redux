import {takeLatest, call, put} from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../services';

function* fetchPostsSaga(action) {
    try{
        const posts = yield call(api.fetchPosts);
        console.log('[posts]', posts.data);
        yield put(actions.getPosts.getPostsSuccess(posts.data));
    } catch(err){
        yield put(actions.getPosts.getPostsFailure(err));
        console.log('getPostsFailure');
    }
}

function* createPostSaga(action) {
    try{
        const post = yield call(api.createPost, action.payload);
        console.log('[createPost]', post.data);
        yield put(actions.createPost.createPostSuccess(post.data));
    } catch(err){
        yield put(actions.createPost.createPostFailure(err));
        console.log('getPostsFailure');
    }
}

function* updatePostSaga(action) {
    try{
        const updatePost = yield call(api.updatePost, action.payload);
        console.log('[createPost]', updatePost.data);
        yield put(actions.createPost.updatePostSuccess(updatePost.data));
    } catch(err){
        yield put(actions.createPost.updatePostFailure(err));
        console.log('getPostsFailure');
    }
}
 
function* mySaga() {
    //takeLatest co nghia la gia su o phia ui co nhieu action dc goi cx luc ma 
    //cac saga xu ly cac action truoc do van chu xong thi chi co action cuoi dc
    //thuc hien con cac action truoc do se bi cancel het
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

//generator function ES6
export default mySaga;