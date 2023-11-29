import React, { useState } from 'react';
import MenuButton from './MenuButton';
import MenuItem from './MenuItem';  // Asegúrate de importar correctamente el componente MenuItem

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <MenuButton onClick={toggleMenu} />
      {menuOpen && (
        <div className="menu-options">
          <MenuItem text="Actividades realizadas en el curso" file="actividades.pdf" />
          <MenuItem text="Sistema implementado" file="sistema.pdf" />
          <MenuItem text="Código fuente" file="codigo_fuente.zip" />
          <MenuItem text="Reporte de modificaciones" file="reporte.pdf" />
        </div>
      )}
    </div>
  );
};

export default App;
