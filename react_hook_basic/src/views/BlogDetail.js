import { useParams, useHistory } from "react-router";
import useFetch from "../customize/fetch";
const BlogDetail = () => {
    let { id } = useParams();
    let history = useHistory();
    const { data: blogDetail, loading: isLoading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);
    const handleBackData = () => {
        history.push('/blog');
    }
    return (
        <>
            <div>
                <button onClick={handleBackData}>Back</button>
            </div>
            <div className="blog-detail">
                {blogDetail &&
                    <>
                        <div className="title">
                            {blogDetail.title}
                        </div>
                        <div className="body">
                            {blogDetail.body}
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default BlogDetail;