import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Products() {
  const { user } = useContext(UserContext);

  return (
    <>
      <p>{user}</p>
      <div>모든 제품</div>
    </>
  );
}