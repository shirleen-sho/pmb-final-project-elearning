import React from 'react'
import Layout from "../../Components/Layout"
import CardMapels from "../../Components/Card/CardMapels";
import { useAppContext } from "../../Hooks/useAppContext";

export default function MateriPembelaajran() {
    const { dummy } = useAppContext();
    const { study } = dummy;
    return (
        <>
            <Layout>
                <div className="grid 2xl:grid-cols-5 xl:grid-cols-3 lg:grid-cols-2 gap-8 justify-center items-center">
                    <CardMapels study={study}></CardMapels>
                </div>
            </Layout >
        </>
    )
}