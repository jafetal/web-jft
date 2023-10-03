import Image from "next/image";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div><h1 className="hola-text">Hola</h1></div>
        <p className="buenas-text">Buenas tardes</p>
        <div className='flex justify-center mt-5'>
          <Image className="rounded-3xl" src="/don-cangrejo.jpg" alt='cangrejo' width={150} height={100}></Image>
        </div>
      </div>
    </div>
  )
}