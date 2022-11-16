import React from "react";
import Button from "../../../../Components/Buttons";
import FormItem from "../../../../Components/FormItem";
import InputFields from "../../../../Components/InputFields";
import Layout from "../../../../Components/Layout";
import TextArea from "../../../../Components/TextArea";
import { MdOutlineLocalOffer } from "react-icons/md";

const DetailPengumpulanTugas = () => {
  return (
    <>
      <Layout>
        <div className="flex justify-between items-center my-5">
          <div>
            <div className="inline-flex w-full gap-4 align-middle items-center">
              <FormItem
                label="Tugas Teks Eksposisi"
                labelType="title"
                labelWidth="w-full"
              />
              <div className="text-primary-200 flex gap-1">
                <MdOutlineLocalOffer />
                <FormItem
                  label="Bahasa Indonesia"
                  labelType="label-md"
                  labelWidth="w-full"
                />
              </div>
            </div>
            <p>
              Due 15, Agustus 2022 ~ 12.00
            </p>
          </div>
          <div>
            <p className="text-base text-gray-300 italic font-extralight">
              Turned in Thu Jan 7, 2021 at 8:09 AM
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <FormItem label="Instruksi" labelType="label-md" labelWidth="w-1/5" />
          <p className="text-justify">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
          </p>
          <FormItem label="file Soal" labelType="label-md" labelWidth="w-1/5" />
          <InputFields size="w-full" />
          <FormItem label="My Work" labelType="label-md" labelWidth="w-1/5" />
          <InputFields size="w-full" />
          <FormItem label="Score" labelType="label-md" labelWidth="w-1/5" />
          <InputFields size="w-full" />
          <div className="flex justify-end mt-4">
            <Button>Share</Button>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default DetailPengumpulanTugas


{/* <Layout>
<div>
  <div className="flex justify-between items-center my-5">
    <div>
      <div className="inline-flex w-full gap-4 align-middle items-center">
        <FormItem
          label="Tugas Teks Eksposisi"
          labelType="title"
          labelWidth="w-full"
        />
        <div className="text-primary-200 flex gap-1">
          <MdOutlineLocalOffer />
          <FormItem
            label="Bahasa Indonesia"
            labelType="label-md" 
            labelWidth="w-full"
          />
        </div>
      </div>
      <p>
        Due 15, Agustus 2022 ~ 12.00
      </p>
    </div>
    <div>
      <p className="text-base text-gray-300 italic font-extralight">
        Turned in Thu Jan 7, 2021 at 8:09 AM
      </p>
    </div>
  </div>
  <div className="flex gap-4">
    <div className="flex-initial w-2/3" >
      <FormItem label="Instruksi" labelType="label-md" labelWidth="w-full" />
      <p className="text-justify">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,
        content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
        as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions
        have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </p>
    </div>
    <div className="flex-initial w-1/3 space-y-6">
      <div>
      <FormItem label="file Sosial" labelType="label-md" labelWidth="w-full" />
      <InputFields size="w-full" />
      </div>
      <div>
      <FormItem label="My Work" labelType="label-md" labelWidth="w-full" />
      <InputFields size="w-full" />
      </div>
      <div className="space-y-2">
      <FormItem label="Score" labelType="label-md" labelWidth="w-full" />
      <InputFields type="text" size="w-full " />
      <div className="flex justify-end">
        <Button>Share</Button>
      </div>
      </div>
    </div>
  </div>
</div>
</Layout> */}