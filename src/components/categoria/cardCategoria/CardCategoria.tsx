import { Link } from 'react-router-dom'
import ICategory from '../../../models/Categoria'

interface CardCategoryProps {
  category: ICategory
}

function CardCategory({category}: CardCategoryProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-purple-700 text-white font-bold text-2xl'>{category.name}</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{category.description}</p>
      <div className="flex">
        <Link to={`/editarCategory/${category.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategory/${category.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategory