// when you change the URL with JS, the browser broadcasts and event that the URL was changed.
// now implement another component to listen for that event and display the appropriate component. 
// this is done in ApplicationViews.js

// the routes in here are listening for the event. 

// ApplicationViews is a controller component. 

import React from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/EmployeeList.js"
import { HiringForm } from "./employees/HiringForm.js"
import { LocationsList } from "./locations/LocationsList.js"
import { ProductList } from "./products/ProductList.js"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/Locations">
                <LocationsList />
            </Route>

            <Route path="/Products">
                <ProductList />
            </Route>

            <Route path="/Employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/create">
                <HiringForm />
            </Route>

        </>
    )
}
