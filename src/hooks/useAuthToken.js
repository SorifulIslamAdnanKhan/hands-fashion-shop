import {useEffect, useState } from "react"

const useAuthToken = (email) => {
    console.log(email);
    const [token, setToken] = useState('');

    useEffect(() => {
        if(email){
            fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessAuthToken) {
                    localStorage.setItem('accessAuthToken', data.accessAuthToken);
                    setToken(data.accessAuthToken);
                }
            });
        }
    }, [email]);

    return [token];

}

export default useAuthToken;