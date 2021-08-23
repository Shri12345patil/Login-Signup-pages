import React, { useState } from 'react'

function Login (props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        props.history.push('/App');
      }

        return (
            <div>
            Login<br /> <hr/>
            <div>
              Username &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" {...username} autoComplete="new-password" placeholder="enter Username" />&nbsp;&nbsp;
            </div>
            <div style={{ marginTop: 10 }}>
              Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="password" {...password} autoComplete="new-password" placeholder="enter Password" />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="button" value={loading ? 'Loading... ' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
          </div>     
            
        );

}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }

export default Login