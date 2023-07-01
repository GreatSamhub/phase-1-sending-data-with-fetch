function submitData(userName = 'Sam', userEmail = 'sam12@gmail.com'){
    const url = 'http://localhost:3000/users'
    const data = {
        "name": userName,
        "email": userEmail
    }
    return fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        const id = data.id
        const userElement = document.createElement("div")
        userElement.textContent = id
        document.body.appendChild(userElement);
    })
    .catch(error => {
        const errorElement = document.createElement("div");
        errorElement.textContent = error.message;
        document.body.appendChild(errorElement);
    })
}
document.addEventListener('DOMContentLoaded', submitData)