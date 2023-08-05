import TuitItem from "./tuit-item";
import { useSelector } from "react-redux";

const TuitsList = () => {
    const { tuits } = useSelector((state) => state.tuits);

    return (
        <ul className="list-group">
            {tuits.map((tuit) => (
                <TuitItem tuit={tuit} />
            ))}
        </ul>
    );
};

export default TuitsList;
