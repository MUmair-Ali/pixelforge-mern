import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { useCallback, useState } from "react";

const AppLayout = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleToggleMenu = useCallback(() => {
        setShowMenu(!showMenu)
    }, [showMenu])

    return (
        <>
            <Header showMenu={showMenu} handleToggleMenu={handleToggleMenu}/>
            <main className={`main-content ${showMenu ? 'blur-active' : ''}`}>
                <Outlet />
                <Footer />
            </main>
        </>
    )
}

export default AppLayout