import { Form, useNavigate } from 'react-router-dom'
import './styles/Register.css'
import { memo, useCallback, useTransition } from 'react';
import { loginUser } from '../api/Api';
import { useAuth } from '../api/AuthContext'
import {toast} from 'react-toastify';

const Login = memo(() => {

    const {storeToken} = useAuth();
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();

  const handleFormInput = useCallback((e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const userData = Object.fromEntries(formData);

      startTransition(async () => {
        try {

            const response = await loginUser(userData);
            if(response.status === 200) {
                storeToken(response.data.token);
                 toast.success("Login Sucessfull!", {
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
                <h1 className='main-heading mb-3'>Login Form</h1>
                <Form method='POST' onSubmit={handleFormInput} className='register-form'>
                    <input type='email' name='email' placeholder='Enter Email' className='form-input' required />
                    <input type='password' name='password' placeholder='Enter Password' className='form-input' required />
                    <button className='btn btn-primary btn-pixelated' type='submit' value='send'><span>{isPending ? 'Logging In...' : 'Login'}</span></button>
                </Form>     
            </div>
            </div>
        </section>
    </>
  )
})

export default Login
