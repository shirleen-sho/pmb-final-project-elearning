import React from 'react'
import Button from '../../../../Components/Buttons'
import FormItem from '../../../../Components/FormItem'
import InputFields from '../../../../Components/InputFields'
import Layout from "../../../../Components/Layout"
import TextArea from '../../../../Components/TextArea'

const DetailPengumpulanTugas = () => {
  return (
    <>
      <Layout>
        <FormItem label="Tugas Teks Eksposisi" labelType="title" labelWidth="w-1/5" />
        <FormItem label="Bahasa Indonesia" labelType="label-sm" labelWidth="w-1/5" />
        <FormItem label="Due 15, Agustus 2022 ~ 12.00" labelType="label-sm" labelWidth="w-1/5" />
        <FormItem label="Instruksi" labelType="label-md" labelWidth="w-1/5" />
        <TextArea size="w-full" />
        <FormItem label="file Soal" labelType="label-md" labelWidth="w-1/5" />
        <InputFields size="w-full" />
        <FormItem label="My Work" labelType="label-md" labelWidth="w-1/5" />
        <InputFields size="w-full" />
        <FormItem label="Score" labelType="label-md" labelWidth="w-1/5" />
        <InputFields size="w-full" />
        <Button>Share</Button>
      </Layout>
    </>
  )
}

export default DetailPengumpulanTugas