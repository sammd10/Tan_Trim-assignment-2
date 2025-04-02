"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response?.data || []);
        console.log(response.data, 5345345);
      })
      .catch((err) => {
        console.error("Error fetching reviews:", err);
      });
  }, []);

  const img = [
    {
      img: "/images/Group 300.png",
    },
    {
      img: "/images/Group 301.png",
    },
    {
      img: "/images/Group 302.png",
    },
    {
      img: "/images/Group 303.png",
    },
    {
      img: "/images/Group 304.png",
    },
    {
      img: "/images/Group 305.png",
    },
    {
      img: "/images/Group 307.png",
    },
    {
      img: "/images/Group 475.png",
    },
  ];

  return (
    <div>
      <ul className="list-unstyled d-flex mt-5 justify-content-between flex-wrap gap-4 m-0 p-0">
        {img.length > 0 &&
          img.map((item, index) => (
            <li key={index}>
              <Image src={item?.img} alt={item?.img} width={80} height={100} />
            </li>
          ))}
      </ul>
      <ul className="text-white list-unstyled mt-5 d-flex  justify-content-between flex-wrap">
        <li className="fw-semibold">Bags . Backpacks</li>
        <li className="d-flex align-items-center">
          <span className="me-3 fw-semibold">13 products</span>
          <Image
            src="/images/Vector 4.png"
            alt="/images/Vector 4.png"
            width={20}
            height={23}
          />
        </li>
      </ul>

      <div className="mt-5 d-flex justify-content-between gap-4  flex-wrap">
        {data.length > 0 &&
          data.map((item, index) => (
            <div
              key={item?.id}
              className="card shadow border-0"
              style={{ maxWidth: 300, background: "#141414" }}
            >
              <Image
                src={item?.image}
                width={250}
                height={350}
                className="card-img-top"
                alt="Metro Movers Black"
                style={{ objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h6 className="card-title text-white fw-bold">{item?.title}</h6>
                <p className="price mb-2">
                  <span className="text-white fw-bold fs-6">{item?.price}</span>
                  <span className="original-price text-white mx-2 text-decoration-line-through">
                    <s>
                      {" "}
                      <small>₹ 8,999</small>
                    </s>
                  </span>
                  <span className="discount text-success fw-semibold">
                    <small>(50% Off)</small>
                  </span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HomePage;
