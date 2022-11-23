import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useBasicProvider } from "../useBasicProvider";

export const useGedungProvider = () => {
  const { notification, setNotification, handleShowNotification } =
    useBasicProvider();

  const router = useRouter();

  const [form, setForm] = useState({
    building_code: "",
    name: "",
    number_of_floors: 0,
    long: 0,
    tall: 0,
    wide: 0,
    status: 1,
  });

  const resetForm = () => {
    setForm({
      building_code: "",
      name: "",
      number_of_floors: 0,
      long: 0,
      tall: 0,
      wide: 0,
      status: 1,
    });
  };

  const handleSubmitAdd = async () => {
    try {
      const res = await axios.post(
        "https://api.starling.kotasatelit.com/api/building",
        form
      );
      console.log("success res", res);
      resetForm();
      setNotification({
        show: true,
        type: "Success",
        message: res.data.messages[0],
      });
      router.push("/data_master/gedung");
    } catch (error) {
      resetForm();
      setNotification({
        show: true,
        type: "Danger",
        message: error,
      });
      router.push("/data_master/gedung");
    }
  };

  const handleSubmitEdit = async () => {
    try {
      const res = await axios.post(
        `https://api.starling.kotasatelit.com/api/building/${form.building_code}`,
        form
      );
      console.log("success res", res);
      resetForm();
      setNotification({
        show: true,
        type: "Success",
        message: "Edit data success !",
      });
      router.push("/data_master/gedung");
    } catch (error) {
      resetForm();
      setNotification({
        show: true,
        type: "Danger",
        message: error,
      });
      router.push("/data_master/gedung");
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
