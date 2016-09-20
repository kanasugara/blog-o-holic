import React from 'react';
import Request from 'superagent';
import { browserHistory } from 'react-router';

import './newPostPage.css';

export default class NewPostPageContainer extends React.Component {
    componentWillMount(){
        const url = `/edit/${this.props.params.id}`;
        Request.get(url).then((response) => {
            this.setState({
                title: response.body.title,
                mainTxt: response.body.mainTxt
            })
        })
    }
    render() {
        return <NewPostPage onPostAdd = { this.savePost.bind(this) } />
    }
    savePost(data){
        const url = `/home`;
        Request.post(url)
        .send(data)
        .end( () => {
            browserHistory.push('home')
        })
    }
}

class NewPostPage extends React.Component{
    constructor() {
        super();
        this.state = {  
            title: '' ,
            mainTxt: '',
            mainBg: '' 
        };
    }
    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }
    handleTextChange(event) {
        this.setState({ mainTxt: event.target.value });
    }
    handleMainBgChange(event) {
        this.setState({ mainBg: event.target.value });
    }
    handlePostAdd() {
        const newPost = {
            title: this.state.title,
            mainTxt: this.state.mainTxt,
            mainBg: this.state.mainBg
        };

        this.props.onPostAdd(newPost);
    }
    render() {
        return ( 
            <div className='PostEditorWrapper'>
                <div className='PostEditor'>
                    <p>Title:</p>
                    <input
                        type='text'
                        className='PostEditorTitle'
                        placeholder='Enter title'
                        value={this.state.title}
                        onChange={this.handleTitleChange.bind(this)}
                    />
                    <p>Main Background:</p>
                    <input
                        type='text'
                        className='PostEditorMainBg'
                        placeholder='Enter Main Image URL'
                        value={this.state.mainBg}
                        onChange={this.handleMainBgChange.bind(this)}
                    />
                    <p>Main Text:</p>
                    <textarea
                        placeholder='Enter text here'
                        rows={35}
                        className='PostEditorMainTxt'
                        value={this.state.mainTxt}
                        onChange={this.handleTextChange.bind(this)}
                    />
                    <div className='footerNewPage'>
                        <button
                            className='PostEditorSaveButton'
                            disabled={!this.state.mainTxt}
                            onClick={this.handlePostAdd.bind(this)}
                        >
                        Save
                        </button>
                    </div>
                </div> 
            </div> 
        );
    }
}