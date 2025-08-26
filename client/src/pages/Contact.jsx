
import { memo, useCallback, useTransition } from 'react';
import { useAuth } from '../api/AuthContext'
import './styles/Contact.css'
import { Form } from 'react-router-dom'
import { sendContactData } from '../api/Api';
import { toast } from 'react-toastify';

const Contact = memo(() => {

  const {user} = useAuth();
  const [isPending, startTransition] = useTransition();


  const handleContactSubmit = useCallback((e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const contactData = Object.fromEntries(formData);

    startTransition( async () => {
      try {
        const response = await sendContactData(contactData);
        console.log(response)
        if(response.status === 201){
          toast.success("Message Sent Sucessfull!", {
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
        }

      } catch (error) {
        alert(error.message);
      }
    })
    
  }, [])

  return (
    <>
      <section className='container contact-section'>
        <div className='heading-section'>
          <h1 className='contact-heading'>Contact Us</h1>
        </div>
        <div className='grid grid-two-cols'>
          <div className='contact-img'>
            <img src='./images/contact.png' alt='Contact Us' className='contact-image' />
          </div>
          <div className='form-container'>
            <Form className='register-form' method='POST' onSubmit={handleContactSubmit}>

              <input 
              type='text' 
              name='username' 
              placeholder='Enter Username' 
              className='form-input'
              defaultValue={user?.username ?? ''} 
              onChange={() => {}}
              required />

              <input 
              type='email' 
              name='email' 
              placeholder='Enter Email' 
              className='form-input'
              defaultValue={user?.email ?? ''}
              onChange={() => {}} 
              required />

              <textarea rows={5} name='message' placeholder='Enter Message' className='form-input' required />
              <button type='submit' className='btn btn-primary btn-pixelated'><span>{isPending ? 'Sending...' : 'Send'}</span></button>
            </Form>
          </div>
        </div>
        <section className='map-view'>
         <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924247.1421842298!2d66.4960013163157!3d25.191740591840333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1755082331503!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </section>
      </section>
    </>
  )
})

export default Contact
