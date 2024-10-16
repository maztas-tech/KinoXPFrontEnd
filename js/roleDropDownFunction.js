document.addEventListener("DOMContentLoaded", function () {

    console.log("Jeg er i dropdown role js")

    const url = "http://localhost:8080/allRoles"

    async function fetchRoles() {
        const response = await fetch(url)

        if (response.ok) {
            const roles = await response.json()
            console.log(roles)
            return roles
        } else {
            console.log("Fetch Failed")
        }
    }


    async function storeFetch() {
        dDRole.innerHTML = ""
        const promRoles = await fetchRoles()
        console.log(promRoles)
        if (promRoles) {
            let roleList = promRoles.flat()
            console.log(roleList)
            roleList.flat().forEach(dropDownRoles)
        } else {
            console.log("fetch Failed")
        }
    }

    function dropDownRoles(role) {
        const roleElement = document.createElement("option")
        roleElement.value = JSON.stringify({roleID: role.roleID, roleName: role.roleName})
        roleElement.textContent = role.roleName;
        dDRole.appendChild(roleElement)
    }

    function selectRole() {

        const selInd = dDRole.selectedIndex;
        const selRoleID = dDRole.options[selInd].value

        const roleID = Number(String.valueOf(selRoleID))
        console.log(roleID)

        if (selRoleID) {
            const roleContainer = document.getElementById("roleContainer")
            roleContainer.innerHTML = "";
        }
    }

    dDRole = document.getElementById("role")
    dDRole.addEventListener("select", selectRole)
    storeFetch()

})
