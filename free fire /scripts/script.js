const escreve = document.querySelector("#textoHeader");
const nome = "BRYAN";

const escreveNome = (pos)=>{
    if(pos < nome.length){
        let saida = "";
   for(let i=0; i <= pos; i++){
    saida += nome[i];
    setTimeout(() => {
        escreve.innerHTML = saida;
        pos++;
        escreveNome(pos);
    }, 1000);
   }
}
} 

(()=>{
    escreveNome(0);
})();