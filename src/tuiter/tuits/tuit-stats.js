import {
    FaRegComment,
    FaRetweet,
    FaRegHeart,
    FaHeart,
    FaRegShareSquare,
} from "react-icons/fa";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    return (
        <div className="row">
            <div className="col-3">
                <span className="me-3">
                    <FaRegComment />
                </span>
                {tuit.replies}
            </div>
            <div className="col-3">
                <span className="me-3">
                    <FaRetweet />
                </span>
                {tuit.retuits}
            </div>
            <div className="col-3">
                <span className="me-3">
                    {tuit.liked ? (
                        <FaHeart className="text-danger" />
                    ) : (
                        <FaRegHeart
                            onClick={() =>
                                dispatch(
                                    updateTuitThunk({
                                        ...tuit,
                                        liked: true,
                                        likes: tuit.likes + 1,
                                    })
                                )
                            }
                        />
                    )}
                </span>
                {tuit.likes}
            </div>
            <div className="col-3">
                <FaRegShareSquare />
            </div>
        </div>
    );
};

export default TuitStats;
