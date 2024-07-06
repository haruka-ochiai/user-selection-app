import Gacha from './components/Gacha'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-4xl font-bold mb-8'>User Selection App</h1>
      <Gacha />
    </div>
  );
}
