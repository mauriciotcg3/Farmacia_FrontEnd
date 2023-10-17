import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../service/Service';
import CardCategory from '../cardCategoria/CardCategoria';
import { toastAlerta } from '../../../utils/toastAlert';
import ICategory from '../../../models/Categoria';

function ListaCategorias() {
  const [category, setCategory] = useState<ICategory[]>([
    {
        id: 1,
        name: 'Perfumes',
        description: 'Elas estão no topo, ou seja, são as primeiras notas que sentimos ao cheirar um perfume e representam cerca de 10% a 20% da composição'
    },
    {
        id: 2,
        name: 'Comprimidos',
        description: 'são formas farmacêuticas sólidas que possuem formato bastante variável geralmente obtidas pela compressão, em equipamento específico, do(s) fármaco(s) e de adjuvantes (excipientes) adequados.'   
    },
    {
        id: 3,
        name: 'Maquiagem',
        description: 'consiste na aplicação de produtos com efeito cosmético, de embelezamento, ou disfarce, seguindo-se alguns casos os ditames da moda e com uso de substâncias especificamente destinadas a tal fim.'   
    }
])

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = "s";

  async function buscarCategory() {
    try {
      await buscar('/category', setCategory, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if(error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  return (
    <>
      {category.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.map((category) => (
              <>
                <CardCategory key={category.id} category={category} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;