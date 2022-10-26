import React from "react";
import Buttons from "../../Components/Buttons";
import FormLabel from "../../Components/FormLabel";
import InputFields from "../../Components/InputFields";
import Layout from "../../Components/Layout";
import Selects from "../../Components/Selects";
import TextArea from "../../Components/TextArea";

const Profile = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-9 grid-rows-6 gap-x-7 gap-y-5">
          <span className="col-start-1 col-span-1 row-start-1 row-span-full font-bold">
            Account
          </span>
          <FormLabel className="col-start-2 col-span-1 row-start-1 row-span-3">
            Foto
          </FormLabel>
          <FormLabel className="col-start-2 col-span-1 row-start-4 row-span-1">
            Nama
          </FormLabel>
          <FormLabel className="col-start-2 col-span-1 row-start-5 row-span-1">
            NPS
          </FormLabel>
          <FormLabel className="col-start-2 col-span-1 row-start-6 row-span-1">
            Jenis Kelamin
          </FormLabel>
          <div className="col-start-3 col-span-3 row-start-1 row-span-3 bg-primary-50">
            <div className="flex flex-row gap-10 h-full">
              <div className="w-2/3 h-auto rounded-full bg-primary-100"></div>
              <div className="flex flex-col gap-2">
                <button>
                  <FormLabel>Delete</FormLabel>
                </button>
                <button>
                  <FormLabel className="text-primary-300">Insert</FormLabel>
                </button>
              </div>
            </div>
          </div>
          <div className="col-start-3 col-span-3 row-start-4 row-span-1 bg-primary-50"></div>
          <div className="col-start-3 col-span-3 row-start-5 row-span-1 bg-primary-50"></div>
          <div className="col-start-3 col-span-3 row-start-6 row-span-1 bg-primary-50">
            <Selects
              list={[{ name: "Pria" }, { name: "Wanita" }]}
              size="w-full"
              description="-- Pilih Jenis Kelamin --"
            />
          </div>
          <FormLabel className="col-start-6 col-span-1 row-start-1 row-span-1">
            No.Telp/WA
          </FormLabel>
          <FormLabel className="col-start-6 col-span-1 row-start-2 row-span-1">
            Tempat Lahir
          </FormLabel>
          <FormLabel className="col-start-6 col-span-1 row-start-3 row-span-1">
            Tanggal Lahir
          </FormLabel>
          <FormLabel className="col-start-6 col-span-1 row-start-4 row-span-1">
            Email
          </FormLabel>
          <FormLabel className="col-start-6 col-span-1 row-start-5 row-span-1">
            Level
          </FormLabel>
          <div className="col-start-7 col-span-3 row-start-1 row-span-1 bg-primary-50"></div>
          <div className="col-start-7 col-span-3 row-start-2 row-span-1 bg-primary-50"></div>
          <div className="col-start-7 col-span-3 row-start-3 row-span-1 bg-primary-50"></div>
          <div className="col-start-7 col-span-3 row-start-4 row-span-1 bg-primary-50"></div>
          <div className="col-start-7 col-span-3 row-start-5 row-span-1 bg-primary-50"></div>
        </div>
        <div className="border-b border-neutral-2" />
        <div className="grid grid-cols-9 grid-rows-6 gap-x-7 gap-y-5">
          <span className="col-start-1 col-span-1 row-start-1 row-span-full font-bold">
            Address
          </span>
          <FormLabel className="col-start-2 col-span-1 row-start-1 row-span-2">
            Alamat
          </FormLabel>
          <FormLabel className="col-start-2 col-span-1 row-start-3 row-span-1">
            Kecamatan
          </FormLabel>
          <FormLabel className="col-start-2 col-span-1 row-start-4 row-span-1">
            Kode Pos
          </FormLabel>
          <FormLabel className="col-start-2 col-span-1 row-start-5 row-span-1">
            Kota
          </FormLabel>
          <FormLabel className="col-start-2 col-span-1 row-start-6 row-span-1">
            Provinsi
          </FormLabel>
          <div className="col-start-3 col-span-6 row-start-1 row-span-2 bg-primary-50">
            <TextArea placeholder="Massage" />
          </div>
          <div className="col-start-3 col-span-3 row-start-3 row-span-1 bg-primary-50"></div>
          <div className="col-start-3 col-span-3 row-start-4 row-span-1 bg-primary-50"></div>
          <div className="col-start-3 col-span-3 row-start-5 row-span-1 bg-primary-50"></div>
          <div className="col-start-3 col-span-3 row-start-6 row-span-1 bg-primary-50">
            <InputFields type="text" placeholder="Provinsi" size="w-full" />
          </div>
        </div>
        <div className="border-b border-neutral-2" />
        <div className="flex flex-row justify-end gap-5">
          <Buttons classColor="btn-secondary" size="btn-xs m-0">
            Back
          </Buttons>
          <Buttons classColor="btn-primary" size="btn-xs m-0">
            Update
          </Buttons>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
