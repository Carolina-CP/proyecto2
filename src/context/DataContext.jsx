import React, { createContext, useState, useEffect } from "react";


export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [datosRegistroBase, setDatosRegistroBase] = useState([]);
    const [datosRegistro, setDatosRegistro] = useState('');

    console.log(datosRegistroBase)

    useEffect(() => {
        consultarInformacion();
    }, []);

    const consultarInformacion = async () => {
        const response = await fetch('./datos.json')
        const data = await response.json()
        setDatosRegistroBase(data);
    }
    console.log(datosRegistroBase)

   
    const [esAutenticado, setIsautenticado] = useState(false);

    const [datosPublicacionBase, setdatosPublicacionBase] = useState([]);
    const [datosPublicacion, setdatosPublicacion] = useState('');

    useEffect(() => {
        consultarPublicaciones();
    }, []);

    const consultarPublicaciones = async () => {
        const response = await fetch('./publicaciones.json')
        const data = await response.json()
        setdatosPublicacionBase(data);
    }
    console.log(datosPublicacionBase)


    return (
        <DataContext.Provider value={{
            datosRegistro, setDatosRegistro,
            datosRegistroBase, setDatosRegistroBase,
            esAutenticado, setIsautenticado,
            datosPublicacionBase, setdatosPublicacionBase,
            datosPublicacion, setdatosPublicacion
        }}>
            {children}
        </DataContext.Provider>
    )
}
