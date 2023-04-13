import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/shared/Input";
import Button from "../components/shared/button";
import { useDispatch,useSelector} from 'react-redux'
import { registerUser } from "../redux/userActions";
import { User } from "../redux/userTypes";




const Register = () => {
  const [password, setPasswords] = useState<string>("pistol");
  const [confirmPassword, setconfirmPassword] = useState<string>("pistol");
  const [firstname, setFirstName] = useState<string>("kishor");
  const [lastname, setLastName] = useState<string>("gunjal");

  const [email, setEmail] = useState<string>("eve.holt@reqres.in");

  const dispatch = useDispatch<any>();
  const error = useSelector((state: any) => state);
  console.log('error',error);


  const handleSubmit = (event:any) => {
    event.preventDefault();

    const user = {
      firstname: firstname as string,
      lastname: lastname as string,
      email: email as string,
      password: password as string,
      confirmPassword: confirmPassword as string,
    };

    dispatch(registerUser(user));
  };


  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <label>FirstName</label>
        <Input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstname as string}
        /><label>LastName</label>
        <Input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastname as string}
        />
        <label>Email</label>
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email as string}
        />
        <label>Password</label>

        <Input
          type="password"
          onChange={(e) => setPasswords(e.target.value)}
          value={password as string}
        />
        <label>Confirm Password</label>

        <Input
          type="password"
          onChange={(e) => setconfirmPassword(e.target.value)}
          value={confirmPassword as string}
        />
        <Button onClick={() => this}>Register</Button>
      </div>
    </form>
  );
};

export default Register;
