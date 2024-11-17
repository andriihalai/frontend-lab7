interface IImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export default function Image({ src, width, height, alt }: IImageProps) {
  return (
    <a href="https://city-adm.lviv.ua/">
      <img src={src} width={width} height={height} alt={alt} />
    </a>
  );
}
