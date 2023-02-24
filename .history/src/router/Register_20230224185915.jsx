import React, { useState } from 'react';
import { registerUser } from '../firebase/Firebase-Auth';
import styles from '../css/Register.module.css';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate()
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  // 회원가입
  const registerAccount = () => {
    const result = window.confirm('가입하시겠습니까?');
    result && registerUser(account.email, account.password);
  };

  const goToHome = () => {
    navigate('/')
  }
  console.log(`이메일 : ${account.email}`);
  console.log(`비밀번호 : ${account.password}`);
  return (
    <main className={styles.main}>
      <div className={styles.email}>
        <span>이메일</span>
        <input type="text" name="email" onChange={onChangeAccount} />
      </div>
      <div className={styles.password}>
        <span>비밀번호</span>
        <input type="password" name="password" onChange={onChangeAccount} />
      </div>
      <div className={styles.btns}>
        <button onClick={registerAccount} className={styles.registerBtn}>
          가입
        </button>
        <button className={styles.homeBtn} onClick={}>메인으로</button>
        <button className={styles.cancelBtn}>취소</button>
      </div>
    </main>
  );
}
