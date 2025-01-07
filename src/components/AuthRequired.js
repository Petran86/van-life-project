import React from "react";
import { Outlet, Navigate, useLocation } from "react-router";

export default function AuthRequired() {
    // const authenticated = false

    // if (!authenticated) {
    //     return <Navigate to="/login" state={{ message: "You must log in first" }} />
    // }
    const isLoggedIn = localStorage.getItem("loggedin")
    const location = useLocation()

    if (!isLoggedIn) {
        return (
            <Navigate
                to="/login"
                state={{ message: "You must log in first", from: location }}
                //state={{ from: location }}
                replace
            />
        )
    }

    return <Outlet />
}