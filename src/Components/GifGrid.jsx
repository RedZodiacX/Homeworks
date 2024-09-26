import { useState, useEffect } from "react";

const GetGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=hSye4iD9woRDAkZ6oUmkTWjo1O26hL83&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.original.url
        };
    });
    return gifs;
}

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    const fetchGifs = async () => {
        const gifs = await GetGifs(category);
        console.log('GIFs obtenidos:', gifs);
        setImages(gifs);
    };

    useEffect(() => {
        fetchGifs();
    }, [category]);

    return (
        <>
            <h3>{category}</h3>
            <div className="gif-grid">
                {images.map(img => (
                    <div key={img.id} className="gif-item">
                        <h4>{img.title}</h4>
                        <img src={img.url} alt={img.title} />
                    </div>
                ))}
            </div>
        </>
    );
}
