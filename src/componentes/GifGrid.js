import React from 'react';
import { useFetchGifs } from '../hooks/useFecthGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category);
    console.log(data)
    return (
        <>
            <h3>{category}</h3>

            {loading ? <p>Caricamento...</p> :

                <div className="card-grid">
                    {data.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))}
                </div>

            }
        </>
    )
}