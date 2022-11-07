import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { HiUpload } from "react-icons/hi";
import Image from "next/image";

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleChangeImage = (currentImage, addUpdateIndex) => {
    console.log("image", currentImage);
    console.log("addUpdateIndex", addUpdateIndex);
    setImage(currentImage);
  };

  return (
    <div className="w-full h-20">
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
            <div className="flex flex-row gap-8 w-full h-full">
              {imageList.length === 0 ? (
                <button
                  className={`w-20 h-full rounded-full border shadow-md flex justify-center items-center ${classBtn}`}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <HiUpload size={20} />
                </button>
              ) : (
                imageList.map((image, index) => (
                  <div className="w-20 h-full relative" key={"image" + index}>
                    <Image
                      src={image["data_url"]}
                      alt="image"
                      key={"image" + index}
                      className="object-cover rounded-full shadow-lg"
                      fill
                    />
                  </div>
                ))
              )}
              <div className="flex flex-row gap-5 items-center">
                <button
                  onClick={() => onImageUpdate(0)}
                  className="text-sm text-primary-400 font-semibold"
                >
                  {imageList.length === 0 ? "Upload" : "Change"}
                </button>
                <button
                  onClick={() => onImageRemove(0)}
                  className="text-sm text-red-400 font-semibold disabled:text-gray-300"
                  disabled={imageList.length === 0 ? true : false}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        }}
      </ImageUploading>
    </div>
  );
};

export default ImageUploader;
