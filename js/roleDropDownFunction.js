console.log("Jeg er i dropdown role js")

const url = "http://localhost:8080/allRoles"

async function fetchRoles() {
    const response = await fetch(url)

    if (response.ok) {
        const roles = await response.json()
        console.log(roles)
        return roles.flat()
    } else {
        console.log("Fetch Failed")
    }
}


function dropDownRoles(role) {
    const roleElement = document.createElement("option")
    const roleName = role.roleName;
    roleElement.value = roleName
    roleElement.textContent = roleName
    console.log(roleElement)
    dDRole.appendChild(roleElement)
}

async function storeFetch() {
    dDRole.innerHTML = ""
    const promRoles = await fetchRoles()
    if (promRoles) {
        let roleList = promRoles.flat()
        roleList.flat().forEach(dropDownRoles)
    } else {
        console.log("fetch Failed")
    }
}

function selectRole() {
    const selInd = dDRole.selectedIndex;
    const selRole = dDRole.options[selInd].value

    if (selRole) {
        const roleContainer = document.getElementById("roleContainer")
        roleContainer.innerHTML = "";
    }
}

dDRole = document.getElementById("inpRole")
dDRole.addEventListener("select", selectRole)
storeFetch()
