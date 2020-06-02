import { BASEURL } from './AppConfig';


const createUrl = (url) => {
    return BASEURL + url
}



const Helper = (url, method, data) => {
    console.log(method);
    if (method === "GET") {
        return (
            fetch(createUrl(url))
                .then((res) => {
                    return res.json();
                })
        )
    }
    else if (method === "POST") {
        return (
            fetch(createUrl(url), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then((res) => {
                    return res.json();
                })
        );
    }
}

export default Helper;