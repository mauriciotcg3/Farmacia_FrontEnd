import Categoria from "./Categoria"
import Usuario from "./Usuario"

export default interface IProduct {
    id: number,
    nome: string,
    tipo: string,
    valor: number,
    categoria: Categoria | null
    usuario: Usuario | null
}