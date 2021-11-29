import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"

export const ProductLocationsList = () => {
    const [productLocation, getLocation] = useState([])
    const [chosenProductLocation, setChosenProductLocation] = useState(0)

    const { locationId } = useParams()

    const history = useHistory()

    // this is the object we want to send to the api

    const submitCandyBag = (evt) => {
        evt.preventDefault()
        const newBag = {
            productLocationId: chosenProductLocation,
            customerId: parseInt(localStorage.getItem("kandy_customer")),
            timestamp: Date.now(),
            employeeId: 1
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBag)
        }

        // when something new has been created in the API, we want to send the user immediately back to the service tickets to see what has been added to the list.
        // we use the history mechanism to programatically change it! 

        return fetch("http://localhost:8088/purchases", fetchOption)
            .then(() => {
                history.push("/purchases")
            })
    }


    useEffect(
        () => {
            return fetch(`http://localhost:8088/productLocations?locationId=${locationId}&_expand=product`)
                .then(res => res.json())
                .then((productsLocationsArray) => {
                    getLocation(productsLocationsArray)
                })
        },
        [locationId]
    )

    return (
        <>
            <center><h2>Create Your Original Kandy Korner Candy Bag:</h2>

                

                {
                    productLocation.map(
                        (productLoc) => {
                            return <fieldset><div key={`productLoc--${productLoc.product?.id}`}>{productLoc.product?.candy} {productLoc.product?.price}
                                <input
                                    onChange={(evt) => {

                                        setChosenProductLocation(productLoc.id)
                                    }}
                                    type="radio"
                                    name="Product" />
                            </div>
                            </fieldset>
                        })

                }

<button className="btn btn-primary" onClick={submitCandyBag}>
                    Purchase Your Bag
                </button>
            </center>

        </>

    )
}