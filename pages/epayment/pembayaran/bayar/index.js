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
                    <div className='w-full space-y-4'>
                        <FormItem label="Detail Transaksi" labelType="banner" labelWidth="w-full" />
                        <div className='border space-y-4 rounded-xl gap-8 py-8 px-6 shadow'>
                            <div className='flex w-1/2'>
                                <div className='flex-1'>
                                    <FormItem label="No Transaksi" labelType="label-sm" labelWidth="w-full" />
                                    <div className='text-xs'>#1111</div>
                                </div>
                                <div className='flex-1'>
                                    <FormItem label="Jenis Pembayaran" labelType="label-sm" labelWidth="w-full" />
                                    <div className='text-xs'>SPP</div>
                                </div>
                                <div className='flex-1'>
                                    <FormItem label="Status" labelType="label-sm" labelWidth="w-full" />
                                    <div className='text-xs'>Belum Bayar</div>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <div className='text-lg font-semibold'>Pembayaran</div>
                                <div className='flex gap-8'>
                                    <div className='flex-1'>
                                        <FormItem label="Nama Pembayaran" labelType="label-sm" labelWidth="w-full" /><div className='text-base font-semibold'></div>
                                        <InputFields type="text" size="w-full" />
                                    </div>
                                    <div className='flex-1'>
                                        <FormItem label="Metode Pembayaran" labelType="label-sm" labelWidth="w-full" />
                                        <Select list={[
                                            { label: "a" },
                                            { label: "b" }
                                        ]}
                                            description="Pilihan"
                                        ></Select>
                                    </div>
                                </div>
                                <div className='flex gap-8'>
                                    <div className='flex-1'>
                                        <FormItem label="Nominal Pembayaran" labelType="label-sm" labelWidth="w-full" />
                                        <InputFields type="number" size="w-full" />
                                    </div>
                                    <div className='flex-1'>
                                        <FormItem label="Nomor Phone" labelType="label-sm" labelWidth="w-full" />
                                        <InputFields type="number" size="w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <TableBasic
                                data={list_ruangan}
                                tableTitle="History Transaksi"
                                actionDetail
                                fieldSearch
                            />
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
