import React from 'react';

export default function Header(){
    return (
        <header>
            <h1>Autos</h1>
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/registro">Registrar Nuevo auto</a></li>
                </ul>
            </nav>
        </header>
    );
};
