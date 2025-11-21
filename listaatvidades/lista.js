// 1.	Declare três variáveis: uma string com o seu nome, um number com a sua idade e um boolean que diga se você gosta de programação. Use console.log() para mostrar todas juntas.
  let nome= "isadora";
  let idade= 15;
  let gostadeprogramação= false;
  console.log("nome,idade,gostadeprogramação");
  
// 2.	Crie uma variável chamada fruta com valor "maçã". Em seguida, mude o valor dela para "banana" e imprima os dois momentos no console.
  let fruta= "maça"; 
  console.log("fruta");
  fruta="banana";
  console.log("fruta");
  
// 3.	Mostre no console uma frase que use template string para exibir: "Meu nome é X e tenho Y anos".
  // let nome="isa"
  // let idade=15;
  // console.log("meu nome é isa e tenho 15anos");
  
// 4.	Declare uma variável cidade e outra estado. Mostre no console uma frase completa usando concatenação com +.
  let cidade="santa maria";
  let estado="rio grande do sul";
  conasole.log("eu nasci em "+cidade+","+estado".");
  
// 5.	Repita o exercício anterior, mas agora usando template string.
//   let cidade="santa maria";
//   let estado="rio grande do sul";
//   conasole.log(`eu nasci em ${cidade},${estado}.`);
  
// 6.	Use console.log() com vírgula para exibir três informações: "Produto:", o nome de um produto e o preço dele.
  let produto="lápis";
  let preço="1.90";
  console.log("produto:", produto, "preço:", preço);
  
// 7.	Crie uma variável que contenha uma quebra de linha usando \n e mostre no console.
  let texto="oii\nNova linha";
  console.log(texto);
  
// 8.	Crie uma variável que contenha um símbolo especial com \u00A9 e exiba no console.
  let símboloespecial="\u00A9";
  console.log("símboloespecial");

// Exercícios sobre If / Else
// 9.	Crie uma variável nota com valor numérico. Se for maior ou igual a 7, mostre "Aprovado". Senão, mostre "Reprovado".
  let nota="recebendo nota";
  if (nota>=7){
    alert("Aprovado");
  }
  else{
    alert("Reprovado");
  }
// 10.	Declare uma variável idade. Se for maior ou igual a 18, mostre "Maior de idade". Caso contrário, mostre "Menor de idade".
  let idade= 16;
  if(idade>= 18){
    console.log ("maior de idade");
  }
  else{
    console.log("menor de idade");
  }
// 11.	Crie uma variável senha. Se ela for igual a "1234", mostre "Acesso permitido", caso contrário mostre "Senha incorreta".
  let senha= "5678";
  if (senha="1234"){
    console.log("acesso permitido");
  }
  else{
    console.log("senha incorreta";
  }
  
// 12.	Declare uma variável numero. Se for positivo, mostre "Número positivo". Se for negativo, mostre "Número negativo". Se for 0, mostre "Número neutro".
  let numeroa= "18";
  if (positivo){
    console.log("Número positivo");
  }
  if (negativo){
    console.log("Número negativo");
  }
  if (0){
    console.log("Número neutro";
  }
// 13.	Crie duas variáveis num1 e num2. Use if/else para verificar qual é o maior e mostre o resultado no console.
  let n1= 8
  let n2= 9
  if (n1>n2){
    console.log("n1 maior que n2");
  }
  if (n2>n1){
    console.log("n2 maior que n1");
  }
  
// Exercícios sobre Switch
// 14.	Crie uma variável diaSemana com um número de 1 a 7 e use switch para mostrar qual é o dia correspondente.
  let dia=4;
switch (dia){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sabado");
        break;
}

// 15.	Use switch para verificar a cor de um semáforo ("vermelho", "amarelo", "verde") e mostre no console a ação correspondente.
let cor="verde";
switch (cor){
    case "verde":
        console.log("Siga");
        break;
    case "vermelho":
        console.log("Pare");
        break;
    case "amarelo":
        console.log("Espere");
        break;
    default:
        console.log("Cor inválida");
        break;
}
// 16.	Crie uma variável notaConceito que pode ser "A", "B", "C", "D" ou "F". Use switch para mostrar a mensagem correspondente à nota.
  let nota="B";
  switch(nota){
    case "A":
        console.log("Passou");
        break;
    case "B":
        console.log("Quase lá");
        break;
    case "C":
        console.log("Rodou");
        break;
  }
// 17.	Declare uma variável mes com número de 1 a 12 e use switch para mostrar o nome do mês.
let mes= 5;
switch (mes){
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
}

// Exercícios sobre For
// 18.	Use um for para imprimir os números de 1 a 10 no console.
for (let i = 1; i<=10; i++) {
    console.log(i)
}
// 19.	Monte um for que faça uma contagem regressiva de 10 até 0 e ao final mostre "Fogo!".
for (let f=10; f>=1; f--){
    console.log(f)
}
console.log("Fogo!")

// 20.	Crie um for que multiplique um número qualquer de 1 até 10 e mostre a tabuada no console.
let numero = 7;
console.log("Tabuada do " + numero);
for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}
 
// 21.	Use um for para imprimir apenas os números pares de 0 até 20.
console.log("números pares de 0 até 20:");
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// 22.	Use um for para somar todos os números de 1 a 100 e mostre o resultado no console.
let soma=0;
for (let i=1; i<=100; i++){
    soma += i;
}

// Exercícios sobre While
// 23.	Crie uma variável contador iniciando em 0 e use while para imprimir os números até 5.
let o=0;
while (o<=5){
    console.log(o);
    o+=1;
}
// 24.	Simule um caixa eletrônico: comece com saldo = 100 e enquanto o saldo for maior que 0, retire 10 e mostre no console.
let saldo=100;
while(saldo>0){
    saldo -=10;
    console.log(saldo);
}
// 25.	Use while para mostrar todos os números ímpares entre 1 e 20.
console.log("números ímpares entre 1 e 20:");
let n=1;
while(n<=20){
    if(n % 2!==0){
        console.log(n);
    }
        
    n++;}
// 26.	Crie uma variável senha e simule uma tentativa de senha com while, até que a senha correta "abcd" seja digitada.

// Exercícios sobre Do/While
// 27.	Peça uma senha (simulada com uma variável) e use do/while para repetir até que ela seja "1234".
// 28.	Use do/while para imprimir números de 0 a 3.
let w=0;
while(w<=3){
    console.log(w);
    w+=1;
}
// 29.	Crie um do/while que mostre um menu com três opções (simulado com uma variável) e só saia quando a opção for "sair".
// 30.	Use do/while para gerar números de 1 até 5 e mostrá-los no console.
    let p=2;
    while (p<=5){
        console.log(p);
        p+=1:
    }


