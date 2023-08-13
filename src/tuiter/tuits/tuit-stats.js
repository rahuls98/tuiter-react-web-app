import {
    FaRegComment,
    FaRetweet,
    FaRegHeart,
    FaHeart,
    FaRegShareSquare,
} from "react-icons/fa";
import { BiDislike, BiSolidDislike } from "react-icons/bi";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    return (
        <div className="row">
            <div className="col-2">
                <span className="me-3">
                    <FaRegComment />
                </span>
                {tuit.replies || 0}
            </div>
            <div className="col-2">
                <span className="me-3">
                    <FaRetweet />
                </span>
                {tuit.retuits || 0}
            </div>
            <div className="col-2">
                <span className="me-3">
                    {tuit.liked ? (
                        <FaHeart
                            className="text-danger"
                            onClick={() =>
                                dispatch(
                                    updateTuitThunk({
                                        ...tuit,
                                        liked: false,
                                        likes: tuit.likes - 1,
                                    })
                                )
                            }
                        />
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
                {tuit.likes || 0}
            </div>
            <div className="col-2">
                <span className="me-3">
                    {tuit.disliked ? (
                        <BiSolidDislike
                            onClick={() =>
                                dispatch(
                                    updateTuitThunk({
                                        ...tuit,
                                        disliked: false,
                                        dislikes: tuit.dislikes - 1,
                                    })
                                )
                            }
                        />
                    ) : (
                        <BiDislike
                            onClick={() =>
                                dispatch(
                                    updateTuitThunk({
                                        ...tuit,
                                        disliked: true,
                                        dislikes: tuit.dislikes + 1,
                                    })
                                )
                            }
                        />
                    )}
                </span>
                {tuit.dislikes || 0}
            </div>
            <div className="col-2">
                <FaRegShareSquare />
            </div>
        </div>
    );
};

export default TuitStats;
