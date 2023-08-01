import React, { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { MdFormatListBulleted } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
// import { addTuit } from "./reducers/home-tuits-reducer";
import { useDispatch } from "react-redux";
import { createTuit } from "./reducers/tuits-reducer";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState("");
    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening,
        };
        dispatch(createTuit(newTuit));
        setWhatsHappening("");
    };
    return (
        <div className="row">
            <div className="col-auto">
                <img src="/images/nasa.png" width={60} />
            </div>
            <div className="col-10">
                <textarea
                    value={whatsHappening}
                    placeholder="What's happening?"
                    className="form-control border-0"
                    onChange={(event) => setWhatsHappening(event.target.value)}
                ></textarea>
                <div>
                    <button
                        className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={tuitClickHandler}
                    >
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <AiOutlinePicture className="me-3" />
                        <MdFormatListBulleted className="me-3" />
                        <BsEmojiSmile className="me-3" />
                        <HiOutlineLocationMarker className="me-3" />
                    </div>
                </div>
            </div>
            <div className="col-12">
                <hr />
            </div>
        </div>
    );
};
export default WhatsHappening;