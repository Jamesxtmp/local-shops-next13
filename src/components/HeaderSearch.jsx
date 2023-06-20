import Image from 'next/image';
import perfilImage from "/public/perfil.jpg"

export default function HeaderSearch() {
    return (
      <>
      <div className='h-12'></div>
        <div className="fixed top-0 left-2 right-0 z-10 py-3 flex justify-between items-center">
          <div className="w-3/12 flex justify-around items-center bg-zinc-800 rounded-2xl py-1" >
            <span className="material-icons-outlined"
              style={{ fontSize: '24px' }}>
              menu
            </span>
            <Image className="rounded-full"
              src={perfilImage}
              alt="Perfil"
              width={30}
              height={30}
            ></Image>
          </div>
          <div className="w-9/12 px-5" >
            <input className="w-full px-4 py-1 rounded-lg bg-zinc-800 outline-0"
              type="serch"
              placeholder="Bucar..."
            />
          </div>
        </div>
      </>
      );
}
