'use client'

import Gacha from './components/Gacha'
import { useState } from "react"

export default function Home() {
  const [showUser, setShowUser] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
       {showUser && !isSpinning && (
      <h1 className='text-4xl font-bold mb-8'>User Selection App</h1>
      )}
      <Gacha />
    </div>
  );
}
