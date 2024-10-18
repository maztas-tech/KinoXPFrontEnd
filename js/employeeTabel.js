document.addEventListener("DOMContentLoaded", function () {


    console.log("jeg er i employee Tabellen")
    const urlGetAllEmployees = "http://localhost:8080/allEmployee"
    const employeeTabel = document.getElementById("tblEmployee")

    let employees = []

    async function fetchEmployeesUrl(url) {
        return await fetch(url).then(response => response.json())
        console.log(fetch(url).then(response => response.json()))
    }

    async function fetchEmployees() {
        employees = await fetchEmployeesUrl(urlGetAllEmployees)
        console.log(employees)
        employees.forEach(createTable)
    }

    async function actionGetEmployee() {
        await fetchEmployees()
    }




    function createTable(employee) {

        let cellCount = 0
        let rowCount = employeeTabel.rows.length
        let row = employeeTabel.insertRow((rowCount))

        let cell = row.insertCell(cellCount++)
        cell.innerHTML = employee.employeeName

        cell = row.insertCell(cellCount++)
        cell.innerHTML = employee.employeeUsername

        cell = row.insertCell(cellCount++)
        cell.innerHTML = employee.employeePassword
    }

    actionGetEmployee()
})





