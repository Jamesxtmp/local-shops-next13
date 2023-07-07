import Product from '@/components/Product';
import kioskoImage from '/public/kiosko.jpg'
import perfilImage from '/public/perfil.jpg'
import paisajeImage from '/public/paisaje.jpg';
import LocationSelector from './LocationSelector';

export default function ProductsWrapp() {

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
        <div className="relative top-4">
            <LocationSelector />
            <div className="grid grid-cols-2 gap-4 p-4">
                <Product product={desiredProduct}></Product>
                <Product product={{ ...desiredProduct, image: kioskoImage }}></Product>
                <Product product={{ ...desiredProduct, image: perfilImage }}></Product>
                <Product product={desiredProduct}></Product>
                <Product product={{ ...desiredProduct, image: kioskoImage }}></Product>
                <Product product={{ ...desiredProduct, image: perfilImage }}></Product>
                <Product product={desiredProduct}></Product>
                <Product product={{ ...desiredProduct, image: kioskoImage }}></Product>
                <Product product={{ ...desiredProduct, image: perfilImage }}></Product>
            </div>
        </div>

    )
}
