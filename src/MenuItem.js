import React from 'react';

const MenuItem = ({ text, file }) => {
  const downloadFile = () => {
    // Lógica para descargar el archivo
    const downloadLink = document.createElement('a');
    downloadLink.href = `${process.env.PUBLIC_URL}/files/${file}`;
    downloadLink.download = file;
    downloadLink.click();
  };

  return (
    <div className="menu-item" onClick={downloadFile}>
      {text}
    </div>
  );
};

export default MenuItem;
