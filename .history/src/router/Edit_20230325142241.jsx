import React, { useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';

export default function Edit() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    option: '',
    image: '',
  });

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'momo0170',
    },
  });
  console.log(product);
  return (
    <main>
      <div>
        <img src="" alt="image" />
        <input type="file" onChange={(e) => console.log(e)} />
      </div>
      <div>
        <input type="text" placeholder="제품명" />
        <input type="text" placeholder="가격" />
        <input type="text" placeholder="카테고리" />
        <input type="text" placeholder="제품 설명" />
        <input type="text" placeholder="옵션" />
        <div>
          <button>등록</button>
          <button>메인으로</button>
        </div>
      </div>
    </main>
  );
}