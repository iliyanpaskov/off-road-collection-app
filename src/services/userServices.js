
const signUpUrl = `${process.env.REACT_APP_SIGN_UP_URL}`;
const trucksUrl = `${process.env.REACT_APP_CLASS_TRUCKS_URL}`;
const commentsUrl = `${process.env.REACT_APP_CLASS_COMMENTS_URL}`;

const headers = {
    "X-Parse-Application-Id": `${process.env.REACT_APP_APPLICATION_ID}`,
    "X-Parse-REST-API-Key": `${process.env.REACT_APP_API_KEY}`,
    "X-Parse-Revocable-Session": `${process.env.REACT_APP_SESSION}`,
    "Content-Type": "application/json",
}

const getSettigs = {
    method: "GET",
    headers
}


export async function login(url) {
    try {
        const res = await fetch(url, getSettigs);
        const data = await res.json();
        // TODO errors
        return data;
    } catch (error) {

    }
}

export async function signUp(values) {
    try {
        const res = await fetch(signUpUrl, {
            method: "POST",
            headers,
            body: JSON.stringify(values)
        });
        const data = await res.json();
        return data;
    } catch (error) {
        // TODO errors
    }
}


export async function updateTruckLikes(truckId, values) {
    const likes = {
        likes:values
    }
    try {
        const res = await fetch(`${trucksUrl}/${truckId}`, {
            method: "PUT",
            headers,
            body:JSON.stringify(likes)
        });
        const data = await res.json();
        return data
    } catch (error) {
        // TODO errors
    }
}

export async function addComment(values) {
    try {
        const res = await fetch (commentsUrl,{
            method:"POST",
            headers,
            body:JSON.stringify(values)
        });
        const data = await res.json();
        return data;
    } catch (error) {
        // TODO errors
        console.log(error);
    }
}

export async function deleteComment (commentId){
    try {
        const res = await fetch (`${commentsUrl}/${commentId}`,{
            method:"DELETE",
            headers,
        });
        const data = await res.json();
        return data;
    } catch (error) {
        // TODO errors
    }
}