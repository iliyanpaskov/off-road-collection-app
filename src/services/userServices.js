
// const url = `${process.env.REACT_APP_LOGIN_URL}`;

const getSettigs = {
    method: "GET",
    headers: {
        "X-Parse-Application-Id": `${process.env.REACT_APP_APPLICATION_ID}`,
        "X-Parse-REST-API-Key": `${process.env.REACT_APP_API_KEY}`,
        "X-Parse-Revocable-Session":`${process.env.REACT_APP_SESSION}`,
    }
}


export async function login(url) {
    try {
        const res = await fetch(url,getSettigs);
        const data = await res.json();
        // TODO errors
        return data;
    } catch (error) {

    }
}