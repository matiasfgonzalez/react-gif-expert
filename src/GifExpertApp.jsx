import React, { useState } from "react";
import { AgregarCategoria, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categorias, setcategorias] = useState([]);

    const onAddCategoria = (categoria) => {
        if (categorias.includes(categoria)) return;

        setcategorias([categoria, ...categorias]);
    };

    const onDeleteCategoria = () => {
        if (categorias.length < 2) return;
        setcategorias([categorias.shift()]);
    };
    return (
        <>
            <h1>GifExpertApp</h1>

            <AgregarCategoria onNewCategoria={onAddCategoria} />
            <button onClick={onDeleteCategoria}>Quitar ultimo</button>

            {categorias.map((categoria) => (
                <GifGrid key={categoria} categoria={categoria} />
            ))}
        </>
    );
};
