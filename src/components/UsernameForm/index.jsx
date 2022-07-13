import React, { useEffect, useState } from "react";


const UserNameForm = ({ fetchUser, setRepo }) => {
    const [ userName, setUsername ] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setUsername(e.target.username.value)
        fetchUser(e.target.username.value)
    }

    useEffect( ()=> {
        setRepo("")
    }, [ userName, setRepo ])

    return(
        <form onSubmit={ e => handleSubmit(e) }>
            <input required type="text" name="username" placeholder="Username"></input>
            <input type="submit"></input>
        </form>
    );
};

export default UserNameForm;