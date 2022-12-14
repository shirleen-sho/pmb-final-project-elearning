import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useBasicProvider } from "../useBasicProvider";

export const useTingkatanProvider = () => {
  const { notification, setNotification, handleShowNotification } =
    useBasicProvider();

  const router = useRouter();

  const [form, setForm] = useState({
    class_code: null,
    class_name: "",
  });

  const resetForm = () => {
    setForm({
      class_code: null,
      class_name: "",
    });
  };

  const handleSubmitAdd = async () => {
    try {
      const res = await axios.post(
        "https://api.starling.kotasatelit.com/api/class",
        form
      );
      console.log("success res", res);
      resetForm();
      setNotification({
        show: true,
        type: "Success",
        message: res.data.messages[0],
      });
      router.push("/data_master/tingkatan");
    } catch (error) {
      resetForm();
      setNotification({
        show: true,
        type: "Danger",
        message: error,
      });
      router.push("/data_master/tingkatan");
    }
  };

  const handleSubmitEdit = async () => {
    try {
      const res = await axios.post(
        `https://api.starling.kotasatelit.com/api/class/${form.class_code}`,
        form
      );
      console.log("success res", res);
      resetForm();
      setNotification({
        show: true,
        type: "Success",
        message: "Edit data success !",
      });
      router.push("/data_master/tingkatan");
    } catch (error) {
      resetForm();
      setNotification({
        show: true,
        type: "Danger",
        message: error,
      });
      router.push("/data_master/tingkatan");
    }
  };

  return {
    form,
    setForm,
    resetForm,
    handleSubmitAdd,
    handleSubmitEdit,
    notification,
    handleShowNotification,
  };
};
