import readlinesync = require("readline-sync");
import { ProdutoController } from "./src/controller/ProdutoController";
import { TipoProduto } from "./src/model/TipoProduto";

export function main(){

    let id, opcao, preco, estoque, categoria : number    
    
    let nome: string;

    const tipoCategoria = ["hardware", "software", "periferico", "componente"];

    const produtoController = new ProdutoController();
    
    while(true){

        console.log("*****************************************************");
        console.log("                E-commerce PC_CORE                   ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar Produtos                      ");
        console.log("            3 - Buscar Produto por ID                ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if(opcao == 6){
            console.log("OBRIGADO POR USAR O SISTEMA");
            sobre();
            process.exit(0)
            
        }

        

        switch (opcao) {
        case 1:
            
            console.log("\nCadastrar  produto");

            id = produtoController.gerarId();
            console.log("Digite o nome do produto: ");
            nome = readlinesync.question("");
            console.log("Digite o preço do produto (R$): ");
            preco = readlinesync.questionFloat("");
            console.log("Digite a quantidade do produto em estoque: ");
            estoque = readlinesync.questionInt("");
            console.log("Digite a categoria do produto: ");
            categoria = readlinesync.keyInSelect(tipoCategoria, "",{cancel: false}) + 1;

            produtoController.cadastrarProduto(new TipoProduto(id, nome, preco, estoque, categoria ));


            keypress()
            break;

        case 2:
            console.log("Listar Produto");
        
            produtoController.listarProdutos();
            console.log();
            
            keypress()
            break;

        case 3:

            console.log("Buscar produto");
            console.log("digite o ID do produto: ");
            id = readlinesync.questionInt("");
            produtoController.buscarPorId(id);
        
            keypress()
            break;


        case 4:
            console.log("Atualizar produto");
    
            console.log("digite o ID do produto: ");
            id = readlinesync.questionInt("");
            
            let produto = produtoController.buscarNoArray(id);

            if(produto != null){
                console.log("Digite o nome do produto: ");
                nome = readlinesync.question("");
                console.log("Digite o preço do produto (R$): ");
                preco = readlinesync.questionFloat("");
                console.log("Digite a quantidade do produto em estoque: ");
                estoque = readlinesync.questionInt("");
                console.log("Digite a categoria do produto: ");
                categoria = readlinesync.keyInSelect(tipoCategoria, "",{cancel: false}) + 1;

                produtoController.atualizarProduto(new TipoProduto(id, nome, preco, estoque, categoria));
            }
            keypress()
            break;


        case 5:

            console.log("Deletar produto");

            console.log("digite o ID do produto: ");
            id = readlinesync.questionInt("");  
            produtoController.deletarProduto(id);
            
            keypress()
            break;
            



        default:
            console.log("Opção inválida!");
            keypress()
            break;
        }
    }


}

export function sobre(): void{
console.log("\n*****************************************************");
console.log("Projeto Desenvolvido por: Matheus Antonio Santos Lins ");
console.log("Generation Brasil - matheusl@genstudents.org");
console.log("https://github.com/Matheus-Lins/projeto-ecommerce-typescript");
console.log("*****************************************************");
}

function keypress(): void {
    console.log("");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
