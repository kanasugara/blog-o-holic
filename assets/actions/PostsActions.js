import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const PostActions = {
    loadPosts() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_POSTS_REQUEST
        });

        api.listPosts()
        .then(({ data }) =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_POSTS_SUCCESS,
                posts: data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_POSTS_FAIL,
                error: err
            })
        );
    },

    createPost(post) {
        api.createPost(post)
        .then(() =>
            this.loadPosts()
        )
        .catch(err =>
            console.error(err)
        );
    },

    deletePost(postId) {
        api.deletePost(postId)
        .then(() =>
            this.loadPosts()
        )
        .catch(err =>
            console.error(err)
        );
    }
};

export default PostActions;