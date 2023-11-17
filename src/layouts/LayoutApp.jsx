import { Outlet } from "react-router-dom"
import Navbar from "../components/layout/Navbar"

const LayoutApp = () => {
  return (
    <>
        <Navbar />
        
        {/* // TODO | Contenido principal */}
        <main className="animate-fade-down animate-once">
            <div className="mx-auto max-w-7xl mt-16 px-4 pb-12 sm:px-6 lg:px-8">
                <div className="rounded-lg bg-white px-5 py-12 shadow-lg sm:px-10">
                    <Outlet />
                </div>
            </div>
        </main>
    </>
  )
}

export default LayoutApp