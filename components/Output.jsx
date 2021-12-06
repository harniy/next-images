import style from "../styles/Output.module.css";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

export default function Output({ images }) {
  const [isModal, setIsModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const imageHandler = (url) => {
    setImageUrl(url);
    setIsModal(true);
  };

  return (
    <div className={style.images__container}>
      {images?.value.map(({ contentUrl }, id) => (
        <div key={id} className={style.image__block}>
          <Image
            loader={() => contentUrl}
            width="1000"
            layout="fill"
            objectFit="cover"
            src={contentUrl}
            alt=""
            className={style.image__style}
            onClick={() => imageHandler(contentUrl)}
          />
        </div>
      ))}

      {isModal ? (
        <Modal
          imageUrl={imageUrl}
          setIsModal={setIsModal}
          images={images.value}
        />
      ) : (
        ""
      )}
    </div>
  );
}
