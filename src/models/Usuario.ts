import Produto from "./Produto";

export default interface IUser {
    id: number,
    nome: string,
    email: string,
    senha: string,
    produto: Produto | null
}