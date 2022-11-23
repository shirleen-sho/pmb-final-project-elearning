import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useBasicProvider } from "../useBasicProvider";

export const useRuanganProvider = () => {
  const { notification, setNotification, handleShowNotification } =
    useBasicProvider();

  const router = useRouter();

  const [form, setForm] = useState({
    room_code: "",
    room_name: "",
    maximum_people: 0,
    status: 1,
    building_id: "",
  });

  const resetForm = () => {
    setForm({
      room_code: "",
      room_name: "",
      maximum_people: 0,
      status: 1,
      building_id: "",
    });
  };

  const handleSubmitAdd = async () => {
    try {
      const res = await axios.post(
        "https://api.starling.kotasatelit.com/api/room",
        form
      );
      console.log("success res", res);
      resetForm();
      setNotification({
        show: true,
        type: "Success",
        message: res.data.messages[0],
      });
      router.push("/data_master/ruangan");
    } catch (error) {
      resetForm();
      setNotification({
        show: true,
        type: "Danger",
        message: error,
      });
      router.push("/data_master/ruangan");
    }
  };

  const handleSubmitEdit = async () => {
    try {
      const res = await axios.post(
        `https://api.starling.kotasatelit.com/api/room/${form.room_code}`,
        form
      );
      console.log("success res", res);
      resetForm();
      setNotification({
        show: true,
        type: "Success",
        message: "Edit data success !",
      });
      router.push("/data_master/ruangan");
    } catch (error) {
      resetForm();
      setNotification({
        show: true,
        type: "Danger",
        message: error,
      });
      router.push("/data_master/ruangan");
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
