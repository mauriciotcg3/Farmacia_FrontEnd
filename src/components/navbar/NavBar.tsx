import React from 'react'
import logoFarmacia from '../../assets/logo_faramcia.png';

function Navbar() {
 
  

  return (
    <>
        <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>
                <img src={logoFarmacia} alt="" />
            </div>
            
            <div className='flex gap-4'>
              <div className='hover:underline'>Categorias</div>
              <div className='hover:underline'>Cadastrar Categorias</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar