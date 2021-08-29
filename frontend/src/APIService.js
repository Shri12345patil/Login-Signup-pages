export default class APIService {

    static InsertStudent(body)
    {
        return fetch(`http://127.0.0.1:5000/add`, {
            'method':'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(resp => resp.json())
    }

    static LoginStudent(body)
    {
        return fetch(`http://127.0.0.1:5000/sign_in`, {
            'method':'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(resp => resp.json())
    }

    static UpdateStudent(id, body)
    {
        return fetch(`http://127.0.0.1:5000/update/${id}/`, {
            'method':'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(resp => resp.json())
    }
    
}