import { useState } from 'react';
import Image from './Image';

interface IPicture {
  id: number;
  src: string;
  width: number;
  height: number;
  alt: string;
}

export default function ImagesBox() {
  const [count, setCount] = useState(1);
  const [images, setImages] = useState<IPicture[]>([
    {
      id: 0,
      src: 'https://shorturl.at/tND4R',
      width: 400,
      height: 200,
      alt: 'Львів',
    },
  ]);

  const resizeImage = (delta: number) => {
    setImages(prev => {
      if (prev.length === 0) return prev;

      const updatedImages = [...prev];
      const lastImage = { ...updatedImages.pop()! };

      lastImage.width += delta;
      lastImage.height += delta;

      return [...updatedImages, lastImage];
    });
  };

  const appendImage = () => {
    setImages(prev => [
      ...prev,
      {
        id: count,
        src: 'https://shorturl.at/tND4R',
        width: 400,
        height: 200,
        alt: 'Львів',
      },
    ]);
    setCount(prev => prev + 1);
  };

  const deleteLastImage = () => {
    setImages(prev => prev.slice(0, -1));
  };

  return (
    <>
      <div id="imgs-container">
        {images.map(({ id, src, width, height, alt }) => (
          <Image key={id} src={src} width={width} height={height} alt={alt} />
        ))}
      </div>
      <div className="btns-container">
        <button id="add-btn" onClick={appendImage}>
          Додати
        </button>
        <button type="button" id="increase-btn" onClick={() => resizeImage(50)}>
          Збільшити
        </button>
        <button id="decrease-btn" onClick={() => resizeImage(-50)}>
          Зменшити
        </button>
        <button id="delete-btn" onClick={deleteLastImage}>
          Видалити
        </button>
      </div>
    </>
  );
}
