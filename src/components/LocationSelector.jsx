import Image from 'next/image';
import paisajeImage from '/public/paisaje.jpg';
import { Comic_Neue } from 'next/font/google';


const comicNeue = Comic_Neue({ weight: '700', subsets: ['latin'] })

export default function LocationSelector() {
    return (
        <div className="relative h-32 flex justify-center items-center overflow-hidden mb-2"> {/* Da alto a la imagen */}
            <div className="flex items-center"> {/* Centrador Vertical */}
                <Image
                    className="w-full"
                    src={paisajeImage}
                    alt="local image"
                    width={1000}
                />
            </div>
            <div className='absolute left-2 bottom-0' > {/* Posicion del Texto */}
                <h1 className={comicNeue.className} style={{ fontSize: '40px' }} >Huamantla</h1>
            </div>
        </div>
  )
}