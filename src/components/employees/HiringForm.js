import React, { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const HiringForm = () => {

    const [employee, updateEmployee] = useState({
        name: "",
        manager: false,
        locationId: 3,
        fullTime: false,
        hourlyRate: ""
    })

    const history = useHistory()

    // this is the object we want to send to the api

    const submitForm = (evt) => {
        evt.preventDefault()
        const newForm = {
            name: employee.name,
            manager: employee.manager,
            locationId: employee.locationId,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newForm)
        }

        // when something new has been created in the API, we want to send the user immediately back to the service tickets to see what has been added to the list.
        // we use the history mechanism to programatically change it! 

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }

    return (
        <>
            <form className="hireForm">
                <h2 className="hireForm__title">New Hire Application</h2>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...employee }
                                    copy.name = evt.target.value
                                    updateEmployee(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder="First and last"
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="location">Store: </label>
                        <select value={employee.locationId}
                            onChange={
                                (evt) => {
                                    const copy = { ...employee }
                                    copy.locationId = evt.target.value
                                    updateEmployee(copy)
                                }
                            } >
                            <option name="storeLocations">Choose a store...</option>
                            <option name="og-kandy">The Original Kandy Korner</option>
                            <option name="exp-kandy">Kandy Korner Express</option>
                            <option name="king-kandy">King Kandy Korner</option>
                        </select>

                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="manager">Applying for manager position?</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...employee }
                                    copy.manager = evt.target.checked
                                    updateEmployee(copy)
                                }}
                            type="checkbox"
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="full-time">Applying full time?</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...employee }
                                    copy.fullTime = evt.target.checked
                                    updateEmployee(copy)
                                }}
                            type="checkbox"
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Hourly Rate: </label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = { ...employee }
                                    copy.hourlyRate = evt.target.value
                                    updateEmployee(copy)
                                }
                            }
                            required autoFocus
                            type="number"
                            id="hourly"
                            className="form-control"
                            placeholder="Please enter your preferred hourly rate"
                        />
                    </div>
                </fieldset>

                <button className="btn btn-primary" onClick={submitForm}>
                    Submit Your Application
                </button>

            </form>
        </>
    )
}
