import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";
import Button from "../../../../Components/Buttons";
import FormItem from "../../../../Components/FormItem";
import Selects from "../../../../Components/Selects";
import Image from "next/image";
import ImageUploader from "../../../../Components/ImageUploader";

const DetailWali = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <FormItem label="Edit Wali Murid details here!" labelType="banner" />
        <div className="border-b border-neutral-2" />
        {/* start form DATA AYAH */}
        <h3 className="font-bold underline underline-offset-2 mb-1">
          DATA AYAH
        </h3>
        <div className="grid grid-cols-9 grid-rows-7 gap-x-7 gap-y-4">
          <div className="col-start-1 col-span-4 row-start-1 row-span-2">
            <FormItem label="Foto" labelType="label-sm" labelWidth="w-1/3">
              <ImageUploader />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-3 row-span-1">
            <FormItem label="Nama" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="Nama" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-4 row-span-1">
            <FormItem label="Username" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="Username" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-5 row-span-1">
            <FormItem
              label="Jenis Kelamin"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <FormItem label="Pria" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-6 row-span-1">
            <FormItem
              label="Tempat Lahir"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <FormItem label="Tempat Lahir" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-7 row-span-1">
            <FormItem
              label="Tanggal Lahir"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <FormItem label="MM/DD/YYYY" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-1 row-span-1">
            <FormItem label="Agama" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="Agama" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-2 row-span-1">
            <FormItem
              label="No.Telp/WA"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <FormItem label="No.Telp/WA" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-3 row-span-1">
            <FormItem label="Email" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="Email" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-4 row-span-1">
            <FormItem label="Pekerjaan" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="Pekerjaan" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-5 row-span-2">
            <FormItem label="Alamat" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="Alamat" labelType="read-only" />
            </FormItem>
          </div>
        </div>
        <div className="border-b border-neutral-2" />
        {/* end form DATA AYAH */}

        {/* start form DATA IBU */}
        <h3 className="font-bold underline underline-offset-2 mb-1">
          DATA IBU
        </h3>
        <div className="grid grid-cols-9 grid-rows-7 gap-x-7 gap-y-4">
          <div className="col-start-1 col-span-4 row-start-1 row-span-2">
            <FormItem label="Foto" labelType="label-sm" labelWidth="w-1/3">
              <ImageUploader />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-3 row-span-1">
            <FormItem label="Nama" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="Nama" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-4 row-span-1">
            <FormItem label="Username" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="Username" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-5 row-span-1">
            <FormItem
              label="Jenis Kelamin"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <FormItem label="Jenis Kelamin" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-6 row-span-1">
            <FormItem
              label="Tempat Lahir"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <FormItem label="Tempat Lahir" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-7 row-span-1">
            <FormItem
              label="Tanggal Lahir"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <FormItem label="MM/DD/YYYY" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-1 row-span-1">
            <FormItem label="Agama" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="Agama" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-2 row-span-1">
            <FormItem
              label="No.Telp/WA"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <FormItem label="No.Telp/WA" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-3 row-span-1">
            <FormItem label="Email" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="Email" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-4 row-span-1">
            <FormItem label="Pekerjaan" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="Pekerjaan" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-5 row-span-2">
            <FormItem label="Alamat" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="Alamat" labelType="read-only" />
            </FormItem>
          </div>
        </div>
        <div className="border-b border-neutral-2" />
        {/* end form DATA IBU */}

        {/* start form DATA ANAK */}
        <h3 className="font-bold underline underline-offset-2 mb-1">
          DATA ANAK
        </h3>
        <div className="grid grid-cols-9 grid-rows-9 gap-x-7 gap-y-4">
          <div className="col-start-1 col-span-4 row-start-1 row-span-1">
            <FormItem label="Nama" labelType="label-sm" labelWidth="w-1/3">
              <Selects
                list={[{ name: "A" }, { name: "B" }]}
                style="w-full"
                description="Pilih Anak"
              />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-2 row-span-2">
            <FormItem label="Foto" labelType="label-sm" labelWidth="w-1/3">
              <div className="w-20 h-20 relative">
                <Image
                  src="/images/profile.jpg"
                  alt="image"
                  key="profile photo anak"
                  className="object-cover rounded-full shadow-lg"
                  fill
                />
              </div>
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-4 row-span-1">
            <FormItem label="NUPTK" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="2569877" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-5 row-span-1">
            <FormItem
              label="Jenis Kelamin"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <FormItem label="Wanita" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-6 row-span-1">
            <FormItem
              label="Tempat Lahir"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <FormItem label="Medan" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-7 row-span-1">
            <FormItem
              label="Tanggal Lahir"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <FormItem label="08/08/2005" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-8 row-span-1">
            <FormItem label="Kelas" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="XII-IA3" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-9 row-span-1">
            <FormItem label="Agama" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="Protestan" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-1 row-span-1">
            <FormItem
              label="No.Telp/WA"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <FormItem label="081823597492" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-2 row-span-1">
            <FormItem label="Email" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="siswa007@gmail.com" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-3 flex items-center">
            <div className="bg-neutral-2 h-[1px] w-full"></div>
          </div>
          <div className="col-start-5 col-span-1 row-start-4 row-span-6">
            <FormItem label="Address" labelType="label-md" />
          </div>
          <div className="col-start-6 col-span-4 row-start-4 row-span-1">
            <FormItem label="Provinsi" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="Sumatera Utara" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-5 row-span-1">
            <FormItem
              label="Kabupaten / Kota"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <FormItem label="Kota Medan" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-6 row-span-1">
            <FormItem label="Kecamatan" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="Medan Denai" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-7 row-span-1">
            <FormItem label="Kode Pos" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="20256" labelType="read-only" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-8 row-span-2">
            <FormItem label="Alamat" labelType="label-sm" labelWidth="w-1/3">
              <FormItem label="Jl. Mangga No. 17" labelType="read-only" />
            </FormItem>
          </div>
        </div>
        <div className="border-b border-neutral-2" />
        {/* end form DATA ANAK */}

        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/kesiswaan/wali">
            Back
          </Button>
          <Button type="danger" link={"/kesiswaan/wali/archive"}>
            Archive
          </Button>
          <Button type="warning" link={"/kesiswaan/wali/edit/" + id}>
            Edit
          </Button>
        </div>
      </div>
    </Layout>
  );
};
export default DetailWali;
