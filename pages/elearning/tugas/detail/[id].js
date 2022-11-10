import React from 'react'
import Layout from '../../../../Components/Layout'
import FormItem from '../../../../Components/FormItem'
import InputFields from '../../../../Components/InputFields'
import Button from '../../../../Components/Buttons'
import Selects from '../../../../Components/Selects'

export default function AddTugas() {
  return (
    <>
      <Layout>
        <div className="flex flex-col gap-5">
          <FormItem label="Fill Siswa details here!" labelType="banner" />
          <div className="border-b border-neutral-2" />
          {/* start form */}
          <h3 className="font-bold underline underline-offset-2 mb-1">
            DATA DIRI
          </h3>
          <div className="grid grid-cols-9 grid-rows-9 gap-x-7 gap-y-4">
            <div className="col-start-1 col-span-9 row-start-1">
              <FormItem label="Kode Tugas" labelType="label-sm" labelWidth="w-1/5">
                <InputFields type="text" valueLock="T01" size="w-full" disabled />
              </FormItem>
            </div>
            <div className="col-start-1 col-span-9 row-start-2">
              <FormItem label="Guru Pembuat" labelType="label-sm" labelWidth="w-1/5">
                <Selects
                  list={[
                    { name: "MTK" },
                    { name: "PKN" },
                    { name: "Penjaskes" },
                    { name: "IPS" },
                    { name: "IPA" },
                  ]}
                  style="w-full"
                  description="Pilih Mata Pelajaran"
                />
              </FormItem>
            </div>
            <div className="col-start-1 col-span-9 row-start-3">
              <FormItem label="Mata Pelajaran" labelType="label-sm" labelWidth="w-1/5">
                <Selects
                  list={[
                    { name: "MTK" },
                    { name: "PKN" },
                    { name: "Penjaskes" },
                    { name: "IPS" },
                    { name: "IPA" },
                  ]}
                  style="w-full"
                  description="Pilih Mata Pelajaran"
                />
              </FormItem>
            </div>
            <div className="col-start-1 col-span-9 row-start-4">
              <FormItem label="Judul Tugas" labelType="label-sm" labelWidth="w-1/5">
                <InputFields type="text" placeholder="Bab" size="w-full" />
              </FormItem>
            </div>
            <div className="col-start-1 col-span-9 row-start-5">
              <FormItem label="Kelas" labelType="label-sm" labelWidth="w-1/5">
                <Selects
                  list={[
                    { name: "MTK" },
                    { name: "PKN" },
                    { name: "Penjaskes" },
                    { name: "IPS" },
                    { name: "IPA" },
                  ]}
                  style="w-full"
                  description="Pilih Materi Pelajaran"
                />
              </FormItem>
            </div>
            <div className="col-start-1 col-span-9 row-start-6">
              <FormItem label="Siswa" labelType="label-sm" labelWidth="w-1/5">
                <Selects
                  list={[
                    { name: "Materi" },
                    { name: "Video" },
                  ]}
                  style="w-full"
                  description="Pilih Materi Pelajaran"
                />
              </FormItem>
            </div>
            <div className="col-start-1 col-span-9 row-start-7">
              <FormItem label="Tanggal Pengerjaan" labelType="label-sm" labelWidth="w-1/5">
                <InputFields type="date" placeholder="Tulis Judul Tugas Dengan Detail" size="w-full" />
              </FormItem>
            </div>
            <div className="col-start-1 col-span-9 row-start-8">
              <FormItem label="Waktu Pengerjaan" labelType="label-sm" labelWidth="w-1/5">
                <InputFields type="time" placeholder="Bab" size="w-full" />
              </FormItem>
            </div>
            <div className="col-start-1 col-span-9 row-start-9" >
              <div className="flex flex-row justify-end gap-5">
                <Button type="light" link="/kesiswaan/siswa">
                  Cancel
                </Button>
                <Button type="primary">Save</Button>
              </div>
            </div>
          </div>

        </div>
      </Layout>
    </>
  )
}
