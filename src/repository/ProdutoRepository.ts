import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    cadastrarProduto(produto: Produto): void;
    listarProdutos(): void;
    buscarPorId(id: number): void;
    atualizarProduto(produto: Produto): void;
    deletarProduto(id: number): void;
    


}
