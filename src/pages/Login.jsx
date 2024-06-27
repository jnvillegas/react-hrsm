import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"
import { Navigate } from "react-router-dom";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";

export const Login = ({ user }) => {
    const [email, setEmail] = useState("");
    const [password, setPasssword] = useState("");
    const [isSignUpActive, setIsSignUpActive] = useState(true);

    const handleMethodChange = () => {
        setIsSignUpActive(!isSignUpActive);
    };

    const handleSignUp = () => {
        if (!email || !password) return;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }

    const handleSignIn = () => {
        if (!email || !password) return;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    const handleEmailChange = (event) => setEmail(event.target.value)
    const handlePasswordChange = (event) => setPasssword(event.target.value)

    if (user) {
        return <Navigate to='/private'></Navigate>
    }
    return (
        <section>
            <Typography variant="h3">HomePAge</Typography>

            <form>
                {isSignUpActive && <legend>Sign up</legend>}
                {!isSignUpActive && <legend>Sign In</legend>}
                <fieldset>
                    <ul>
                        <li>

                            <TextField id="email" label="Email" variant="standard" />
                            {/* <label htmlFor="email"> Email</label>
                            <input type="text" id="email" onChange={handleEmailChange} />*/}
                        </li>
                        <li>
                            <label htmlFor="password"> Password</label>
                            <input type="password" id="password" onChange={handlePasswordChange} />
                        </li>
                    </ul>
                    <div>
                        <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue="Hello World"
                            variant="standard"
                        /><br></br>

                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        /><br></br>


                        <br></br>

                    </div>
                    {isSignUpActive && <Button variant="contained" onClick={handleSignUp} endIcon={<SendIcon />}>Sign up</Button>}
                    {!isSignUpActive && <Button variant="contained" onClick={handleSignIn} endIcon={<SendIcon />}>Sign In</Button>}

                </fieldset>
                {isSignUpActive && <Button variant="text" onClick={handleMethodChange}  >Login</Button>}
                {!isSignUpActive && <Button variant="text" onClick={handleMethodChange}>Crea una cuenta</Button>}
            </form>
        </section>
    )
}

