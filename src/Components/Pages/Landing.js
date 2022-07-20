import  Navigationbar from "../Layout/Navigationbar"
import RegisterForm from "../Forms/RegistrationForm";
import LoginForm from "../Forms/LoginForm";
import { useState } from "react";

const Landing =(props)=>{
    // return(
    //    <div>
    //     <Navigationbar/>
    //      <h1>S. Elle Davis</h1>
    //      <p>Hello and Welcome to my Technical Portfolio. I hope you enjoy your time and I look forward to connecting soon! </p>
    //    </div>
    // )
    const [hasAccount, setHasAccount] = useState(false);
  const {setUser} = props
  return (
    <div>
      <Navigationbar/>
      <h1>S. Elle Davis</h1>
      <p>Hello and Welcome to my Technical Portfolio. I hope you enjoy your time and I look forward to connecting soon! </p>

      {hasAccount === false ? (
        <div>
          <RegisterForm  setUser={setUser} />
          <p>
            Already have an account?{" "}
            <span className="btn btn-primary" onClick={() => setHasAccount(true)}>Login</span>{" "}
          </p>
        </div>
      ) : (
        <LoginForm setUser={setUser} />
      )}
    </div>
  );
}
export default Landing;