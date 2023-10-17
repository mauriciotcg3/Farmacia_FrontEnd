import React from 'react';
import './Home.css';
import pessoasImagem from '../../assets/pessoasFarmacia.png';
import remedioOne from '../../assets/remedio1.png';

function Home() {
    return (
        <>
        <div className="bg-cyan-300 flex justify-center">
          <div className='container grid grid-cols-2 text-black'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Aqui você encontra Medicamentos e Cosméticos!</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Cadastrar Produtos</button>
              </div>
            </div>
            <div>
                <img src={pessoasImagem} alt="" className='w-2/4'/>
            </div>
          </div>
        </div>
        
        </>
    );
}

export default Home;