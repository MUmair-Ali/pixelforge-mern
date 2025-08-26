import { Outlet } from "react-router-dom"
import Navigator from "./admin/Navigator";
import { useCallback, useState } from "react";

const AdminLayout = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const toggleSidebar = useCallback(() => {
        setIsSideBarOpen(!isSideBarOpen);
    }, [isSideBarOpen])

    return (

        <>
         <Navigator toggleSidebar={toggleSidebar} isSideBarOpen={isSideBarOpen}/>
            <main className={`admin-content ${isSideBarOpen ? 'blur-active' : ''}`}>
                <Outlet />
            </main >
        </>
    )
}

export default AdminLayout;