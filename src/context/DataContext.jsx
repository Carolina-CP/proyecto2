import React, { createContext, useState, useEffect } from "react";



export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [datosRegistroBase, setDatosRegistroBase] = useState([]);
    const [datosRegistro, setDatosRegistro] = useState('');
    


    // useeffect para llamar a la api de servicios    
   
  useEffect(() => {
    consultarInformacion();
}, []);


const consultarInformacion = async () => {

    const response = await fetch('./datos.json')
    const data = await response.json()
    setDatosRegistroBase(data);
}

console.log(datosRegistroBase)


    return (
        <DataContext.Provider value={{  datosRegistro, setDatosRegistro, datosRegistroBase, setDatosRegistroBase }}>
            {children}
        </DataContext.Provider>
    )
}
