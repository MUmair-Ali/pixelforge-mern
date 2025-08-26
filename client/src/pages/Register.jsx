import './styles/Register.css'
import { Form, useNavigate } from 'react-router-dom'
import { registerUser } from '../api/Api'
import { memo, useCallback, useTransition } from 'react'
import { useAuth } from '../api/AuthContext'
import {toast} from 'react-toastify';

const Register = memo(() => {

    const {storeToken} = useAuth();

    const [isPending, startTransition] = useTransition();
    const navigate = useNavigate();

    const handleFormSubmit = useCallback((e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData);
        
        startTransition( async () => {
            try {
                const response = await registerUser(userData);

                if(response.status === 201) {
                    storeToken(response.data.token);
                    toast.success("Registeration Sucessfull!", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            });
                    e.target.reset();
                    navigate('/');
                } 

            } catch (error) {
               toast.warn(error.details, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            }
        })
  
    }, [navigate, storeToken])

    return (
        <>
        <section className='register-section'>
            <div className='register-container'>
            <div className='register-img'>
                <img src='./images/register.png' alt='Register' className='register-image' />
            </div>
            <div className='form-container'>
                <h1 className='main-heading'>Registration Form</h1>
                <Form method='POST' onSubmit={handleFormSubmit} className='register-form'>
                     <input type='text' name='firstname' placeholder='Enter First Name' className='form-input' required />
                    <input type='text' name='lastname' placeholder='Enter Last Name' className='form-input' required />
                    <input type='text' name='username' placeholder='Enter Username' className='form-input' required />
                    <input type='email' name='email' placeholder='Enter Email' className='form-input' required />
                    <input type='tel' name='phone' placeholder='Enter Phone Number' className='form-input' required />
                    <input type='password' name='password' placeholder='Enter Password' className='form-input' required />
                    <button className='btn btn-primary btn-pixelated' type='submit' value='send'><span>{isPending ? 'Registering...' : 'Register'}</span></button>
                </Form>     
            </div>
            </div>
        </section>
    </>
    )
})

export default Register