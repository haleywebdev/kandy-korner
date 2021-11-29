// when you change the URL with JS, the browser broadcasts and event that the URL was changed.
// now implement another component to listen for that event and display the appropriate component. 
// this is done in ApplicationViews.js

// the routes in here are listening for the event. 

// ApplicationViews is a controller component. 

import React from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/EmployeeList.js"
import { HiringForm } from "./employees/HiringForm.js"
import { CustomerList } from "./customers/CustomerList.js"
import { PurchaseList } from "./purchases/PurchaseList.js"
import { PurchaseForm } from "./purchases/PurchaseForm.js"
import { Purchase } from "./purchases/Purchase.js"
import { Location } from "./locations/Locations.js"
import { ProductLocationsList } from "./locations/ProductLocationsList.js"
import { ProductList } from "./products/ProductList.js"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/Locations">
                <Location />
            </Route>

            <Route path="/Products">
                <ProductList />
            </Route>

            <Route exact path="/productLocations/:locationId(\d+)">
                <ProductLocationsList />
            </Route>

            <Route path="/Customers">
                <CustomerList />
            </Route>

            <Route exact path="/Purchases">
                <PurchaseList />
            </Route>

            <Route exact path="/purchases/:purchaseId(\d+)">
                <Purchase />
            </Route>
            

            <Route exact path="/Employees">
                <EmployeeList />
            </Route>

            <Route exact path="/employees/create">
                <HiringForm />
            </Route>

        </>
    )
}
