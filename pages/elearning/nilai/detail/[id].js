import React from "react";
import Button from "../../../../Components/Buttons";
import FormItem from "../../../../Components/FormItem";
import InputFields from "../../../../Components/InputFields";
import Layout from "../../../../Components/Layout";
import TextArea from "../../../../Components/TextArea";
import { MdOutlineLocalOffer } from "react-icons/md";

const DetailNilai = () => {
  return (
    <>
      <Layout>
        <div>
          <div className="my-5">
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
            <FormItem
              label="Due 15, Agustus 2022 ~ 12.00"
              labelType="label-sm"
              labelWidth="w-full"
            />
          </div>
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
        </div>
      </Layout>
    </>
  );
};

export default DetailNilai;
