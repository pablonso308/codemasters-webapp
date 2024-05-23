import Link from 'next/link';
import React from 'react';

const BackofficeMenu = () => {
    return (
        <div className="backoffice-sidebar">
            <ul>
                <li><Link href="/backoffice/inicio">Inicio</Link></li>
                <li><Link href="/backoffice/alumnos">Alumnos</Link></li>
                <li><Link href="/backoffice/profesores">Profesores</Link></li>
                <li><Link href="/backoffice/cursos">Cursos</Link></li>
            </ul>
        </div>
    );
};

export default BackofficeMenu;
