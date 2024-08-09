import { Footer } from "../components/footer"
import { Navbar } from "../components/navbar"
import { Outlet } from "react-router-dom"

export default function MainLayout(){
    return(
        <>
            <Navbar/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}