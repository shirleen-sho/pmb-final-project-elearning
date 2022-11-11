import Link from "next/link";
import Image from "next/image";
import React from "react";
import Button from "../../Components/Buttons";
import InputFields from "../../Components/InputFields";
import FormItem from "../../Components/FormItem";

const Login = () => {
  const info = [
    { picture: "/images/icon/Dashboard.png", title: "Monitor your school", desc: "At starling school we make it easy for students, admins, and teachers to monitor all learning activities" },
    // { picture: "/images/icon/Dashboard.png", title: "", desc: "" },
    // { picture: "/images/icon/Dashboard.png", title: "", desc: "" },
  ];

  console.log(info);
  return (
    <>
      <div className="w-full h-screen flex">
        <div className="w-1/2 h-full bg-primary-300 flex justify-center my-auto">
          <div className="w-1/2 h-fit flex align-middle space-y-4 my-auto">
            {info.map((value, index) => (
              <div key={index} className="space-y-4 flex justify-center flex-col align-middle items-center">
                <Image
                  src={value.picture}
                  height={1000}
                  width={1000}
                  alt=" school"
                  className="w-full h-full flex justify-center items-center"
                />
                <div className="w-full flex justify-center flex-col">
                  <h1 className="text-center font-extrabold text-xs">
                    {value.title}
                  </h1>
                  <p className="text-center text-xs font-extralight">
                    {value.desc}
                  </p>
                </div>
                <div className="w-full flex justify-center space-x-4">
                  <button
                    type="button"
                    className="w-2 h-2 rounded-full bg-slate-300 active:bg-slate-400  hover:active:bg-slate-600 "
                    aria-current="false"
                    aria-label="Slide 1"
                    data-carousel-slide-to="0"
                  ></button>
                  <button
                    type="button"
                    className="w-2 h-2 rounded-full bg-slate-300 active:bg-slate-400 hover:active:bg-slate-600"
                    aria-current="false"
                    aria-label="Slide 2"
                    data-carousel-slide-to="1"
                  ></button>
                  <button
                    type="button"
                    className="w-2 h-2 rounded-full bg-slate-300 active:bg-slate-400  hover:active:bg-slate-600"
                    aria-current="false"
                    aria-label="Slide 3"
                    data-carousel-slide-to="2"
                  ></button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 h-full bg-white flex justify-center my-auto">
          <div className="w-fit h-fit border space-y-4 p-5 my-auto rounded shadow">
            <div className="w-full h-full flex flex-col justify-evenly">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <Image
                    src="/images/logo.png"
                    height={200}
                    width={200}
                    alt=" school"
                    className="w-42 h-20 flex justify-center items-center"
                  />
                  <div></div>
                </div>
                <div className="space-y-4">
                  <div className="relative">
                    <FormItem
                      label="Username or email address"
                      labelType="label-sm"
                      labelWidth="w-full"
                    ></FormItem>
                    <InputFields size="w-full" placeholder="Username" />
                  </div>
                  <div className="relative">
                    <FormItem
                      label="Password"
                      labelType="label-sm"
                      labelWidth="w-full"
                    ></FormItem>
                    <InputFields size="w-full" placeholder="Password" />
                  </div>
                  <div className="flex justify-between space-x-10 align-middle items-center">
                    <div>
                      <InputFields type="checkbox" />
                      <span className="text-xs ml-2">Remember Password</span>
                    </div>
                    <Link href="https://www.google.com/" legacyBehavior>
                      <a className="flex justify-center text-right text-xs text-blue-500 hover:text-blue-800">
                        Forgot Password?
                      </a>
                    </Link>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="space-y-2">
                <Button style="w-full px-auto">Login</Button>
                <h1 className="flex justify-center text-sm text-gray-500">
                  Develop by Jova Software - 2022
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;