import React from 'react';
import Request from 'superagent';
import { browserHistory } from 'react-router';

import './EditPostPage.css';

export default class EditPostPageContainer extends React.Component {
    componentWillMount(){
        const url = `/edit/${this.props.params.id}`;
        Request.get(url).then((response) => {
            this.setState({
                post: response.body
            })
        })
    }
    render() {
        var data = this.state.post
        return <EditPostPage 
                    onPostAdd = {this.savePost.bind(this)}
                    key = {data._id}
                    id = {data._id}
                    title = {data.title}
                    mainTxt = {data.mainTxt}
                    mainBg = {data.mainBg}
                />
    }
    editPost(data){
        const url = `/home`;
        Request.put(url)
        .send(data)
        .end( () => {
            browserHistory.push(`posts/${this.state.post._id}`)
        })
    }
}

class EditPostPage extends React.Component{
    constructor() {
        super();
            this.state = {  
                title: this.props.title ,
                mainTxt: this.props.mainTxt ,
                mainBg: this.props.mainBg 
            };
    }
    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }
    handleTextChange(event) {
        this.setState({ mainTxt: event.target.value });
    }
    handleMainBgChange(event) {
        this.setState({ mainTxt: event.target.value });
    }
    handlePostAdd() {
        const editedPost = {
            title: this.state.title,
            mainTxt: this.state.mainTxt,
            mainBg: this.state.mainBg
        };

        this.props.onPostEdit(editedPost);
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
                    <div className='PostEditorMainBgWrapper'>
                        <div id="PostEditorMainBgLabel"></div>
                        <div className='PostEditorMainBgBrowse'>Browse</div>
                        <input  type='file'
                                className='PostEditorMainBg'
                                placeholder='Browse main Background'
                                onChange={this.handleMainBgChange.bind(this)} 
                        />
                    </div>
                    <p>Main Text:</p>
                    <textarea
                        placeholder='Enter text here'
                        rows={35}
                        className='PostEditorMainTxt'
                        value={this.state.mainTxt}
                        onChange={this.handleTextChange.bind(this)}
                    />
                    <div className='footerEditPage'>
                        <button
                            className='PostEditorSaveButton'
                            disabled={!this.state.mainTxt}
                            onClick={this.handlePostEdit.bind(this)}
                        >
                        Save
                        </button>
                    </div>
                </div> 
            </div> 
        );
    }
}