import React, { useContext, useState } from "react";
import { UserContext } from "../../component/Context/UserContext";
import {useRouter} from 'next/router'

const Auth = () => {
  const { setUser } = useContext(UserContext);
  const [pseudo, setPseudo] = useState('');

  const router = useRouter();

  const handleChange = e => {
    setPseudo(e.target.value);
  }
  
  const handleClick = e => {
    e.preventDefault();
    if(pseudo) {
      setUser(pseudo);
      router.push('/')
    }
  }
  return (
    <form className="container">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPseudo1"
          aria-describedby="PseudoHelp"
          placeholder="Enter Pseudo"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleClick}>
        Submit
      </button>
    </form>
  );
};

export default Auth;
