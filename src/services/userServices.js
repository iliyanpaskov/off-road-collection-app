
const signUpUrl = `${process.env.REACT_APP_SIGN_UP_URL}`;

const getSettigs = {
    method: "GET",
    headers: {
        "X-Parse-Application-Id": `${process.env.REACT_APP_APPLICATION_ID}`,
        "X-Parse-REST-API-Key": `${process.env.REACT_APP_API_KEY}`,
        "X-Parse-Revocable-Session": `${process.env.REACT_APP_SESSION}`,
    }
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
            headers: {
                "X-Parse-Application-Id": `${process.env.REACT_APP_APPLICATION_ID}`,
                "X-Parse-REST-API-Key": `${process.env.REACT_APP_API_KEY}`,
                "X-Parse-Revocable-Session": `${process.env.REACT_APP_SESSION}`,
                "Content-Type": "application/json",
            }, body: JSON.stringify(values)
        });
        const data = await res.json();
        return data;
    } catch (error) {
        // TODO errors
    }
}