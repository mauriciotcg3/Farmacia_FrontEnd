import React from 'react';
import './Home.css';
import pessoasImagem from '../../assets/pessoasFarmacia.png';
import ListaCategorias from '../../components/categoria/listCategoria/ListCategoria';

function Home() {
    return (
        <>
        <div className="bg-purple-300 flex justify-center">
          <div className='container grid grid-cols-2 text-black'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Welcome!</h2>
              <p className='text-xl'>Aqui você encontra Medicamentos e Cosméticos!</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-purple-700 text-white py-2 px-4'>Cadastrar Produtos</button>
              </div>
            </div>
            <div>
                <img src={pessoasImagem} alt="" className='w-2/4'/>
            </div>
          </div>
        </div>
        {<ListaCategorias />}
        </>
    );
}

export default Home;