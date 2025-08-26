import './styles/Services.css'
import Loading from './Loading';
import ServiceCard from '../components/UI/ServiceCard';
import { useAuth } from '../api/AuthContext';
import { memo } from 'react';

const Services = memo(() => {


  const {services, isPending} = useAuth();


  if(isPending) return <Loading />

  return (
    <section className='services-section'>
      <h1 className='services-heading'>Services</h1>
      <div className='container grid grid-three-cols'>
         {
          services.map(currService => <ServiceCard key={currService._id} service={currService} />)
         }
      </div>
    </section>
  )
})

export default Services
