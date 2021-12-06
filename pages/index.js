import { useEffect } from "react";

import Head from "next/head";
import { useState } from "react";
import Input from "../components/Input";
import Spinner from "../components/Spinner";
import Output from "../components/Output";


export default function Home() {
  const [imageName, setImageName] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [images, setImages] = useState([]);

  let timer;


  useEffect(() => {
    if (imageName.length) {
      timer = setTimeout(() => {
        setIsSearch(true);

        fetch(
          `https://bing-image-search1.p.rapidapi.com/images/search?q=${imageName}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
              "x-rapidapi-key":
                "5004efafb9msh4bc462359e588c3p145a3cjsn5a13394dc6ae",
            },
          }
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setImages(data);
            setIsSearch(false);
          })
          .catch((err) => {
            console.error(err);
          });
      }, 1500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [imageName]);


  return (
    <>
      <Input
        imageName={imageName}
        setImageName={setImageName}
        isSearch={isSearch}
      />
      {isSearch ? <Spinner /> : ""}

      {images?.value ? (
        <Output images={images} />
      ): ''}
    </>
  );
}
