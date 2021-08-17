import React from 'react'

function Login () {

        return (
            <>
            <form >
            {
            //handle error condition
            }
            <label>UserName</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" data-test="username"  /><br /><br/>
            <label>Password</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="password" data-test="password"  /><br/><br/><br/>
            <input type="submit" value="Login" data-test="submit" />
            </form>     
            </>
        )

}

export default Login