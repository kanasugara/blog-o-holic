import React from 'react';
import Request from 'superagent';

import './newPostPage.css';

export default class NewPostPageContainer extends React.Component {
    render() {
        return <NewPostPage onPostAdd={this.savePost.bind(this)} />
    }
    savePost(data){
        const url = `/home`;
        Request.post(url)
        .send(data)
        .end( () => {
            alert('yop!')
        })
    }
}

class NewPostPage extends React.Component{
    constructor() {
    super();
        this.state = {  title: ''   ,
                        mainTxt: '' ,
                        mainBg: '' 
                        };
    }
    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }
    handleTextChange(event) {
        this.setState({ mainTxt: event.target.value });
    }
    handlePostAdd() {
        const newPost = {
            title: this.state.title,
            mainTxt: this.state.mainTxt,
            mainBg: '../img/01.jpg'
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
                    <div className='PostEditorMainBgWrapper'>
                        <div id="PostEditorMainBgLabel"></div>
                        <div className='PostEditorMainBgBrowse'>Browse</div>
                        <input  type='file'
                                className='PostEditorMainBg'
                                placeholder='Browse main Background'
                                // onChange={this.handleMainBgChange(self, mainBg)}
                                onChange={this.handleMainBgChange} 
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