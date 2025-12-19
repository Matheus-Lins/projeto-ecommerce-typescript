import { Produto } from "./Produto";

export class ProdutoCategoria extends Produto {

    private _categoria: string;

    constructor(id: number, nome: string, preco: number, 
        estoque: number, categoria: string) {
        super(id, nome, preco, estoque);
        this._categoria = categoria;
    }

    public get categoria() {
        return this._categoria;
    }
    public set categoria(categoria: string) {
        this._categoria = categoria;

    }

    public visualizar(): void {
        super.visualizar();
        console.log("Categoria do hardware: " + this._categoria);

    }

}