import Image from "next/image";
import styles from "./ImageCompo.module.css";

const ImageCompo = ({
  parentClassName = "",
  imageClassName = "",
  src,
  alt,
  unoptimized = false,
}) => {
  return (
    <div className={`${styles.parent} ${parentClassName}`}>
      {src && (
        <Image
          fill
          src={src}
          alt={alt || "Image"}
          sizes="100%"
          quality={100}
          priority
          className={`${styles.image} ${imageClassName}`}
          unoptimized={unoptimized}
        />
      )}
    </div>
  );
};

export default ImageCompo;
