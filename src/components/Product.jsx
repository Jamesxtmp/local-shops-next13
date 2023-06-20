import Image from "next/image";

export default function Product({ product }) {
  return (
    <div className="p-2  w-1/2">
      <div className=" bg-zinc-900 rounded-lg overflow-hidden p-2">
        <div className="overflow-hidden flex items-center" >
          <Image
            src={product.image}
            width={1000}
            alt="image"
          ></Image>
        </div>
        <h2>{product.title}</h2>
        <div className="text-sm text-slate-400 " >Descripcion del Producto desedo</div>
        <div className="flex items-end" >
          <div className="font-bold" >$19.99 &nbsp;</div>
          <div className="line-through text-xs text-slate-400">$19.97 </div>
        </div>
        <div className="flex justify-between" >
          <div className="text-xs font-bold " >Nombre vendedor</div>
          <div className="flex items-center ">
            <div className="text-xs font-bold" >4.5</div>
            <span className="material-icons-outlined " style={{ fontSize: '10px' }}>star</span>
          </div>
        </div>

      </div>
    </div>
  );
}
