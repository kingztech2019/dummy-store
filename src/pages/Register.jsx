import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
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
                    Register
                  </p>
                  <div className="pb-2">
                    <fieldset className="border border-deepBlue rounded ">
                      <legend className="text-deepBlue text-sm font-bold px-2">
                        Full Name
                      </legend>

                      <input
                        type="text"
                        placeholder="Enter Full Name"
                        required
                        name="full_name"
                        className="border-0 outline-none px-4 py-2 text-sm w-full bg-transparent"
                        {...register("full_name")}
                      />
                    </fieldset>
                  </div>
                  <div className="pb-2">
                    <fieldset className="border border-deepBlue rounded ">
                      <legend className="text-deepBlue text-sm font-bold px-2">
                        Email Address
                      </legend>

                      <input
                        type="text"
                        placeholder="Enter Email Address"
                        required
                        name="email"
                        className="border-0 outline-none px-4 py-2 text-sm w-full bg-transparent"
                        {...register("email")}
                      />
                    </fieldset>
                  </div>
                  <div className="pb-2">
                    <fieldset className="border border-deepBlue rounded ">
                      <legend className="text-deepBlue text-sm font-bold px-2">
                        Phone Number
                      </legend>

                      <input
                        type="text"
                        placeholder="Enter Phone Number"
                        required
                        name="phone_number"
                        className="border-0 outline-none px-4 py-2 text-sm w-full bg-transparent"
                        {...register("phone_number")}
                      />
                    </fieldset>
                  </div>
                  <div className="pb-2">
                    <fieldset className="border border-deepBlue rounded ">
                      <legend className="text-deepBlue text-sm font-bold px-2">
                        Date of Birth
                      </legend>

                      <input
                        type="date"
                        required
                        name="date"
                        className="border-0 outline-none px-4 py-2 text-sm w-full bg-transparent"
                        {...register("dob")}
                      />
                    </fieldset>
                  </div>
                  <div className="pb-2">
                    <fieldset className="border border-deepBlue rounded ">
                      <legend className="text-deepBlue text-sm font-bold px-2">
                        Password
                      </legend>

                      <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        className="border-0 outline-none focus:outline-none px-4 py-2 text-sm w-full bg-white"
                        {...register("password")}
                      />
                    </fieldset>
                  </div>
                  <div className="text-right text-black font-semibold">
                    Do you have an account?{" "}
                    <Link to="/login">
                      <span className="font-black cursor-pointer text-deepBlue text-lg">
                        Login
                      </span>
                    </Link>
                  </div>
                  <div className="flex justify-center cursor-pointer  py-5">
                    <Link className="w-full" to="/dashboard">
                      <div className="w-full">
                        <button className="bg-deepBlue w-full   text-center text-xl py-3 text-white rounded border-deepBlue  font-medium">
                          Signup
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
