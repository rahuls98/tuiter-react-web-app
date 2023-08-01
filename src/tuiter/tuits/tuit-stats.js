import {
    FaRegComment,
    FaRetweet,
    FaRegHeart,
    FaHeart,
    FaRegShareSquare,
} from "react-icons/fa";

const TuitStats = ({ liked = false, replies = 0, retuits = 0, likes = 0 }) => {
    return (
        <div className="row">
            <div className="col-3">
                <span className="me-3">
                    <FaRegComment />
                </span>
                {replies}
            </div>
            <div className="col-3">
                <span className="me-3">
                    <FaRetweet />
                </span>
                {retuits}
            </div>
            <div className="col-3">
                <span className="me-3">
                    {liked ? (
                        <FaHeart className="text-danger" />
                    ) : (
                        <FaRegHeart />
                    )}
                </span>
                {likes}
            </div>
            <div className="col-3">
                <FaRegShareSquare />
            </div>
        </div>
    );
};

export default TuitStats;
