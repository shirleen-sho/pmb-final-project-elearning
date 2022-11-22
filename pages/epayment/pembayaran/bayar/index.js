import React from 'react'
import Button from '../../../../Components/Buttons';
import FormItem from '../../../../Components/FormItem';
import InputFields from '../../../../Components/InputFields';
import Layout from '../../../../Components/Layout';
import TableBasic from '../../../../Components/Table/TableBasic'
import { useAppContext } from "../../../../Hooks/useAppContext";
import Select from "../../../../Components/Selects"

export default function Bayar() {
    const { dummy } = useAppContext();
    const { list_ruangan } = dummy;
    return (
        <>
            <Layout>
                <div className=''>
                    <div className='w-full space-y-8'>
                        <FormItem label="Detail Transaksi" labelType="banner" labelWidth="w-full" />
                        <div className='flex'>
                            <div className='flex-1'>
                                <FormItem label="No Transaksi" labelType="label-md" labelWidth="w-full" />
                                <div>#1111</div>
                            </div>
                            <div className='flex-1'>
                                <FormItem label="Tanggal" labelType="label-md" labelWidth="w-full" />
                                <div className='text-base font-semibold'></div>
                                <div>05 October 2022 | 16.00</div>
                            </div>
                            <div className='flex-1'>
                                <FormItem label="Jenis Pembayaran" labelType="label-md" labelWidth="w-full" />
                                <div>SPP</div>
                            </div>
                            <div className='flex-1'>
                                <FormItem label="Status" labelType="label-md" labelWidth="w-full" />
                                <div>Belum Bayar</div>
                            </div>
                        </div>
                        {/* <div>
                            <TableBasic
                                data={list_ruangan}
                                tableTitle="Daftar Pembayaran"
                                actionDetail
                                fieldSearch
                            />
                        </div> */}
                        <div>
                            <div className='text-xl font-semibold'>Pembayaran</div>
                            <div className='flex gap-8'>
                                <div className='flex-1'>
                                    <FormItem label="Nama Pembayaran" labelType="label-md" labelWidth="w-full" /><div className='text-base font-semibold'></div>
                                    <InputFields type="text" size="w-full"/>
                                </div>
                                <div className='flex-1'>
                                    <FormItem label="Metode Pembayaran" labelType="label-md" labelWidth="w-full" />
                                    <Select list={[
                                    { label: "a" },
                                    { label: "b" }
                                    ]}></Select>
                                </div>
                            </div>
                            <div className='flex gap-8'>
                                <div className='flex-1'>
                                    <FormItem label="Nominal Pembayaran" labelType="label-md" labelWidth="w-full" />
                                    <InputFields type="number" size="w-full"/>
                                </div>
                                <div className='flex-1'>
                                    <FormItem label="Nomor Phone" labelType="label-md" labelWidth="w-full" />
                                    <InputFields type="number" size="w-full"/>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 justify-end'>
                            <Button type="light">Cancel</Button>
                            <Button>Payment</Button>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
