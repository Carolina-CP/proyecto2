import React, { createContext, useState} from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [datosRegistro, setDatosRegistro] = useState('');

    return (
        <DataContext.Provider value={{ datosRegistro, setDatosRegistro }}>
            {children}
        </DataContext.Provider>
    )
}
