import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Button from '../../Components/Buttons'
import InputFields from '../../Components/InputFields'

const Login = ({showSidemenu}) => {
    return (
        <>
            <div class="min-h-screen bg-gradient-to-r from-primary-400 to-blue-200 py-6 flex flex-col justify-center sm:py-12">
                <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10 space-y-4">
                        <div class="max-w-md mx-auto">
                            <div className='flex justify-center'>
                                <Image
                                    src="/images/logo.png"
                                    height={1000}
                                    width={1000}
                                    alt=" school"
                                    className='w-48 h-16'
                                />
                            </div>
                            <div class="divide-y divide-gray-200 ">
                                <div class="py-2 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7 space-y-4">
                                    <div class="relative">
                                        <InputFields size="w-96" placeholder="Username" />
                                    </div>
                                    <div class="relative">
                                        <InputFields size="w-96" placeholder="password" />
                                    </div>
                                    <div className='space-y-3'>
                                        <Button style="w-full px-auto">
                                            Login
                                        </Button>`  `

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
            </div>
        </>
    )
}

export default Login