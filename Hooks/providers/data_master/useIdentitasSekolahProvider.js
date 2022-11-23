import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useBasicProvider } from "../useBasicProvider";

export const useIdentitasSekolahProvider = () => {
  const { notification, setNotification, handleShowNotification } =
    useBasicProvider();

  const router = useRouter();

  const [form, setForm] = useState({
    photo: null,
    name: "",
    NPSN: "",
    NSS: "",
    phone_number: "",
    email: "",
    website: "",
    address: "",
    districts: "",
    city: "",
    postal_code: "",
    province: "",
  });

  const resetForm = () => {
    setForm({
      photo: null,
      name: "",
      NPSN: "",
      NSS: "",
      phone_number: "",
      email: "",
      website: "",
      address: "",
      districts: "",
      city: "",
      postal_code: "",
      province: "",
    });
  };

  const handleSubmitEdit = async () => {
    console.log(form);
    try {
      const res = await axios.post(
        "https://api.starling.kotasatelit.com/api/school-identity/1",
        form
      );
      console.log("success res", res);
      resetForm();
      setNotification({
        show: true,
        type: "Success",
        message: "Edit identitas sekolah success !",
      });
      router.push("/data_master/identitas_sekolah");
    } catch (error) {
      resetForm();
      setNotification({
        show: true,
        type: "Danger",
        message: error,
      });
      router.push("/data_master/identitas_sekolah");
    }
  };

  return {
    form,
    setForm,
    resetForm,
    handleSubmitEdit,
    notification,
    handleShowNotification,
  };
};
