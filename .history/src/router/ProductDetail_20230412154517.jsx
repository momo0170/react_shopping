import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/ProductDetail.module.css';
export default function ProductDetail() {
  const location = useLocation();
  const { category, description, id, image, name, option, price } =
    location.state;
  const [selected, setSelected] = useState(option[0]);
  const handleChange = (e) => {
    setSelected(e.target.value);
  };
  console.log(selected);
  return (
    <main className={styles.main}>
      <img src={image} alt="product-image" />
      <section className={styles.information}>
        <div>{category}</div>
        <div>{name}</div>
        <div>{description}</div>
        <div>{price}</div>
        <select name="options" id="size-select" onChange={handleChange}>
          {option.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <button>장바구니에 추가</button>
      </section>
    </main>
  );
}
