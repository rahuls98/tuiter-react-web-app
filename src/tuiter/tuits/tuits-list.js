import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TuitItem from "./tuit-item";
import { findTuitsThunk } from "../services/tuits-thunks";

const TuitsList = () => {
    const { tuits, loading } = useSelector((state) => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk());
    }, []);

    return (
        <ul className="list-group">
            {loading && <li className="list-group-item">Loading...</li>}
            {!loading && tuits.length === 0 ? (
                <li className="list-group-item">No tuits!</li>
            ) : (
                tuits.map((tuit) => <TuitItem tuit={tuit} />)
            )}
        </ul>
    );
};

export default TuitsList;
