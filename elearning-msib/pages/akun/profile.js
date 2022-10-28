import React, { useState } from "react";
import Button from "../../Components/Buttons";
import FormItem from "../../Components/FormItem";
import InputFields from "../../Components/InputFields";
import Layout from "../../Components/Layout";
import Selects from "../../Components/Selects";
import TextArea from "../../Components/TextArea";
import ImageUploading from "react-images-uploading";

const Profile = () => {
  const [image, setImage] = useState(null);

  const handleChangeImage = (currentImage, addUpdateIndex) => {
    console.log("image", currentImage);
    console.log("addUpdateIndex", addUpdateIndex);
    setImage(currentImage);
  };

  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-9 gap-x-7">
          <div className="col-start-1 col-span-1">
            <FormItem label="Account" labelType="label-md" />
          </div>
          <div className="col-start-2 col-span-4 flex flex-col gap-5">
            <FormItem label="Foto" labelType="label-sm" labelWidth="w-1/3">
              <div className="w-full h-40">
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
                      <div className="flex flex-row justify-between w-full h-full pr-8">
                        {imageList.length === 0 ? (
                          <button
                            className={`w-40 h-full rounded-full border shadow-md flex justify-center items-center ${classBtn}`}
                            onClick={onImageUpload}
                            {...dragProps}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-10 h-10"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                              />
                            </svg>
                          </button>
                        ) : (
                          imageList.map((image, index) => (
                            <img
                              src={image["data_url"]}
                              alt=""
                              key={"image" + index}
                              className="object-cover w-40 h-full rounded-full shadow-lg"
                            />
                          ))
                        )}
                        <div className="flex flex-col gap-2 items-end">
                          <button
                            onClick={() => onImageRemove(0)}
                            className="text-red-400 font-semibold disabled:text-gray-300"
                            disabled={imageList.length === 0 ? true : false}
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => onImageUpdate(0)}
                            className="text-primary-400 font-semibold"
                          >
                            Upload
                          </button>
                        </div>
                      </div>
                    );
                  }}
                </ImageUploading>
              </div>
            </FormItem>
            <FormItem label="Nama" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="Nama" size="w-full" />
            </FormItem>
            <FormItem label="NPS" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="NPS" size="w-full" />
            </FormItem>
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
          </div>
          <div className="col-start-6 col-span-4 flex flex-col gap-5">
            <FormItem
              label="No.Telp/WA"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <InputFields type="text" placeholder="No.Telp/WA" size="w-full" />
            </FormItem>
            <FormItem
              label="Tempat Lahir"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <InputFields
                type="text"
                placeholder="Tempat lahir"
                size="w-full"
              />
            </FormItem>
            <FormItem
              label="Tanggal Lahir"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <InputFields
                type="text"
                placeholder="Tanggal lahir"
                size="w-full"
              />
            </FormItem>
            <FormItem label="Email" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="Email" size="w-full" />
            </FormItem>
            <FormItem label="Level" labelType="label-sm" labelWidth="w-1/3">
              <Selects
                list={[{ name: "Admin" }, { name: "Security" }]}
                style="w-full"
                description="Pilih Level"
              />
            </FormItem>
          </div>
        </div>
        <div className="border-b border-neutral-2" />
        <div className="grid grid-cols-9 gap-x-7">
          <div className="col-start-1 col-span-1">
            <FormItem label="Address" labelType="label-md" />
          </div>
          <div className="col-start-2 col-span-full flex flex-col gap-5">
            <FormItem label="Alamat" labelType="label-sm" labelWidth="w-1/5">
              <TextArea placeholder="Alamat" />
            </FormItem>
            <FormItem label="Kecamatan" labelType="label-sm" labelWidth="w-1/5">
              <InputFields type="text" placeholder="Kecamatan" size="w-1/3" />
            </FormItem>
            <FormItem label="Kode Pos" labelType="label-sm" labelWidth="w-1/5">
              <InputFields type="text" placeholder="Kode Pos" size="w-1/3" />
            </FormItem>
            <FormItem
              label="Kabupaten / Kota"
              labelType="label-sm"
              labelWidth="w-1/5"
            >
              <InputFields
                type="text"
                placeholder="Kabupaten / Kota"
                size="w-1/3"
              />
            </FormItem>
            <FormItem label="Provinsi" labelType="label-sm" labelWidth="w-1/5">
              <InputFields type="text" placeholder="Provinsi" size="w-1/3" />
            </FormItem>
          </div>
        </div>
        <div className="border-b border-neutral-2" />
        <div className="flex flex-row justify-end gap-5">
          <Button type="secondary">Back</Button>
          <Button type="primary">Update</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
