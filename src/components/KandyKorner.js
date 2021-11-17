
// This is the main component.

import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./KandyKorner.css"

export const KandyKorner = () => {
    return (
        <>

            <NavBar />

            <h2>Kandy Korner Candy Shop</h2>

            <ApplicationViews />

        </>
    )
}