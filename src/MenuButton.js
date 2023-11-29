import React from 'react';

const MenuButton = ({ onClick }) => {
  return (
    <button className="menu-button" onClick={onClick}>
      Menú
    </button>
  );
};

export default MenuButton;
