'use client'
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface Cloudinary {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      { publicId && <CldImage src={ publicId } height={270} width={180} alt="Ahita's short photo haha" />}
      <CldUploadWidget
        options={{
          sources: [
            "local"],
          multiple: false,
          maxFiles : 5
        }}
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as Cloudinary;
          setPublicId(info.public_id);
        }}
        uploadPreset="ar5zxkvm"
      >
        {({ open }) => (
          <button onClick={() => open()} className="btn btn-primary">
            {" "}
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};
export default UploadPage;
