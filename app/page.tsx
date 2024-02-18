import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center p-24">
        <h1 className="text-center text-6xl">Hola mundo</h1>
      </main>
      <div className='text-center'>
        <Link href={'/about'}>Ver a las paginas</Link>
      </div>
    </>
  );
}
