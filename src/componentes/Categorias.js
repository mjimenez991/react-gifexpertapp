import React, { useState } from 'react'
import { CategoryAdd } from './CategoryAdd';
import { GifGrid } from './GifGrid';

export const Categorias = () => {

    const [categories, setCategories] = useState([])

    return (
        <>
            <div className="menu-categorias">
                <CategoryAdd setCategories={setCategories} />
                <ul className="list-categorias invisible-movil">
                    {categories.map((cat) => (<li key={cat}>{cat}</li>))}
                </ul>
            </div>
            <div className="contenido">
                {categories.map((cat) => (
                    <GifGrid
                        key={cat}
                        category={cat} />))}
            </div>
        </>
    )
}
