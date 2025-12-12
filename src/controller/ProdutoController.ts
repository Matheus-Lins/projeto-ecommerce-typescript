import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();
    numero: number = 100;

    cadastrarProduto(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\nO produto: '" + produto.nome + " foi cadastrado com sucesso!",);
    }

    listarProdutos(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }
    buscarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            buscaProduto.visualizar();
        } else {
            console.log("\nO produto de ID: " + id + " não foi encontrado!",);
        }
    }
    atualizarProduto(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;

            console.log("\nO produto de ID: " + produto.id + " foi atualizado com sucesso!");

        } else {
            console.log("\nO produto de ID: " + produto.id + " não foi encontrado!");
        }
    }
    deletarProduto(id: number): void {
        let produto = this.buscarNoArray(id);

        if (produto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(produto), 1);
            console.log("\nO produto de ID " + id + " foi removido com sucesso!");
        } else {
            console.log("\nO produto de ID " + id + " não foi encontrado!",);
        }
    }

    public gerarNumero(): number {
        return ++this.numero;
    }

    public gerarId(): number {
    return ++this.numero;
    }


    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id)
                return produto;
        }

        return null;
    }
}

