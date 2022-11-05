import React, { createContext, useState} from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const registroBase = [
        {nombre: 'Antonia', apellido: 'Durán', mail: 'antonia@duran.com', clave: 'anto'},
        {nombre: 'Jazz', apellido: 'Posselt', mail: 'jazz@posselt.cl', clave: 'mich'}
    ]


    const [datosRegistroBase, setDatosRegistroBase] = useState(registroBase);
    const [datosRegistro, setDatosRegistro] = useState('');

    const [entradas, setEntradas] = useState([]);

    return (
        <DataContext.Provider value={{ 
            datosRegistro, setDatosRegistro, 
            datosRegistroBase, setDatosRegistroBase,
            entradas, setEntradas }}>
            {children}
        </DataContext.Provider>
    )
}
