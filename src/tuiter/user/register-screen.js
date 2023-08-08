import React, { useState } from "react";
import { registerThunk } from "../services/auth-thunks.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const RegisterScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegistration = async () => {
        try {
            const data = {
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName,
            };
            let response = await dispatch(registerThunk(data));
            if (response.payload) {
                navigate("/tuiter/profile");
            } else {
                alert("This username has been taken, please try another!");
            }
        } catch (e) {
            alert(e);
        }
    };

    return (
        <>
            <h1>Register Screen</h1>
            <div className="mt-2">
                <label>Username</label>
                <input
                    className="form-control"
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div className="mt-2">
                <label>Password</label>
                <input
                    className="form-control"
                    type="text"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div className="mt-2">
                <label>First Name</label>
                <input
                    className="form-control"
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
            </div>
            <div className="mt-2">
                <label>Last Name</label>
                <input
                    className="form-control"
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
            </div>
            <button
                className="btn btn-primary mt-2"
                onClick={handleRegistration}
            >
                Register
            </button>
        </>
    );
};

export default RegisterScreen;
