import React from 'react';
import Photo from './Photo';

const Gallery = () => {
    const photos = [
        { id: 1, src: 'C:\Users\cedri\Desktop\NewApp\searchbar\src\image\img_1', title: 'Photo 1', description: 'Description 1' },
        { id: 2, src: 'url2.jpg', title: 'Photo 2', description: 'Description 2' },
        // Ajoutez d'autres photos ici
    ];

    return (
        <div className="gallery">
            {photos.map((photo) => (
                <Photo key={photo.id} {...photo} />
            ))}
        </div>
    );
};

export default Gallery;