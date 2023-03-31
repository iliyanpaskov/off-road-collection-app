import { successNotification, errorNotification } from "./notificationServices";

const signUpUrl = `${process.env.REACT_APP_SIGN_UP_URL}`;

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
        if (!data.error) {
            successNotification("Welcome !");
            return data;
        } else {
            throw data.error;
        }
    } catch (error) {
        errorNotification(error);
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
        if (!data.error) {
            successNotification("Sign Up successfully !");
            return data;
        } else {
            throw data.error;
        }
    } catch (error) {
        errorNotification(error);
    }
}