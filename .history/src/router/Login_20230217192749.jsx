import React from 'react';
import styles from '../css/Login.module.css';

export default function Login() {
  return (
    <main>
      <div className={styles.logo}>Shoppy</div>
      <div className={styles.frame}>
        <form className={styles.loginForm}>
          <input type="text" className={styles.id} placeholder="이메일" />
          <input
            type="text"
            className={styles.password}
            placeholder="비밀번호"
            onfocus="this.placeholder = ''"
          />
          <button className={styles.loginBtn}>로그인</button>
        </form>
        <button className={styles.googleLoginBtn}>구글로 로그인</button>
        <div>
          <button className={styles.register}>회원가입</button>
        </div>
      </div>
    </main>
  );
}