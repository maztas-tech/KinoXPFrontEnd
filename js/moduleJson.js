async function postObjectAsJson(url, object, httpVerbum) {
    const objectAsJsonString = JSON.stringify(object)
    console.log(objectAsJsonString)
    const fetchOptions = {
        method: httpVerbum,
        headers: {
            "Content-Type": 'application/json',
        },
        body: objectAsJsonString
    }
    const response = await fetch(url, fetchOptions)
    return response
}


/*async function createMethod(url, object) {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: object ? JSON.stringify(object) : null
    }
    const response = await fetch(url, fetchOptions)
    return response
}


async function getAllMethod(url) {
    const fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    const response = await fetch(url, fetchOptions)
    return response
}


async function updateMethod(url, object) {
    const fetchOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: object ? JSON.stringify(object) : null
    }
    const response = await fetch(url, fetchOptions)
    return response
}
 */

async function deleteMethod(url) {
    const fetchOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": 'application/json',
        },
    }
    const response = await fetch(url, fetchOptions)
    return response
}



function fetchAnyUrl(url) {
    return fetch(url).then(response => response.json())
}

export {postObjectAsJson, deleteMethod, fetchAnyUrl}