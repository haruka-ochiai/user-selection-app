'use client'

import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import users from "../data/users";

const Gacha = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [isSpinning, setIsSpinning ] = useState(false);
    const [showUser, setShowUser] = useState(false);

    const spinWheel= () => {
        setIsSpinning(true);
        const randomUser = users[Math.floor(Math.random() * users.length)];
        setTimeout(() => {
            setSelectedUser(randomUser);
            setIsSpinning(false);
            setShowUser(true);
        }, 3000);
    }

    return (
        <div className="flex flex-col items-center">
            <motion.div
                animate = {{ rotate: isSpinning ? 360 : 0}}
                transition = {{ duration: 3, ease: "easeInOut" }}
            >
                {!selectedUser && (
                     <div className="Wheel grid grid-cols-5 gap-2 p-4 border-2 border-gray-400 rounded-lg">
                     {users.map((user) => (
                         <div key = {user.id} className="p-2 border-2 border-gray-300 rounded">
                            {user.name}
                        </div>
                     ))}
                 </div>
                )}
            </motion.div>
            {!isSpinning && !showUser && (
                <button onClick = { spinWheel } className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    ルーレットを回す
                </button>
            )}
            <AnimatePresence>
            {showUser && !isSpinning && (
                <motion.div
                 initial= {{ opacity: 0 }}
                 animate= {{ opacity: 1}}
                 exit = {{ opacity: 0}}
                 transition = {{ duration: 10 }}
                 className="mt-4 text-xl"
                 >
                    選ばれしユーザー：{selectedUser.name}
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    )
}

export default Gacha