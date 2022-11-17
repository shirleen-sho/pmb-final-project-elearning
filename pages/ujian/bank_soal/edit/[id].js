import { useRouter } from "next/router";
import React from "react";
import Button from "../../../../Components/Buttons";
import FormItem from "../../../../Components/FormItem";
import InputFields from "../../../../Components/InputFields";
import Layout from "../../../../Components/Layout";
import Selects from "../../../../Components/Selects";
import Tabs from "../../../../Components/Tabs";

const EditBankSoal = () => {
  const router = useRouter();
  const { id } = router.query;

  const pilihan_dummy = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" },
  ];

  const tabList = [
    { id: 1, name: "Data Soal", tab: `/data_soal/${id}` },
    { id: 2, name: "Edit", tab: `/edit/${id}` },
  ];

  return (
    <Layout>
      <Tabs list={tabList} pathName="/ujian/bank_soal">
        <div className="flex flex-col gap-10 border border-gray-200 bg-white rounded-xl p-6 shadow-md w-full px-6 py-8 mt-2">
          <div className="flex flex-col gap-8">
            {/* judul */}
            <div className="flex flex-row justify-between pb-7 border-b border-gray-200">
              <div className="text-sm font-semibold">
                Edit Soal *nama bank soal*
              </div>
            </div>
            <div className="grid grid-cols-3 gap-x-10">
              {/* Mata Pelajaran */}
              <div className="col-span-2">
                <FormItem
                  label="Mata Pelajaran"
                  labelType="label-sm"
                  formDirection="col"
                >
                  <Selects
                    list={pilihan_dummy}
                    size="w-full"
                    description="Pilih mata pelajaran"
                  />
                </FormItem>
              </div>
              {/* KKM */}
              <FormItem label="KKM" labelType="label-sm" formDirection="col">
                <InputFields
                  type="number"
                  placeholder="Tulis KKM"
                  size="w-full"
                />
              </FormItem>
            </div>

            {/* Soal Pilihan Ganda */}
            <div className="flex flex-col gap-5">
              <div className="text-xs font-bold">Soal Pilihan Ganda (PG)</div>
              <div className="grid grid-cols-3 gap-x-10">
                <div>
                  <FormItem
                    label="Jumlah Soal PG"
                    labelType="label-sm"
                    formDirection="col"
                  >
                    <InputFields
                      type="number"
                      placeholder="Jumlah Soal PG"
                      size="w-full"
                    />
                  </FormItem>
                </div>
                <div>
                  <FormItem
                    label="Bobot Soal (%)"
                    labelType="label-sm"
                    formDirection="col"
                  >
                    <InputFields
                      type="number"
                      placeholder="Bobot Soal"
                      size="w-full"
                    />
                  </FormItem>
                </div>
                <div>
                  <FormItem
                    label="Opsi PG Default"
                    labelType="label-sm"
                    formDirection="col"
                  >
                    <Selects
                      list={pilihan_dummy}
                      size="w-full"
                      description="Pilih opsi"
                    />
                  </FormItem>
                </div>
              </div>
            </div>

            {/* Soal Essai / Uraian */}
            <div className="flex flex-col gap-5">
              <div className="text-xs font-bold">Soal Essai atau Uraian</div>
              <div className="grid grid-cols-3 gap-x-10">
                <div>
                  <FormItem
                    label="Jumlah Soal Essai"
                    labelType="label-sm"
                    formDirection="col"
                  >
                    <InputFields
                      type="number"
                      placeholder="Jumlah Soal Essai"
                      size="w-full"
                    />
                  </FormItem>
                </div>
                <div>
                  <FormItem
                    label="Bobot Soal (%)"
                    labelType="label-sm"
                    formDirection="col"
                  >
                    <InputFields
                      type="number"
                      placeholder="Bobot Soal"
                      size="w-full"
                    />
                  </FormItem>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end gap-5">
            <Button type="primary">Update</Button>
          </div>
        </div>
      </Tabs>
    </Layout>
  );
};

export default EditBankSoal;
