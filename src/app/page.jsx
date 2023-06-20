import Image from 'next/image';
import Product from '@/components/Product';
import { Comic_Neue } from 'next/font/google';


import paisajeImage from '/public/paisaje.jpg';
import kioskoImage from '/public/kiosko.jpg'
import perfilImage from '/public/perfil.jpg'



const comicNeue = Comic_Neue({ weight: '700', subsets: ['latin'] })

export default function Home() {

  const desiredProduct = {
    image: paisajeImage,
    title: 'Producto deseado',
    description: 'Descripción del producto deseado',
    price: 19.99,
    discount: 10,
    seller: 'Nombre del vendedor',
    rating: 4.5,
    stock: 5,
  };

  return (
    <div className="relative top-4"> {/* Contenedor Total */}
      <div className="relative h-32 flex justify-center items-center overflow-hidden mb-2"> {/* Contenedor De imagen da el Alto */}
        <div className="flex items-center"> {/* Centrador */}
          <Image
            className="w-full"
            src={paisajeImage}
            alt="local image"
            width={1000}
          />
        </div>
        <div className='absolute left-2 bottom-0' > {/* Contenedor del Tecto */}
          <h1 className={comicNeue.className} style={{ fontSize: '40px' }} >Huamantla</h1>
        </div>
      </div>
      <div className='flex flex-wrap' >
        <Product product={desiredProduct} ></Product>
        <Product product={{...desiredProduct, image: kioskoImage}} ></Product>
        <Product product={{...desiredProduct, image: perfilImage}} ></Product>
        <Product product={desiredProduct} ></Product>
        <Product product={{...desiredProduct, image: kioskoImage}} ></Product>
        <Product product={{...desiredProduct, image: perfilImage}} ></Product>
        <Product product={desiredProduct} ></Product>
        <Product product={{...desiredProduct, image: kioskoImage}} ></Product>
        <Product product={{...desiredProduct, image: perfilImage}} ></Product>
      </div>
    </div>
  );
}
