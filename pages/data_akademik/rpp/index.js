import React from 'react'
import Layout from '../../../Components/Layout'
import Tabs from '../../../Components/Tabs'
import Search from '../../../Components/Search'
import Button from '../../../Components/Buttons'

export default function RPP() {
  const list = [
    { id: 1, name: "Mata Pelajaran", tab: "/mata_pelajaran" },
    { id: 2, name: "Jadwal Pelajaran", tab: "/jadwal_pelajaran" },
    { id: 3, name: "Silabus", tab: "/silabus" },
    { id: 4, name: "RPP", tab: "/rpp" },
  ];

  return (
    <Layout>
      <Tabs list={list} pathName="/data_akademik">
        <div className="flex flex-col">
          {/* container top */}
          <div className="flex flex-row items-center gap-8 absolute top-0 right-0">
            <Search></Search>
            <Button link="/data_akademik/rpp/add">add</Button>
          </div>
        </div>
      </Tabs>
    </Layout>
  )
}
