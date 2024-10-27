import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";
import { ToastContainer, Bounce } from "react-toastify";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import IDataContext from "../../interfaces/dataContext";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";


import "./Layout.css";
import "react-toastify/ReactToastify.min.css"

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
                <div className="promo">
                    <ChevronLeftIcon className="size-4 text-black" />
                    <div className="promo_message">Get 10% off on business sign up</div>
                    <ChevronRightIcon className="size-4 text-black" />
                </div>
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
            </div>
        </dataContext.Provider>
    )
}

export default Layout;