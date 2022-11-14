import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export const useTahunAkademikProvider = () => {
  const router = useRouter();
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });

  const [form, setForm] = useState({
    year_code: "",
    year_name: "",
    semester: null,
    status: 1,
  });

  const resetForm = () => {
    setForm({
      year_code: "",
      year_name: "",
      semester: null,
      status: 1,
    });
  };

  const handleSubmitAdd = async () => {
    try {
      const res = await axios.post(
        "https://api.starling.kotasatelit.com/api/academic-year",
        form
      );
      console.log("success res", res);
      resetForm();
      setNotification({
        show: true,
        type: "Success",
        message: res.data.messages[0],
      });
      router.push("/data_master/tahun_akademik");
    } catch (error) {
      resetForm();
      setNotification({
        show: true,
        type: "Danger",
        message: error,
      });
      router.push("/data_master/tahun_akademik");
    }
  };

  const handleSubmitEdit = async () => {
    try {
      const res = await axios.post(
        `https://api.starling.kotasatelit.com/api/academic-year/${form.year_code}`,
        form
      );
      console.log("success res", res);
      resetForm();
      setNotification({
        show: true,
        type: "Success",
        message: "Edit data success !",
      });
      router.push("/data_master/tahun_akademik");
    } catch (error) {
      resetForm();
      setNotification({
        show: true,
        type: "Danger",
        message: error,
      });
      router.push("/data_master/tahun_akademik");
    }
  };

  return {
    form,
    setForm,
    resetForm,
    handleSubmitAdd,
    handleSubmitEdit,
    notification,
    setNotification,
  };
};
