import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Button from '../../Components/Buttons'
import InputFields from '../../Components/InputFields'

const Login = ({ showSidemenu }) => {
    return (
        <>
            <div className='w-full h-screen flex' >
                <div className='w-1/2 h-full bg-white flex justify-center items-center'>
                    <div className='w-1/2 h-1/2 rounded-xl shadow-xl px-6 space-y-4 border'>
                        <div className='w-full h-full flex flex-col justify-evenly'>
                            <div className='space-y-4'>
                                <div className='space-y-4 pb-4'>
                                    <h1 className='text-2xl'>Log In</h1>
                                    <p className='text-xs'>Enter your credentials to access your account</p>
                                </div>
                                <div className='space-y-6'>
                                    <div className="relative">
                                        <InputFields size="w-full" placeholder="Username" />
                                    </div>
                                    <div className="relative">
                                        <InputFields size="w-full" placeholder="password" />
                                    </div>
                                    <div className='flex justify-between'>
                                        <div>
                                            <InputFields type="checkbox" /><span className='text-xs ml-2'>Remember Password</span>
                                        </div>
                                        <Link href="https://www.google.com/" legacyBehavior>
                                            <a className='flex justify-center text-right text-xs text-blue-500 hover:text-blue-800'>Forgot Password?</a>
                                        </Link>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <Button style="w-full px-auto">
                                    Login
                                </Button>
                                <h1 className='flex justify-center text-sm text-gray-500'>Develop by Jova Software - 2022</h1>
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-0 left-0 m-2'>
                        <div className='flex items-center space-x-2'>
                            <div>
                                <Image
                                    src="/images/icon/school.png"
                                    height={24}
                                    width={24}
                                    alt=" school"
                                />
                            </div>
                            <h1 className='text-2xl flex'>SS / </h1>
                            <span className='text-xs'>Starling school</span>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-full bg-[#607EAA] flex justify-center my-auto'>
                    <div className='w-1/2 h-3/4 space-y-4 my-auto'>
                        <div className='flex items-center justify-center space-x-2'>
                            <Image
                                src="/images/icon/school.png"
                                height={32}
                                width={32}
                                alt=" school"
                            />
                            <h1 className='text-3xl flex'>SS / </h1>
                            <span className='text-md'>Starling school</span>
                        </div>
                        <div>
                            <p className='text-xs text-center'>School System Infromation</p>
                        </div>
                        <div>
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
    )
}

export default Login