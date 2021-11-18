import React, { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const HiringForm = () => {

    const [employees, updateEmployees] = useState({
        Name: "",
        Location: 3,
        Manager: false,
        fullTime: false,
        hourlyRate: 12,
    })

const history = useHistory()

// this is the object we want to send to the api

const submitForm = (evt) => {
    evt.preventDefault()
    const newForm = {
        description: employees.name,
        employeeId: 1,
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
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...employees }
                                copy.name = evt.target.value
                                updateEmployees(copy)
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
            <button className="btn btn-primary" onClick={submitForm}>
                Submit Your Application
            </button>
        </form>
    </>
)
}
