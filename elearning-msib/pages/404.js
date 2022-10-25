import React from 'react'
import Buttons from '../Components/Buttons'

export default function Page404() {
    return (
        <div class="bg-gradient-to-r from-primary-400 to-blue-200">
            <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                <div class="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                    <div class="border-t border-gray-200 text-center pt-8 pb-8 px-12">
                        <h1 class="text-9xl font-bold text-primary-400">404</h1>
                        <h1 class="text-6xl font-medium py-10">oops! Page not found</h1>
                        <Buttons classColor="btn-primary" size="btn-xs" link="/">Home</Buttons>
                    </div>
                </div>
            </div>
        </div>
    )
}
