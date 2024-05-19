import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import User from './User';
import styles from '../CSS/Home.module.css';

const Home = () => {
    const [amount, setAmount] = useState(0);
    const [email, setEmail] = useState('s@gmail.com');
    const [name, setName] = useState('sk');
    const users = [{name : 'Shiva', email : 'shivansut6007@gmail.com'}, 
    {name : 'Jolly', email : 'jollyheisenberg9@freethecookies.com'}, 
    {name : 'Aman', email : 's3@gmail.com'},
    {name : 'Ram', email : 's4@gmail.com'},
]
    const handleDonate = async (e) => {
        console.log(amount);
        const { data: { key } } = await axios.get('http://localhost:80/api/getkey')
        const { data: { order } } = await axios.post('http://localhost:80/api/checkout', {
            amount,
            email
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "TSF intern",
            description: "",
            order_id: order.id,
            callback_url: "http://localhost:80/api/paymentverification",
            prefill: {
                name: name,
                email: email,
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }
        return (
            <>
            <header className={styles.head}>
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
            </header>
                <div className={styles.par}>
                {
                    users.map(user => <User key={user.email} setName={setName} setAmount={setAmount} handleDonate={handleDonate} setEmail={setEmail} user={user} />)
                }
                </div>

            <footer className={styles.foot}>
            <div>
            <img className={styles.img} src="https://cdn.pixabay.com/photo/2021/02/08/15/34/social-media-5995251_1280.png" alt="" />
            </div> 
            </footer>
                
            </>
        )

    }

    export default Home;
