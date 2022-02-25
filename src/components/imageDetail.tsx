import React, { useState } from "react";
import { Image } from "antd";

const ImageDetail = ({ item }: any) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <Image
          src={`/${item.img[index]}`}
          alt={item.name}
          style={{
            width: "100%",
            borderRadius: 5,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          cursor: "pointer",
        }}
      >
        {item.img.map((item: String, index: number) => {
          return (
            <img
              src={`/${item}`}
              alt={"images"}
              key={index}
              style={{
                width: "23%",
                display: "block",
                borderRadius: 5,
                objectFit: "fill",
                padding: 0,
              }}
              onClick={() => setIndex(index)}
            />
          );
        })}
      </div>
    </>
  );
};

export default ImageDetail;
