import Inicio from './Inicio'
import Encabezado from './Encabezado';
import { Routes, Route } from 'react-router-dom'
import Productos from './Productos';
import Contacto from './Contacto';

function App() {
  
  return (
    <>
      <Encabezado />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/productos' element={<Productos />} />
      </Routes>
    </>
  );
}

export default App;
