
// This is the main component.

import React from "react"
import { Route, Redirect } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
        <Route
            render={() => {
                if (localStorage.getItem("kandy_customer")) {
                    return (
                        <>
                            <NavBar />
                            <h1>Kandy Korner Candy Shop</h1>
                            <ApplicationViews />
                        </>
                    );
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />

        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
)