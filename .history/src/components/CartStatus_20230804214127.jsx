import React from 'react';
import styles from '../css/CartStatus.module.css';
import { useQuery } from '@tanstack/react-query';
import { getCartData } from '../firebase/Firebase-Auth';

export default function CartStatus() {
  // const {
  //   cartProduct: { data: products },
  // } = useCart();
  const { data: products } = useQuery(['cart'], () => getCartData(user.uid));
  console.log(products);

  return (
    <div className="relative">
      {products && (
        <p clas sName={styles.number}>
          {products.length}
        </p>
      )}
    </div>
  );
}