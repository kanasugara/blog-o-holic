import React from 'react';
import Request from 'superagent';
import { browserHistory } from 'react-router';

export default class EditPostPageContainer extends React.Component {
    constructor() {
      super();
          this.state = {  
            post: ''   ,
            };
      }
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
                    onPostEdit = {this.editPost.bind(this)}
                    key = {data._id}
                    id = {data._id}
                    title = {data.title}
                    mainTxt = {data.mainTxt}
                    mainBg = {data.mainBg}
                />
    }
    editPost(data){
        const url = `/edit`;
        Request.put(url)
        .send(data)
        .end( () => {
            browserHistory.push(`home`)
        })
    }
}

class EditPostPage extends React.Component{
    constructor() {
        super();
            this.state = {};
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
    handlePostEdit() {
        const editedPost = {
            id : this.props.id  ,
            title: this.state.title,
            mainTxt: this.state.mainTxt,
            mainBg: this.state.mainBg
        };
        this.props.onPostEdit(editedPost);
    }
    componentWillMount(){
        this.setState({
            title: this.props.title ,
            mainTxt: this.props.mainTxt ,
            mainBg: this.props.mainBg 
        })
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
                    <div className='footerEditPage'>
                        <button
                            className='PostEditorSaveButton'
                            disabled={!this.state.mainTxt}
                            onClick={this.handlePostEdit.bind(this)}
                        >
                        Edit
                        </button>
                    </div>
                </div> 
            </div> 
        );
    }
}