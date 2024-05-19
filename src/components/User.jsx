import React from 'react';
import styles from '../CSS/User.module.css';

const User = ({ user, setEmail, handleDonate, setAmount, setName }) => {
  function handleClick() {
    setEmail(user.email);
    setName(user.name);
    console.log(user.email);
  }
  return (
    <div className={styles.par}>
      <div onClick={handleClick}>{user.name} : {user.email}</div>
      <div>
        <input type="text" name="" id="" placeholder='Enter the amount' onChange={(e) => { setAmount(e.target.value) }} />
        <button className={styles.but} onClick={handleDonate}>
          Donation
        </button>
      </div>
    </div>
  )
}

export default User
