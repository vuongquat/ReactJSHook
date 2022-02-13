import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div>
            <h1>Trang này không hiển thị</h1>
            <h2>Có thể liên kết đã hỏng hoặc trang đã bị gỡ. Hãy kiểm tra xem liên kết mà bạn đang cố mở có chính xác không.</h2>
            <button className="btn btn-danger" ><Link to="/">Quay lại trang chủ</Link></button>
        </div>
    )
}
export default NotFound;