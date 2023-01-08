import { useState, useRef, useEffect } from "react"

import Comment from "./Comment";

function Comments() {
    const inputRef = useRef('');
    const [comments, setComments] = useState([]);


    useEffect(() => {
        inputRef.current.value = '';
    }, [comments])
    

    function onsubmit(e) {
        e.preventDefault();

        if(inputRef.current.value === '') {
            return;
        }

        setComments((prev) => [...prev, inputRef.current.value]);
    }

    return (<>
        <h1 style={{textAlign: 'center'}}>Comments</h1>
        <div className='comments-container'>
            <ul id='commentList'>
                {comments.map((comment) => (
                    <Comment comment={comment} />
                ))}
            </ul>

            <form>
                <input type='text' id='comment'
                ref={inputRef}/>
                <input type='button' 
                    id='postComment' 
                    value='Post'
                    placeholder="Add Comment..."
                    onClick={onsubmit} />
            </form>
        </div>
    </>)
}


export default Comments