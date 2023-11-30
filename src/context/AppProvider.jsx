import { createContext, useState } from "react"

export const AppContext = createContext();
 
const AppProvider = ({children}) => {
    const [alertaApp, setAlertaApp] = useState([])
    const [openModal, setOpenModal] = useState(false);

    return (

        <AppContext.Provider
            value={{
                alertaApp, setAlertaApp,
                openModal, setOpenModal,
            }}
        > {children}</AppContext.Provider>
    )

    
}
export {
    AppProvider
}

