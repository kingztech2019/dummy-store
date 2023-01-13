import React, { useState, useEffect } from "react";
import Header from "../partials/Header";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import { useGeolocated } from "react-geolocated";
import OrderAlert from "../components/product/modal/OrderAlert";

export default function ProductDetails() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [responseData, setResponseData] = useState();
  const [openModal, setModalOpen] = useState();
  const [orderMessage, setOrderMessage] = useState();
  const [showErrorIcon, setShowErrorIcon] = useState(false);
  const { id } = useParams();
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  function toRadians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
  }

  //This function calculate the distance between the user location
  function orderDistance(origin, destination) {
    console.log(origin, destination);
    let lat1 = origin[0];
    let lon1 = origin[1];
    let lat2 = destination[0];
    let lon2 = destination[1];

    const radius = 6371; // earth radius in km

    const dlat = toRadians(lat2 - lat1);
    const dlon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dlat / 2) * Math.sin(dlat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dlon / 2) *
        Math.sin(dlon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = radius * c;

    return d;
  }

  //fetch the products from a dummy json located in the public folder
  const getData = () => {
    fetch("/data.json", {
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
        console.log(myJson, "popo");
      });
  };
  useEffect(() => {
    getData();
  }, []);

  //return the exact order that match the id params
  const singleProduct =
    responseData?.filter((product) => {
      return product?.id == id;
    }) || [];

  //Number formatting function
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const distanceResult =
    orderDistance([6.4253, 3.4095], [coords?.latitude, coords?.longitude]) *
    1000;
  //order function
  const orderProduct = () => {
    if (distanceResult < 50000) {
      setModalOpen("modal-open");
      setShowErrorIcon(false);
      setOrderMessage(
        `Your order has been placed since you are in ${numberWithCommas(
          distanceResult.toFixed(0) || 0
        )} meters away`
      );
    } else {
      setModalOpen("modal-open");
      setShowErrorIcon(true);
      setOrderMessage(
        `Your order wasnot placed because you are in ${numberWithCommas(
          distanceResult.toFixed(0) || 0
        )} meters away`
      );
    }
  };
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <OrderAlert
            modalOpen={openModal}
            setModalOpen={setModalOpen}
            orderMessage={orderMessage}
            showErrorIcon={showErrorIcon}
          />
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
              <div class="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img
                  class="w-full"
                  alt="image of a girl posing"
                  src={singleProduct[0]?.image}
                />
              </div>
              <div class="md:hidden">
                <img
                  class="w-full"
                  alt="image of a girl posing"
                  src={singleProduct[0]?.image}
                />
              </div>

              <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div class="border-b border-gray-200 pb-6">
                  <p class="text-sm leading-none text-gray-600 dark:text-gray-300 ">
                    {singleProduct[0]?.category}
                  </p>
                  <h1 class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
                    {singleProduct[0]?.title}
                  </h1>
                </div>
                <div className="px-1 capitalize py-2 border-b border-gray-200">
                  {singleProduct[0]?.description}
                </div>
                <div class="py-4 border-b border-gray-200 flex items-center justify-between">
                  <p class="text-base leading-4 text-gray-800 dark:text-gray-300">
                    Price
                  </p>
                  <div class="flex items-center justify-center">
                    <p class="text-sm leading-none text-gray-600 dark:text-gray-300">
                      ${singleProduct[0]?.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={orderProduct}
                  class="dark:bg-white btn bg-deepBlue dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white   w-full py-4 hover:bg-gray-700  "
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
