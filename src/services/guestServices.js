import { errorNotification } from "./notificationServices";

const url = `${process.env.REACT_APP_CLASS_TRUCKS_URL}`;
const commentsUrl = `${process.env.REACT_APP_CLASS_COMMENTS_URL}`;

const getSettigs = {
    method: "GET",
    headers: {
        "X-Parse-Application-Id": `${process.env.REACT_APP_APPLICATION_ID}`,
        "X-Parse-REST-API-Key": `${process.env.REACT_APP_API_KEY}`,
    }
}

export async function getAllTrucks() {
    try {
        const res = await fetch(url, getSettigs);
        const data = await res.json();
        if (!data.error) {
            return data.results;
        } else {
            throw data.error;
        }
    } catch (error) {
        errorNotification(error);
    }
}


export async function getAllComments() {
    try {
        const res = await fetch(commentsUrl, getSettigs)
        const data = await res.json();
        if (!data.error) {
            return data.results;
        } else {
            throw data.error;
        }
    } catch (error) {
        errorNotification(error);
    }
}
