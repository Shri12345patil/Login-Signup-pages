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
    
}