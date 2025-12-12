import readlinesync = require("readline-sync");



export function main(){

    let opcao: number      
    
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
            console.log("Criar produto");
            // função de criar produto
            keypress()
            break;

        case 2:
            console.log("Listar Produto");
            // função de listagem
            keypress()
            break;

        case 3:
            console.log("Atualizar produto");
            // função de atualização
            keypress()
            break;

        case 4:
            console.log("Deletar produto");
            // função de exclusão
            keypress()
            break;

        case 5:
            console.log("Buscar produto");
            // função de busca
            keypress()
            break;

        default:
            console.log("pção inválida!");
            keypress()
        }
    }


}

export function sobre(): void{
console.log("\n*****************************************************");
console.log("Projeto Desenvolvido por: Matheus Antonio Santos Lins ");
console.log("Generation Brasil - matheusl@genstudents.org");
console.log("https://github.com/Matheus-Lins/Projeto-JavaScript");
console.log("*****************************************************");
}

function keypress(): void {
    console.log("");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();




