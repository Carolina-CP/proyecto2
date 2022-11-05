import './App.css';

// importación de hook y dependencias
import { DataProvider } from './context/DataContext';

import Registrarse from './views/Registrarse';

function App() {
  return (
    <div className="App">
      <DataProvider> 

    <Registrarse />
    
    </DataProvider>
    </div>
  );
}

export default App;
