import React from 'react';

const FichaCurso = ({ nombre, curso, descripcion }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', borderRadius: '5px' }}>
            <h2>{nombre}</h2>
            <h4>{curso}</h4>
            <p>{descripcion}</p>
        </div>
    );
};

export default FichaCurso;
