import React, { useState } from "react";
import Button from "../../../Components/Buttons";
import FormItem from "../../../Components/FormItem";
import InputFields from "../../../Components/InputFields";
import Layout from "../../../Components/Layout";
import Selects from "../../../Components/Selects";
import TextArea from "../../../Components/TextArea";
import ImageUploading from "react-images-uploading";
import { HiUpload } from "react-icons/hi";
import Image from "next/image";
import ColorPicker from "../../../Components/ColorPicker";

export default function addAlumni() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [image, setImage] = useState(null);

  const handleChangeImage = (currentImage, addUpdateIndex) => {
    console.log("image", currentImage);
    console.log("addUpdateIndex", addUpdateIndex);
    setImage(currentImage);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showPicker, setShowPicker] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [choosenColor, setChoosenColor] = useState({ hex: "#000000" });
  const handleShowPicker = () => setShowPicker(true);
  const handleClosePicker = () => setShowPicker(false);
  const handleChangeColor = (color, event) => setChoosenColor(color);

  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-9 gap-x-7">
          <div className="col-start-1 col-span-1">
            <FormItem label="Account" labelType="label-md" />
          </div>
          <div className="col-start-2 col-span-4 flex flex-col gap-5">
            <FormItem label="Foto" labelType="label-sm" labelWidth="w-1/3">
              <div className="w-full h-16">
                <ImageUploading
                  value={image}
                  onChange={handleChangeImage}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    // onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => {
                    let classBtn = "";
                    if (isDragging) {
                      classBtn = "bg-primary-50";
                    } else {
                      classBtn = "text-gray-400";
                    }
                    return (
                      <div className="flex flex-row gap-8 w-full h-full justify-between ">
                        {imageList.length === 0 ? (
                          <button
                            className={`w-16 h-full rounded-full border shadow-md flex justify-center items-center ${classBtn}`}
                            onClick={onImageUpload}
                            {...dragProps}
                          >
                            <HiUpload size={20} />
                          </button>
                        ) : (
                          imageList.map((image, index) => (
                            <div className="w-16 h-full relative" key={index}>
                              <Image
                                src={image["data_url"]}
                                alt="image"
                                key={"image" + index}
                                className="object-cover rounded-full shadow-lg"
                                fill
                              />
                            </div>
                          ))
                        )}
                        <div className="flex flex-row items-center gap-5 ">
                          <Button
                            type="light"
                            handleClick={() => onImageRemove(0)}
                            className="text-sm text-red-400 font-semibold disabled:text-gray-300"
                            disabled={imageList.length === 0 ? true : false}
                          >
                            Delete
                          </Button>
                          <Button
                            handleClick={() => onImageUpdate(0)}
                            className="text-sm text-primary-400 font-semibold"
                          >
                            {imageList.length === 0 ? "Upload" : "Change"}
                          </Button>
                        </div>
                      </div>
                    );
                  }}
                </ImageUploading>
              </div>
            </FormItem>
            {/* Nama */}
            <FormItem label="Nama" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="Nama" size="w-full" />
            </FormItem>
            {/* NPS */}
            <FormItem label="NUPTK" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="NPS" size="w-full" />
            </FormItem>
            {/* Jenis Kelamin */}
            <FormItem
              label="Jenis Kelamin"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <Selects
                list={[{ name: "Pria" }, { name: "Wanita" }]}
                style="w-full"
                description="Pilih Jenis Kelamin"
              />
            </FormItem>
            {/* Warna */}
            <FormItem label="Warna" labelType="label-sm" labelWidth="w-1/3">
              <div className="relative py-2">
                {/* preview warna terpilih */}
                <div className="flex flex-row items-center gap-4">
                  <div
                    className="h-7 w-7"
                    style={{ backgroundColor: choosenColor.hex }}
                  ></div>
                  <button
                    onClick={handleShowPicker}
                    className="uppercase text-xs hover:font-medium"
                  >
                    {choosenColor.hex}
                  </button>
                </div>
                {/* picker warna */}
                {showPicker && (
                  <ColorPicker
                    choosenColor={choosenColor}
                    handleChangeColor={handleChangeColor}
                    handleClosePicker={handleClosePicker}
                  />
                )}
              </div>
            </FormItem>
          </div>
          {/* No Wa */}
          <div className="col-start-6 col-span-4 flex flex-col gap-5">
            <FormItem
              label="No.Telp/WA"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <InputFields type="text" placeholder="No.Telp/WA" size="w-full" />
            </FormItem>
            {/* Tempat Lahir */}
            <FormItem
              label="Tempat Lahir"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <InputFields
                type="text"
                placeholder="Tempat Lahir"
                size="w-full"
              />
            </FormItem>
            {/* Tanggal Lahir */}
            <FormItem
              label="Tanggal lahir"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <InputFields type="date" placeholder="Email" size="w-full" />
            </FormItem>
            {/* Email */}
            <FormItem label="Email" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="Email" size="w-full" />
            </FormItem>
          </div>
        </div>
        <div className="border-b border-neutral-2" />
        <div className="grid grid-cols-9 gap-x-7">
          {/* Form Alamat  */}
          <div className="col-start-1 col-span-1">
            <FormItem label="Address" labelType="label-md" />
          </div>
          <div className="col-start-2 col-span-full mb-4">
            {/* Alamat */}
            <FormItem
              label="Alamat"
              labelType="label-sm"
              labelWidth="w-[13.5%]"
            >
              <TextArea placeholder="Alamat" />
            </FormItem>
          </div>
          
          <div className="col-start-2 col-span-4 flex flex-col gap-5">
            {/* Kecamatan */}
            <FormItem label="Kecamatan" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="Kecamatan" size="w-full" />
            </FormItem>
            {/* Kode Pos */}
            <FormItem label="Kode Pos" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="Kode Pos" size="w-full" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 flex flex-col gap-5">
            {/* Kabupaten */}
            <FormItem label="Kabupaten / Kota" labelType="label-sm"labelWidth="w-1/3">
              <InputFields type="text" placeholder="Kabupaten / Kota" size="w-full"/>
            </FormItem>
            {/* Provinsi */}
            <FormItem label="Provinsi" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="Provinsi" size="w-full" />
            </FormItem>
          </div>
        </div>
        <div className="border-b border-neutral-2" />
        <div className="grid grid-cols-9 gap-x-7">
          {/* password */}
          <div className="col-start-1 col-span-1">
            <FormItem label="Password" labelType="label-md" />
          </div>
          <div className="col-start-2 col-span-full flex flex-col gap-5">
            {/* Password */}
            <FormItem label="Password" labelType="label-sm" labelWidth="w-[13.5%]" >
              <InputFields type="text" placeholder="Password" size="w-full" />
            </FormItem>
            {/* Confirm Password */}
            <FormItem
              label="Confirm Password"
              labelType="label-sm"
              labelWidth="w-[13.5%]"
            >
              <InputFields
                type="text"
                placeholder="Confirm Password"
                size="w-full"
              />
            </FormItem>
          </div>
        </div>
        <div className="border-b border-neutral-2" />
        <div className="flex flex-row justify-end gap-5">
          <Button type="light">Back</Button>
          <Button type="primary">Update</Button>
        </div>
      </div>
    </Layout>
  );
}
