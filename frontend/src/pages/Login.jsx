import { useState } from "react";
import axios from 'axios';

function Login(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function handleSubmit(event){
    event.preventDefault();

    const response = await axios.post('http://localhost:3000/api/v1/login', 
      JSON.stringify({email,password}),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )

    console.log(response.data);

  }
  return (
    <>
      <form onSubmit={handleSubmit}>

        <input type="email"
               name="email"
               id="email"
               onChange={(event) => setEmail(event.target.value)}
               value={email}
        />
        <input type="password"
               name="password"
               id="password"
               onChange={event => setPassword(event.target.value)}
               value={password}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Login