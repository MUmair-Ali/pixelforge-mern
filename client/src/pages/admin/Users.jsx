import './Admin.css'
import { useAuth } from '../../api/AuthContext'
import CrudTable from '../../components/UI/admin/CurdTable';
import { memo, useMemo } from 'react';

const Users = memo(() => {

    const {users, deleteUser, updateUser} = useAuth();
     const userColumns = useMemo(() => ([
        { label: "First Name", accessor: "firstname", type: "text" },
        { label: "Last Name", accessor: "lastname", type: "text" },
        { label: "Username", accessor: "username", type: "text" },
        { label: "Email", accessor: "email", type: "email" },
        { label: "Phone", accessor: "phone", type: "tel" },
        {
        label: "Role",
        accessor: "isAdmin",
        type: "select",
        options: [
            { label: "User", value: false },
            { label: "Admin", value: true },
        ],
        },
    ]),[]);

  return (
    <CrudTable
      title="Users"
      description="Manage all registered users here."
      data={users}
      columns={userColumns}
      onUpdate={updateUser}
      onDelete={deleteUser}
    />
  )
})


export default Users;