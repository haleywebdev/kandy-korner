import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

// For each service ticket, we want to display
// 1. The description of the service ticket.
// 2. Name of the customer.
// 3. Name of the employee doing the repair.
// 4. Date completed, if it's there.

// To display all of this information in a single fetch request, 
// 1. Get the URL from the api in the browser.
// 2. The .map method will only show one type of information.
// 3. It must be augmented using a JSON server feature 
// 4. Use the browser link and augment 
// 5. Example: http://localhost:8088/serviceTickets?_expand=employee&_expand= ... 
// 6. Paste the new, augmented link in the fetch function


export const EmployeeList = () => {
    const [employees, updateEmployees] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=locationId&_expand=location")
                .then(res => res.json())
                .then((employeesArray) => {
                    updateEmployees(employeesArray)
                })
        },
        []
    )

    return (
        <>

            <div>
                <button onClick={() => history.push("/employees/create")}>New Hire Application</button>
            </div>

            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name} works at {employee.locationId?.name}.
                        </p>
                    }
                )
            }
        </>
    )
}
