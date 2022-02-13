import './Blog.scss'
import { useState } from 'react';
import axios from 'axios';
const AddNewBlog = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleOnclickSubmit = async () => {
        if (!title) {
            alert('emty title');
            return;
        }
        if (!content) {
            alert('emty content');
            return;
        }

        let data = {
            title: title,
            body: content,
            userId: 1,
        }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddNew(newBlog);
        }
    }


    return (
        <div className="form">
            <div className="add-new-title">add new blog</div>
            <div>
                <div className="input">
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(event) => { setTitle(event.target.value) }} />
                </div>
                <div className="input">
                    <label>Content: </label>
                    <input type="text" value={content} onChange={(event) => { setContent(event.target.value) }} />
                </div>
                <button onClick={handleOnclickSubmit}>Submit</button>
            </div>
        </div>
    )
}
export default AddNewBlog;