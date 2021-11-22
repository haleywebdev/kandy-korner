import React, { useEffect, useState } from "react"

export const LocationsList = () => {
    const [locations, setLocations] = useState([])
    

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((locationArray) => {
                    setLocations(locationArray)
                })
        },
        []
    )


    return (
        <>
            {
                locations.map(
                    (location) => {
                        return <center><ul key={`location--${location.id}`}>{location.name} located at {location.address}</ul></center>
                    }
                )
            }
        </>
    )
}