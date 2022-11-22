import React from 'react'
import FormItem from '../../../../Components/FormItem'
import Layout from '../../../../Components/Layout'
import TableBasic from '../../../../Components/Table/TableBasic'

export default function History() {
    const { dummy } = useAppContext();
    const { list_ruangan } = dummy;
    return (
        <>
            <Layout>
                <div className='space-y-4'>
                    <FormItem label="History Transaksi" labelType="banner" labelWidth="w-full" />
                    <div className='flex'>
                        <div className='w-1/4'>
                            <FormItem label="Nama Siswa" labelType="label-md" labelWidth="w-full" />
                            <div>Nick Stokes</div>
                        </div>
                        <div className='w-1/4'>
                            <FormItem label="NIS Siswa" labelType="label-md" labelWidth="w-full" />
                            <div>0898200998</div>
                        </div>
                    </div>
                    <FormItem label="History Pembayaran" labelType="label-md" labelWidth="w-full" />
                    <TableBasic
                        data={list_ruangan}
                        tableTitle="Daftar Pembayaran"
                        actionDetail
                        fieldSearch
                    />
                </div>
            </Layout>
        </>
    )
}
