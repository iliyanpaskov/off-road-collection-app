const url = `${process.env.REACT_APP_CLASS_TRUCKS_URL}`;

const getSettigs = {
    method: "GET",
    headers: {
        "X-Parse-Application-Id": `${process.env.REACT_APP_APPLICATION_ID}`,
        "X-Parse-REST-API-Key": `${process.env.REACT_APP_API_KEY}`,
    }
}

export async function getAllTrucks() {
        try {
            const res = await fetch(url,getSettigs);
            const data = await res.json();
            // TODO errors
            return data.results;
        } catch (error) {

        }
}

