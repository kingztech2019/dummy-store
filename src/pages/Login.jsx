import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { handleSubmit, register } = useForm();
  const [openModal, setOpenModal] = useState("");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-[#F6F6F6]">
        <div className="mx-6 w-2/5">
          <div>
            <div className="mb-8  bg-white border-white rounded-2xl py-8 px-12  w-full mx-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <p className="text-deepBlue text-center py-2 text-2xl font-bold pt-6 ">
                    {" "}
                    Login
                  </p>
                  <div className="pb-10">
                    <fieldset className="border border-deepBlue rounded ">
                      <legend className="text-deepBlue text-lg font-bold px-2">
                        Email
                      </legend>

                      <input
                        type="text"
                        placeholder="Enter Email Address"
                        className="border-0 outline-none px-4 py-2 text-sm w-full bg-transparent"
                        {...register("email")}
                      />
                    </fieldset>
                  </div>
                  <div className="pb-1">
                    <fieldset className="border border-deepBlue rounded ">
                      <legend className="text-deepBlue text-lg font-bold px-2">
                        Password
                      </legend>

                      <input
                        type="password"
                        placeholder="Enter Password"
                        className="border-0 outline-none focus:outline-none px-4 py-2 text-sm w-full bg-white"
                        {...register("password")}
                      />
                    </fieldset>
                  </div>
                  <div className="text-right text-black font-semibold">
                    You don't have an account?{" "}
                    <Link to="/register">
                      <span className="font-black cursor-pointer text-deepBlue text-lg">
                        Sign up
                      </span>
                    </Link>
                  </div>
                  <div className="flex justify-center cursor-pointer  py-5">
                    <Link className="w-full" to="/dashboard">
                      <div>
                        <button className="bg-deepBlue w-full   text-center text-xl py-3 text-white rounded border-deepBlue  font-medium">
                          Login
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
