'use client'

import { useState } from "react";
import { motion } from 'framer-motion';
import users from "../data/users";

const Gacha = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [isSpinning, setIsSpinning ] = useState(false);

    const spinWheel= () => {
        setIsSpinning(true);
        const randomUser = users[Math.floor(Math.random() * users.length)];
        setTimeout(() => {
            setSelectedUser(randomUser);
            setIsSpinning(false);
        }, 5000);
    }

    return (
        <div>
            <motion.div
                animate = {{ rotate: isSpinning ? 360 : 0}}
                transition = {{ duration: 3, ease: "easeInOut" }}
            >
            <div className="Wheel">
                {users.map((user) => (
                    <div key = {user.id}>{user.name}</div>
                ))}
            </div>
            </motion.div>
            <button onClick = { spinWheel }>ルーレットを回す</button>
            {selectedUser && <p>選ばれしユーザー：{selectedUser.name}</p>}
        </div>
    )
}

export default Gacha