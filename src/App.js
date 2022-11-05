import './App.css';

// importación de hook y dependencias
import { DataProvider } from './context/DataContext';

//import Registrarse from './views/Registrarse';
import Publicar from './views/Publicar';

function App() {
  return (
    <div className="App">
      <DataProvider> 

  {/* <Registrarse /> */ }  
    <Publicar />
    
    </DataProvider>
    </div>
  );
}

export default App;
