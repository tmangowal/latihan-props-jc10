import React from 'react'
import Login from './Login'

const LoginChecker = (celana) => {
    const {username, sasuke} = celana

    // const checked = () => {
    //     if(loggedIn){
    //         return(
    //             <h1>Hello, {username}</h1>
    //         )
    //     }else{
    //         return <h1>You are not logged in</h1>
    //     }
    // }

    if(sasuke){
        return(
            <div>
                <h1>Hello, {username}</h1>
            </div>
        )
    }else{
        return(
            <div>
                <h1>You are not logged in {username}</h1>
            </div>
        )
    }
}

export default LoginChecker