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
      <div>
      { publicId && <CldImage src={ publicId } fill className="object-cover" alt="Ahita's short photo haha" />}
     </div>
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
