import React, { useState } from "react";
import Input from "../components/shared/Input";
import Button from "../components/shared/button";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/userActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [password, setPasswords] = useState<string>("pistol");
  const [confirmPassword, setconfirmPassword] = useState<string>("pistol");
  const [firstname, setFirstName] = useState<string>("kishor");
  const [lastname, setLastName] = useState<string>("gunjal");

  const [email, setEmail] = useState<string>("eve.holt@reqres.in");

  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const user = {
      firstname: firstname as string,
      lastname: lastname as string,
      email: email as string,
      password: password as string,
      confirmPassword: confirmPassword as string,
    };

    if (password === confirmPassword) {
      await dispatch(registerUser(user))
        .then((response: any) => {
          if (response.payload.token) navigate("/");
          else {
            toast.error("Please enter correct email and password");
          }
        })
        .catch((err: any) => {
          console.log(err);
        });
    } else {
      toast.error("Please enter correct  password and confirm password");
    }
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
        />
        <label>LastName</label>
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
