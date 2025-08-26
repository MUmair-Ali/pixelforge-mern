import './Admin.css'
import { useAuth } from '../../api/AuthContext'
import CrudTable from '../../components/UI/admin/CurdTable';
import { memo, useMemo } from 'react';

const Contacts = memo(() => {

     const {contacts, deleteContact, updateContact} = useAuth();
     const contactColumns = useMemo(() => ([
        {label: "Username", accessor: "username", type:"text"},
        {label: "Email", accessor: "email", type: "email" },
        { label: "Message", accessor: "message", type: "text" },
     ]), [])

    return (
        <CrudTable
         title="Contacts"
         description="Manage all messages here."
         data={contacts}
         columns={contactColumns}
         onDelete={deleteContact}
         onUpdate={updateContact}
        />
    )
    
})

export default Contacts;