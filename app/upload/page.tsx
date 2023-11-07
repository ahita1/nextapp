'use client'
import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadPage = () => {
  return (
    <CldUploadWidget onUpload={(result , widget) => {console.log(result);
    }} uploadPreset="ar5zxkvm">
      {({ open }) => <button onClick  = {() => open()} className="btn btn-primary"> Upload</button>}
    </CldUploadWidget>
  );
};
export default UploadPage;
