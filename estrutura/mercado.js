const Fila = (_saidaFila) => {
    let dados = [];
    let saidaFila = _saidaFila;
    const enfileirar = valor => {
        dados.push(valor);
        imprimir();
    }
    const tamanhoFila = () => dados.length;
    const filaVazia = () => dados.length < 1;
    const desenfileirar = () => {
        let retirado = null;
        if (!filaVazia()){
            retirado = dados[0];
            dados.splice(0,1);
            imprimir();
        }
        return retirado;
    }
    const imprimir = () => {
        let dadosSaida = "";
        for(let i=0; i < tamanhoFila(); i++){
            dadosSaida += "["+dados[i].id + "("+dados[i].itens+")] ";
        }
        document.getElementById(saidaFila).innerHTML = dadosSaida;
    }
    return {enfileirar,desenfileirar}
}

    const f1 = Fila("saidaFila1");
    const gerarItens = () => Math.floor(Math.random() * (15 - 3) + 2);
    const Cliente = (_id,_itens) =>{
        return {
            id:_id,
            itens:_itens
        }
    }
    const caixa1ChamaProximo = () =>{
        let cliente = f1.desenfileirar();
        let tempo = 200;
        if(cliente){
            document.getElementById("C1").innerHTML = "["+cliente.id + "("+cliente.itens+")]";
            tempo = cliente.itens * 100;
            setTimeout(function(){
                caixa1ChamaProximo();
            },tempo);
        }else{
            document.getElementById("C1").innerHTML = "aguardando..."
            if(ClienteParaAtender > 0){
                setInterval(function(){
                    caixa1ChamaProximo();
                },gerarItens()*50);
            }else{
                document.getElementById("C1").innerHTML = "fechado"
            }
        }
    }
    const caixa2ChamaProximo = () =>{
        let cliente = f1.desenfileirar();
        let tempo = 200;
        if(cliente){
            document.getElementById("C2").innerHTML = "["+cliente.id + "("+cliente.itens+")]";
            tempo = cliente.itens * 100;
            setTimeout(function(){
                caixa2ChamaProximo();
            },tempo);
        }else{
            document.getElementById("C2").innerHTML = "aguardando..."
            if(ClienteParaAtender > 0){
                setInterval(function(){
                    caixa2ChamaProximo();
                },gerarItens()*50);
            }else{
                document.getElementById("C2").innerHTML = "fechado"
            }
        }
    }
    const caixa3ChamaProximo = () =>{
        let cliente = f1.desenfileirar();
        let tempo = 200;
        if(cliente){
            document.getElementById("C3").innerHTML = "["+cliente.id + "("+cliente.itens+")]";
            tempo = cliente.itens * 100;
            setTimeout(function(){
                caixa3ChamaProximo();
            },tempo);
        }else{
            document.getElementById("C3").innerHTML = "aguardando..."
            if(ClienteParaAtender > 0){
                setInterval(function(){
                    caixa3ChamaProximo();
                },gerarItens()*50);
            }else{
                document.getElementById("C3").innerHTML = "fechado"
            }
        }
    } 
    const caixa4ChamaProximo = () =>{
        let cliente = f1.desenfileirar();
        let tempo = 200;
        if(cliente){
            document.getElementById("C4").innerHTML = "["+cliente.id + "("+cliente.itens+")]";
            tempo = cliente.itens * 100;
            setTimeout(function(){
                caixa4ChamaProximo();
            },tempo);
        }else{
            document.getElementById("C4").innerHTML = "aguardando..."
            if(ClienteParaAtender > 0){
                setInterval(function(){
                    caixa4ChamaProximo();
                },gerarItens()*50);
            }else{
                document.getElementById("C4").innerHTML = "fechado"
            }
        }
    } 
    const caixa5ChamaProximo = () =>{
        let cliente = f1.desenfileirar();
        let tempo = 200;
        if(cliente){
            document.getElementById("C5").innerHTML = "["+cliente.id + "("+cliente.itens+")]";
            tempo = cliente.itens * 100;
            setTimeout(function(){
                caixa5ChamaProximo();
            },tempo);
        }else{
            document.getElementById("C5").innerHTML = "aguardando..."
            if(ClienteParaAtender > 0){
                setInterval(function(){
                    caixa5ChamaProximo();
                },gerarItens()*50);
            }else{
                document.getElementById("C5").innerHTML = "fechado"
            }
        }
    } 

    let maxCliente = 50;
    const filaInicial = 15;
    let ClienteParaAtender = maxCliente - filaInicial;
    let idCliente = filaInicial + 1;
    const entrarNaFila = () =>{
        if(ClienteParaAtender > 0){
        f1.enfileirar(Cliente("C"+idCliente,gerarItens()));
        ClienteParaAtender--;
        idCliente++;
        setTimeout(entrarNaFila,gerarItens()*500);
        }
    }

    (function(){
        for(let i=1; i <= filaInicial; i++){
            f1.enfileirar(Cliente("C"+i,gerarItens()));
        }
        caixa1ChamaProximo();
        caixa2ChamaProximo();
        caixa3ChamaProximo();
        caixa4ChamaProximo();
        caixa5ChamaProximo();
        entrarNaFila();
    })();