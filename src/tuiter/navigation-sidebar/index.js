import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const NavigationSidebar = () => {
    const { currentUser } = useSelector((state) => state.user);
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const navigate = useNavigate();
    const links = [
        "home",
        "explore",
        "notifications",
        "messages",
        "bookmarks",
        "lists",
        // "profile",
        "more",
    ];

    useEffect(() => {
        if (!active && !currentUser) {
            navigate("/tuiter/login");
        } else if (!active && currentUser) {
            navigate("/tuiter/profile");
        }
    }, []);

    return (
        <div className="list-group">
            {!currentUser && (
                <Link
                    className={`list-group-item text-capitalize ${
                        active === "login" ? "active" : ""
                    }`}
                    to="/tuiter/login"
                >
                    {" "}
                    Login{" "}
                </Link>
            )}
            {!currentUser && (
                <Link
                    className={`list-group-item text-capitalize ${
                        active === "register" ? "active" : ""
                    }`}
                    to="/tuiter/register"
                >
                    Register
                </Link>
            )}
            {currentUser && (
                <Link
                    className={`list-group-item text-capitalize ${
                        active === "profile" ? "active" : ""
                    }`}
                    to="/tuiter/profile"
                >
                    {" "}
                    Profile{" "}
                </Link>
            )}
            {links.map((link) => (
                <Link
                    to={`/tuiter/${link}`}
                    className={`list-group-item text-capitalize ${
                        active === link ? "active" : ""
                    }`}
                >
                    {link}
                </Link>
            ))}
        </div>
    );
};
export default NavigationSidebar;
