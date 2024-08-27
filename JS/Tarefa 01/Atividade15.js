// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

//inicia sequencia de fibonacci
ultimo = 1
penultimo = 0

//calcula e imprime sequencia  
for (count=0; count<8; count++) {
    termo = ultimo + penultimo
    penultimo = ultimo
    ultimo = termo
    if (count===0) {console.log(0,'\n',1)}
    console.log(termo)   
}
