import React from 'react'
import { Link } from 'react-router-dom';
import logoFarmacia from '../../assets/logo_farmacia.png';

function Navbar() {
 
  

  return (
    <>
        <div className='w-full bg-purple-700 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>
                <img src={logoFarmacia} alt="" className='w-2/3'/>
            </div>
            
            <div className='flex gap-4'>
              <Link to='/' className='hover:underline text-white'>Home</Link>
              <Link  to='/categories' className='hover:underline text-white'>Categorias</Link>
              <Link to='/cadastroCategory' className='hover:underline text-white'>Cadastrar Categoria</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar