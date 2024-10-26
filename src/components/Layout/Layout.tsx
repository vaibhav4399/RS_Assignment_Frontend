import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";
import { ToastContainer, Bounce } from "react-toastify";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Layout.css";
import "react-toastify/ReactToastify.min.css"
import IDataContext from "../../interfaces/dataContext";

export const dataContext = createContext<IDataContext | null>(null);


const Layout = () => {

    const [userID, setUserID] = useState<string>(localStorage.getItem('uid') ?? "");
    const [isLogIn, setIsLogIn] = useState<boolean>(() => {
        return localStorage.getItem('ILI') === 'true'
    });
    const [accTok, setAccTok] = useState<string>(localStorage.getItem('a_k') ?? "");

    const data: IDataContext = {
        userID,
        setUserID,
        isLogIn,
        setIsLogIn,
        accTok,
        setAccTok,
    }

    return (
        <dataContext.Provider value={data}>
            <div>
                <Header />
                <main>
                    <ToastContainer
                        newestOnTop={true}
                        theme="colored"
                        pauseOnHover
                        transition={Bounce}
                        draggable
                    />
                    <Outlet />
                </main>
                <Footer/>
            </div>
        </dataContext.Provider>
    )
}

export default Layout;