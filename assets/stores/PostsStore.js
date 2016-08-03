import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _posts = [];
let _loadingError = null;
let _isLoading = true;

function formatPost(post) {
    return {
        id: note._id,
        title: note.title,
        mainTxt: note.text,
        Bg: note.mainBg,
        createdAt: note.createdAt
    };
}

const PostsStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getPosts() {
        return _posts;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.LOAD_POSTS_REQUEST: {
            _isLoading = true;

            PostsStore.emitChange();
            break;
        }

        case AppConstants.LOAD_POSTS_SUCCESS: {
            _isLoading = false;
            _posts = action.posts.map( formatNote );
            _loadingError = null;

            PostsStore.emitChange();
            break;
        }

        case AppConstants.LOAD_POSTS_FAIL: {
            _loadingError = action.error;

            PostsStore.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});

export default PostsStore;