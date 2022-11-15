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
                    labelWidth="w-full "
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
          <div className="space-y-5">
            <div>
              <FormItem label="Instruksi" labelType="label-md " labelWidth="w-1/5" />
              <p className="text-justify">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,
                content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div className="grid grid-cols-6 grid-rows-2 md:grid-cols-10 md:grid-rows-1 md:gap-4 items-center ">
              <div className="md:col-start-1 md:col-span-1 md:row-start-1 ">
                <FormItem label="file Sosial" labelType="label-md" labelWidth="w-full" />
              </div>
              <div className="md:col-start-2 md:col-span-2 md:row-start-1 ">
                <InputFields size="w-full" />
              </div>
              <div className="md:col-start-4 md:col-span-1 md:row-start-1 ">
              <FormItem label="My Work" labelType="label-md" labelWidth="w-full" />
              </div>
              <div className="md:col-start-5 md:col-span-2 md:row-start-1 ">
                <InputFields size="w-full" />
              </div>
              <div className="md:col-start-7 md:col-span-1 md:row-start-1 ">
              <FormItem label="Score" labelType="label-md" labelWidth="w-1/5" />
              </div>
              <div className="col-start-1 row-start-2 md:col-start-8 md:col-span-2 md:row-start-1 ">
                <InputFields type="text" size="w-full " />
              </div>
              <div className="md:col-start-10 md:col-span-1 md:row-start-1 ">
                <Button>Share</Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default DetailPengumpulanTugas