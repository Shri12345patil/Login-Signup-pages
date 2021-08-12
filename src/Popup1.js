import React from 'react'

function Popup1 () {

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
            <input type="submit" value="Create" data-test="submit" />
            </form>     
            </>
        )

}

export default Popup1