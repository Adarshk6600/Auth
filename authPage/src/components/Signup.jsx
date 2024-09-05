import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/register', { name, email, password })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  return (
    <div className='main'>
      <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputbox">
          <label htmlFor="name"><strong>Name</strong></label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder='Enter Name'
            id='name'
            name='name'
          />
        </div>

        <div className="inputbox">
          <label htmlFor="email"><strong>Email</strong></label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder='Enter Your Email'
            id='email'
            name='email'
          />
        </div>

        <div className="inputbox">
          <label htmlFor="password"><strong>Password</strong></label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder='Enter Your Password'
            id='password'
            name='password'
          />
        </div>

        <button type="submit" className='signupbtn'>Sign up</button>
      </form>

      <div className="login">
        <p>Already have an account?</p>
        <Link to='/Signin'><button>Log in</button></Link>
      </div>
    </div>
  );
};

export default Signup;
