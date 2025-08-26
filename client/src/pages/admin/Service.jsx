import './Admin.css'
import { useAuth } from '../../api/AuthContext';
import CrudTable from '../../components/UI/admin/CurdTable';
import { memo, useMemo } from 'react';

const Service = memo(() => {

    const {services, updateService, deleteService} = useAuth();
    const serviceColumns = useMemo(() => ([
        {label: "Serivce", accessor: "service", type:"text"},
        {label: "Description", accessor: "description", type: "text" },
        {label: "Price", accessor: "price", type: "text" },
        {label: "Provider", accessor: "provider", type: "text" }
     ]
    ), [])
    return (
        <CrudTable
            title="Services"
            description="Manage all services here."
            data={services}
            columns={serviceColumns}
            onDelete={deleteService}
            onUpdate={updateService}
        />
    )
    
})

export default Service;