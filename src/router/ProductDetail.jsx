import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/ProductDetail.module.css';
export default function ProductDetail() {
  const location = useLocation();
  const { category, description, id, image, name, option, price } =
    location.state;

  return (
    <main className={styles.main}>
      <div className={styles.frame}>
        <img src={image} alt="product-image" className={styles.image} />
        <section className={styles.information}>
          <div className={styles.category}>[{category}]</div>
          <div className={styles.name}>{name}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.price}>{price.toLocaleString()}원</div>
          <div>
            <select name="options" id="size-select">
              {option.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <button className={styles.addBtn}>장바구니에 추가</button>
          </div>
        </section>
      </div>
    </main>
  );
}
