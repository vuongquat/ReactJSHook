import useFetch from "../customize/fetch";
import './Blog.scss';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from "react";
import AddNewBlog from "./AddNewBlog";
const Blog = () => {
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { data: blogs, loading: isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts', false);

    useEffect(() => {
        if (blogs && blogs.length > 0) {
            let newDataGetFromRequest = blogs.slice(0, 10);
            setNewData(newDataGetFromRequest);
        }
    }, [blogs])
    const handleAddNew = (blog) => {
        let data = newData
        data.unshift(blog);
        setShow(false);
        setNewData(data);
    }
    const handleDelete = (id) => {
        let newDataDelete = newData;
        newDataDelete = newDataDelete.filter(item => item.id !== id);
        setNewData(newDataDelete);
    }
    return (
        <>

            <Button variant="primary" className="my-3" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNew={handleAddNew} />
                </Modal.Body>

            </Modal>


            <div className="blog-container">

                {newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className="single-blog">
                            <div className="title">Title: {item.title}</div>
                            <div className="content">Content: {item.body}</div>
                            <button>
                                <Link to={`/blog/${item.id}`}> View detail </Link>
                            </button>
                            <button onClick={() => handleDelete(item.id)}>
                                Delete
                            </button>
                        </div>
                    )
                })}
                {isLoading === true &&
                    <div>Loading ...</div>
                }
            </div>
        </>
    )
}
export default Blog;


