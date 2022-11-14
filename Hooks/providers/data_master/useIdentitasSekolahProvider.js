import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export const useIdentitasSekolahProvider = () => {
  const router = useRouter();
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });

  const [form, setForm] = useState({
    photo: "",
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
      photo: "",
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
    setNotification,
  };
};
