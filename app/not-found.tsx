import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
            <h1 className="text-7xl font-bold text-gray-800">404</h1>
            <p className="text-2xl text-gray-600">Página no encontrada</p>
            <div className='flex justify-center'>
              <Image src="/not-found.webp" alt='404' width={150} height={100}></Image>
            </div>
        </div>
    </div>
  )
}