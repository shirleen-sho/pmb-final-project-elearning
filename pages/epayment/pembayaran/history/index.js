import React from 'react'
import FormItem from '../../../../Components/FormItem'
import Layout from '../../../../Components/Layout'
import TableBasic from '../../../../Components/Table/TableBasic'
import { useAppContext } from "../../../../Hooks/useAppContext";

export default function History() {
    const { dummy } = useAppContext();
    const { list_ruangan } = dummy;
    return (
        <>
            <Layout>
                <div className='space-y-4'>
                    <div className='flex space-x-8 border rounded-xl py-4 px-4 shadow'>
                        <div className='space-y-2 w-1/5'>
                            <FormItem label="Nama Siswa" labelType="label-md" labelWidth="w-full" />
                            <div>Nick Stokes</div>
                        </div>
                        <div className='space-y-2 w-1/5'>
                            <FormItem label="NIS Siswa" labelType="label-md" labelWidth="w-full" />
                            <div>08982200998</div>
                        </div>
                    </div>
                    <TableBasic
                        data={list_ruangan}
                        tableTitle="History Pembayaran"
                        actionDetail
                        fieldSearch
                    />
                </div>
            </Layout>
        </>
    )
}
