import React from 'react'
import CardMateris from '../../../../Components/Card/CardMateris'
import Layout from '../../../../Components/Layout'
import Tabs from'../../../../Components/Tabs'
import { useAppContext } from '../../../../Hooks/useAppContext'


export default function DetailMateriPembelajaran() {
    const list = [
        { id: 1, name: "All" , tab:"" },
        { id: 2, name: "Materi", tab:"/materi" },
        { id: 3, name: "Video", tab: "/video"},
    ]
    const { dummy } = useAppContext();
    const { materi } = dummy;

  return (
    <>
        <Layout>
            <Tabs list={list} pathName="/elearning/materi_pembelajaran/detail" />
            <div className='grid 2xl:grid-cols-5 xl:grid-cols-3 lg:grid-cols-2 gap-8 justify-center items-center'>
            <CardMateris materi={materi} ></CardMateris>
            </div>
        </Layout>
    </>
  )
}
