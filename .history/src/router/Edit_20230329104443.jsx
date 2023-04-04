import React, { useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { uploadImage } from '../api/imageUpload';

export default function Edit() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'momo0170',
    },
  });
  const handleChange = (e) => {
    setFile(e.target.files);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file).then(console.log(result));
    // firebase 데이터베이스에 저장
  };
  console.log(product);
  console.log(file);
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          {file && <img src={URL.createObjectURL(file[0])} alt="image" />}
          <input
            name="file"
            type="file"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input name="제품명" type="text" placeholder="제품명" required />
          <input name="가격" type="text" placeholder="가격" required />
          <input name="카테고리" type="text" placeholder="카테고리" required />
          <input name="제품설명" type="text" placeholder="제품 설명" required />
          <input name="옵션" type="text" placeholder="옵션" required />
          <div>
            <button>등록</button>
            <button>메인으로</button>
          </div>
        </div>
      </form>
    </main>
  );
}