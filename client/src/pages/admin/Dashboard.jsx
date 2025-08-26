import { memo } from 'react';
import { useAuth } from '../../api/AuthContext';
import Loading from '../Loading';
import './Admin.css'
import { useNavigate } from 'react-router-dom';

const Dashboard = memo(() => {

    const {count} = useAuth()
    const navigate = useNavigate()

    const {users, contacts, services} = count;

    return (
        <>
         <main className="admin-content">
            <div className="admin-header">
                <h1>Dashboard</h1>
                <p>At a glance on pixel forge users, services and contacts.</p>
            </div>

            <div className="grid grid-three-cols">
                 <div className='dash-card' onClick={() => navigate('/admin/users')}>
                    <p className='dash-value'>{users}</p>
                    <h3 className='dash-title'>Total Users Registered</h3>
                </div>
                <div className='dash-card' onClick={() => navigate('/admin/services')}>
                    <p className='dash-value'>{services}</p>
                    <h3 className='dash-title'>Total Services</h3>
                    
                </div>
                <div className='dash-card' onClick={() => navigate('/admin/contacts')}>
                    <p className='dash-value'>{contacts}</p>
                    <h3 className='dash-title'>Total Messages</h3>
                    
                </div>
            </div>
            </main>
        </>
    )
})

export default Dashboard;