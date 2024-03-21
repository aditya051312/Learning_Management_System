import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState<any>('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/dashboard");
    }

    return(
        <section className="w-full h-screen">
            <div className="">

            </div>
            <div>
                <section className='flex flex-row'>
                    <div className='w-7/12 h-[100vh] bg-primary login-bg'></div>
                    <div className='w-5/12 h-[100vh] flex flex-col justify-center items-center'>
                        <div className='p-7 w-[80%]'>
                        <div className='mb-3'>
                            <div><span className='text-[26px] font-[700] text-primary'>LMS </span> | Empower your learning</div>
                        </div>
                        <div>
                            <h2 className='font-semibold text-[26px]'>Login</h2>
                            <p className='text-sm text-gray-500'>Enter your email and password to access your account</p>
                        </div>
                        <div className='mt-5'>
                            <div className="form-control">
                                <label htmlFor="user">Email</label>
                                <input type="text" placeholder="Enter your email" name='email' value={email} onChange={(event) => { setEmail(event.target.value);}} />
                            </div>
                            <div className="form-control">
                                <label htmlFor="user">Password</label>
                                <div className="input-group">
                                    <input type={showPassword? 'text':'password'} placeholder="Enter password" name="password" value={password} onChange={(event) => { setPassword(event.target.value);}}/>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <button type="button" onClick={ handleLogin } className="text-white bg-primary transition duration-150 ease-in hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-8 py-2.5">Login</button>
                                <p className="mt-3 text-sm cursor-pointer">Forgot Password?</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Login;
