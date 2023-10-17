import Produto from "./Produto";

export default interface Categoria {
    id: number,
    name: string,
    description: string,
    produto?: Produto | null
}