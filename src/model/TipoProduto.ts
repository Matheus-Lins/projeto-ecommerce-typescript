import { Produto } from "./Produto";

export class TipoProduto extends Produto {

    private _categoria: number;

    constructor(id: number, nome: string, preco: number, 
        estoque: number, categoria: number) {
        super(id, nome, preco, estoque);
        this._categoria = categoria;
    }

    public get categoria() {
        return this._categoria;
    }
    public set categoria(categoria: number) {
        this._categoria = categoria;

    }

    public visualizar(): void {
        super.visualizar();
        console.log("Categoria do produto: "+ this.categoria);

    }

}