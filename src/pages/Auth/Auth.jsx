import React, { useRef, useState, useContext } from 'react'
import { Modal, useMantineTheme } from "@mantine/core";
import css from './auth.module.css'
import { store } from '../../context/Context';
import { loginUser, registerUser } from '../../api/UserApi.js';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import toast from 'react-hot-toast';


const Auth = () => {
    const theme = useMantineTheme();
    const [isSignUp, setIsSignUp] = useState(false)
    const [isLoginFailed, setisLoginFailed] = useState(false)
    const { setUser } = useContext(store)
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let userData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        let res;
        if (isSignUp) {
            userData.username = usernameRef.current.value
            res = await registerUser(userData)
            res.data.isUser ? setUser(res.data.isUser) : toast.error(`${res.data.message}`);

            localStorage.setItem("user", JSON.stringify(res.data.isUser))
        } else {
            try {
                res = await loginUser(userData)
                setUser(res.data.isUser)
                localStorage.setItem("user", JSON.stringify(res.data.isUser))
                // console.log(res)
            } catch (error) {
                setisLoginFailed(true)
            }
        }
    }
    return (
        <div className={css.main_container}>
            <Modal
                overlayColor={
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[9]
                        : theme.colors.gray[2]
                }
                withCloseButton={false}
                className={css.modal}
                opened={true}
                centered={true}
                size="auto"
                overlayOpacity={0.55}
                overlayBlur={3}
            >

                <form className={css.form_container}>
                    <h3 className={css.form_heading}>{isSignUp ? "Sign Up" : "Sign in"}</h3>
                    {/* <div className='fields_container'> */}
                    {

                        isSignUp && (<div className={css.user_info}>
                            <span>Username : </span>
                            <Input
                                type="text"
                                placeholder="Enter username"
                                className={css.input_field}
                                name="username"
                                reference={usernameRef}
                            />
                        </div>)
                    }
                    <div className={css.user_info}>
                        <span>Email : </span>
                        <Input
                            type="email"
                            placeholder="Enter email"
                            className={css.input_field}
                            name="email"
                            reference={emailRef}
                        />
                    </div>
                    <div className={css.user_info}>
                        <span>password : </span>
                        <Input
                            type="password"
                            placeholder="Enter password"
                            className={css.input_field}
                            name="password"
                            reference={passwordRef}
                        />
                    </div>
                    {
                        isLoginFailed && (
                            <span className={css.error_message}>*email or password may be wrong</span>
                        )
                    }
                    <Button handleFunction={handleSubmit} className={css.button} label={isSignUp ? "Sign up" : "Sign in"} />
                    {
                        isSignUp ? (
                            <p >Already have an account? <span style={{ cursor: 'pointer' }} onClick={() => setIsSignUp(prev => !prev)}><strong>Sign In</strong> </span></p>
                        ) : (
                            <p>Don't have an account? <span style={{ cursor: 'pointer' }} onClick={() => setIsSignUp(prev => !prev)}><strong>Sign Up</strong> </span></p>
                        )
                    }
                </form>
            </Modal>
        </div>
    )
}

export default Auth