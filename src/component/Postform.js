import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {createPost} from '../actions/postAction'
class PostForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(event){
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post)

        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h1>Add Post</h1>
                    <label>Title:</label>
                    <br />
                    <input 
                        type='text' 
                        placeholder='title' 
                        name='title'
                        value={this.state.title}
                        onChange={this.onChange}
                     />
                    <br />
                    <br />
                    <label>Text:</label>
                    <br />
                    <textarea  
                        placeholder='text' 
                        name='body'
                        value={this.state.body} 
                        onChange={this.onChange}
                     />
                     <br />
                     <button>Submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes ={
    createPost: PropTypes.func.isRequired
}
export default connect(null, {createPost})(PostForm)
