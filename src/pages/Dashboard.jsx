import React, { useState, useEffect } from "react";
import Header from "../partials/Header";

import axios from "axios";
import Sidebar from "../partials/Sidebar";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [responseData, setResponseData] = useState();
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setResponseData(myJson);
        console.log(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto ">
            <div
              className="hero -min-h-screen rounded-md"
              style={{
                backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    Welcome to Dummy Store
                  </h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
            <div className="container my-12 mx-auto px-4 md:px-12">
              <div className="p-10  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {responseData?.map((data, i) => (
                  <div className="rounded-md bg-white overflow-hidden flex flex-col shadow-lg duration-500 hover:scale-105 cursor-pointer">
                    <div>
                      <img
                        src={data?.image}
                        alt="Product"
                        class="h-80 w-full py-3 -object-cover rounded"
                      />
                    </div>

                    <div className="px-6 py-4">
                      <div className="font-semibold text-center capitalize text-lg mb-2">
                        {data?.title}
                      </div>
                    </div>
                    <div className="text-center font-medium text-lg">
                      Price:{" "}
                      <span className="font-black text-lg">${data?.price}</span>
                    </div>

                    <div className="px-6 text-center pt-4 mt-auto  pb-2">
                      <Link to={`/product/${data?.id}`}>
                        <button className="btn btn-primary btn-md">
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
