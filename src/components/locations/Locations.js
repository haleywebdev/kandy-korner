import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom"

export const Location = () => {
    const [productLocation, assignLocation] = useState({})  // State variable for current purchase object. Purchase is an empty object.


    const [location, getLocation] = useState([])

    const { locationId } = useParams()  // Variable storing the route parameter

    const history = useHistory() // We can access and manipulate the current state of the browser history.
    // We can use this object to redirect the user to another page by calling history.push('/example-route')
    // history is a "prop" used to move from the current page to another one.


    // Fetch the individual location when the productLocationId route parameter value changes


    // Fetch all locations
    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
                .then(res => res.json()) // converting JSON to JS data structure
                .then((data) => {
                    getLocation(data)
                })
        },
        []  // Empty dependency array only reacts to JSX initial rendering.
    )

    // Function to invoke when a <link> customer is chosen from the list of current orders
    
    return (
        <>
            <center>
                <div>
                    <h2>Store Locations</h2> {/* create a dropdown of locations */}


                    {
                        location.map(location => {
                            return <div
                                className="location"

                                value={location.id}
                                key={location.id}><Link to={`/productLocations/${location.id}`}>{location.name}</Link></div>


                        })}


                </div>
            </center>


        </>
    )
}

