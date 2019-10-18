import { FETCH_POST, NEW_POST} from '../actions/types';
import { dispatch } from 'react-redux'

export const fetchPosts = () => dispatch => {
    console.log("fetching")
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POST,
            payload: posts
        })
    ) 
}

export const createPost = (postData) => dispatch => {
    console.log("fetching")
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
            
        }).then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }))
        
}