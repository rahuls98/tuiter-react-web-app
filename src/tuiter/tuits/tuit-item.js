import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../services/tuits-thunks";
import { GrClose } from "react-icons/gr";

const TuitItem = ({
    tuit = {
        _id: 234,
        topic: "Space",
        userName: "SpaceX",
        title: "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        time: "2h",
        image: "spaceX.jpg",
        liked: true,
        replies: 123,
        retuits: 432,
        likes: 2345,
        handle: "@spacex",
        tuit: "You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past. And I can't think of anything more exciting than going out there and being among the stars",
    },
}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    };

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img
                        className="rounded-circle"
                        height={48}
                        width={48}
                        src={`/images/${tuit.image}`}
                    />
                </div>
                <div className="col-11">
                    <i
                        className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(tuit._id)}
                    >
                        <GrClose />
                    </i>
                    <div className="d-flex align-items-center">
                        <span className="d-inline-block fw-bold mx-1">
                            {tuit.username}
                        </span>
                        <span className="d-inline-block mx-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="#03a9f4"
                                class="bi bi-patch-check-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                            </svg>
                        </span>
                        <span className="d-inline-block mx-1 text-muted">
                            {tuit.handle} ·
                        </span>
                        <span className="d-inline-block text-muted">
                            {tuit.time}
                        </span>
                    </div>
                    <p>{tuit.tuit}</p>
                    <TuitStats tuit={tuit} />
                </div>
            </div>
        </li>
    );
};

export default TuitItem;
