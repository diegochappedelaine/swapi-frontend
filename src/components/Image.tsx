import { useState, useRef, useEffect } from "react";

type ImageProps = {
  src: string;
  alt: string;
};

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  const imgEl = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  const onImageLoaded = () => setLoaded(true);

  useEffect(() => {
    const imgElCurrent = imgEl.current;

    if (imgElCurrent) {
      imgElCurrent.addEventListener("load", onImageLoaded);
      return () => imgElCurrent.removeEventListener("load", onImageLoaded);
    }
  }, [imgEl]);

  return (
    <img
      ref={imgEl}
      src={src}
      alt={alt}
      style={loaded ? { display: "inline-block" } : { display: "none" }}
    />
  );
};

export default Image;
