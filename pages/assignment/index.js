import React from 'react'
import Layout from '../../Components/Layout'
import Search from '../../Components/Search'
import Selects from '../../Components/Selects'
import Button from '../../Components/Buttons'
import Tabs from '../../Components/Tabs'
import Image from 'next/image'
import { MdOutlineLocalOffer } from 'react-icons/md'

const Assignment = () => {
    const list = [
        { id: 1, name: "Assigned", tab: "" },
        { id: 2, name: "Completed", tab: "/completed" },
    ];

    return (
        <>
            <Layout>
                <Tabs list={list} pathName="/assignment">
                    <div className="flex flex-col">
                        {/* container top */}
                        <div className="flex flex-row items-center gap-4 absolute top-0 right-0">
                            <div>
                                <Selects list={[
                                    { label: "a" },
                                    { label: "b" }
                                ]}
                                ></Selects>
                            </div>
                            <Search></Search>
                        </div>
                    </div>
                </Tabs>
                <div className='w-full h-14 border rounded flex justify-between '>
                    <div className='flex items-center py-2 px-2 gap-4'>
                        <Image
                            src="/images/icon/school.png"
                            width={2000}
                            height={2000}
                            alt="Pelajaran"
                            className="w-8 h-8 "
                        />
                        <div >
                            <div className='flex gap-4'>
                                <div className='text-base'>JUDUL TUGAS</div><div className='flex text-primary-500'><MdOutlineLocalOffer size={14} /><div className='text-xs'>Bahasa Indonesia</div></div>
                            </div>
                            <div className='text-xs'>Indra Marpaung, S.Tr.Ak, M.B.A.</div>
                        </div>
                    </div>
                    <div className='p-2 text-xs text-red-700'>
                        <p>Due 15, Agustus 2022, 12:00</p>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Assignment

