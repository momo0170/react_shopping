import React, { useContext } from 'react';
import styles from '../css/CartStatus.module.css';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  // const { data: products } = useQuery(['cart'], () => getCartData(user.uid));
  const {
    cartProduct: { data: products },
  } = useCart();

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