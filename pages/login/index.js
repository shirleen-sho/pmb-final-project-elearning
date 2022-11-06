import Link from "next/link";
import Image from "next/image";
import React from "react";
import Button from "../../Components/Buttons";
import InputFields from "../../Components/InputFields";
import FormItem from "../../Components/FormItem";

const Login = () => {
  const info = [
    { picture: "/images/icon/Dashboard.png", title: "", desc: "" },
    // { picture: "/images/icon/Dashboard.png", title: "", desc: "" },
    // { picture: "/images/icon/Dashboard.png", title: "", desc: "" },
  ];

  console.log(info);
  return (
    <>
      <div className="w-full h-screen flex">
        <div className="w-1/2 h-full bg-primary-300 flex justify-center my-auto">
          <div className="w-2/3 h-3/4 space-y-4 my-auto">
            {info.map((value, index) => (
              <div key={index} className="space-y-12">
                <Image
                  src={value.picture}
                  height={596}
                  width={853}
                  alt=" school"
                  className="w-full h-full flex justify-center items-center"
                />
                <div className="w-full flex flex-col space-y-8 justify-center items-center">
                  <div className="w-80 flex justify-center flex-col">
                    <h1 className="text-center font-extrabold text-lg">
                      Monitor your school
                    </h1>
                    <p className="text-center text-sm font-extralight">
                      At starling school we make it easy for students, admins,
                      and teachers to monitor all learning activities
                    </p>
                  </div>
                  <div className="w-full flex justify-center space-x-4">
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full bg-slate-300 active:bg-slate-400  hover:active:bg-slate-600 "
                      aria-current="false"
                      aria-label="Slide 1"
                      data-carousel-slide-to="0"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full bg-slate-300 active:bg-slate-400 hover:active:bg-slate-600"
                      aria-current="false"
                      aria-label="Slide 2"
                      data-carousel-slide-to="1"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full bg-slate-300 active:bg-slate-400  hover:active:bg-slate-600"
                      aria-current="false"
                      aria-label="Slide 3"
                      data-carousel-slide-to="2"
                    ></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 h-full bg-white flex justify-center items-center">
          <div className="w-1/2 h-1/2 rounded-xl shadow-xl px-6 space-y-4 border">
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
                  <div className="flex justify-between">
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
          <div className="absolute bottom-0 left-0 m-2">
            <div className="flex items-center space-x-2">
              <div>
                <Image
                  src="/images/icon/school.png"
                  height={24}
                  width={24}
                  alt=" school"
                />
              </div>
              <h1 className="text-2xl flex">SS / </h1>
              <span className="text-xs">Starling school</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="min-h-screen bg-gradient-to-r from-primary-400 to-blue-200 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10 space-y-4">
                        <div className="max-w-md mx-auto">
                            <div className='flex justify-center'>
                                <Image
                                    src="/images/logo.png"
                                    height={1000}
                                    width={1000}
                                    alt=" school"
                                    className='w-48 h-16'
                                />
                            </div>
                            <div className="divide-y divide-gray-200 ">
                                <div className="py-2 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7 space-y-4">
                                    <div className="relative">
                                        <InputFields size="w-96" placeholder="Username" />
                                    </div>
                                    <div className="relative">
                                        <InputFields size="w-96" placeholder="password" />
                                    </div>
                                    <div className='space-y-3'>
                                        <Button style="w-full px-auto">
                                            Login
                                        </Button>

                                        <Link href="https://www.google.com/" legacyBehavior>
                                            <a className='flex justify-center text-center text-xs text-blue-500 hover:text-blue-800'>Forgot Password?</a>
                                        </Link>
                                        <h1 className='flex justify-center text-sm text-gray-500'>Develop by Jova Software - 2022</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div> */}
    </>
  );
};

export default Login;
