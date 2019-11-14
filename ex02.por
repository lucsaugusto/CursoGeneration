/*
2.Faça programas Java para calcular:

a. área de um quadrado, dado seu lado
	Área = lado * lado
b. área de um retângulo, dados sua base e sua altura
	Área = base * altura
c. área de um triângulo, dados sua base e sua altura
	Área = (base * altura)/2
d. área de um losango, dadas suas diagonais
	Área = diagonal1 * diagonal2
e. área de um trapézio, dadas suas bases e sua altura
	Área = (base maior + base menor)* altura /2
f. volume de um paralelepípedo, dadas suas dimensões
	Volume = altura * largura * profundidade
g. volume de um cubo, dado seu lado
	Volume = lado * lado * lado
h. volume de um cilindro, dado seu diâmetro e considerando pi=3,14
	Volume = PI * raio * raio * altura
*/

programa
{
	
	funcao inicio()
	{
		real resultado = 0, a, b, c
		cadeia opc
		
		escreva("Olá, bem-vindo a calculadora dinâmica!\n")
		escreva("Escolha uma das opções abaixo:\n", "a - área de um quadrado\n", "b - área de um retângulo\n", "c - área de um triângulo\n",
			"d - área de um losango\n", "e - área de um trapézio\n", "f - volume de um paralelepípedo\n", "g - volume de um cubo\n", "h - volume de um cilindro\n", "Opção: ")
		leia(opc)

		enquanto (opc != "a" e opc != "b" e opc != "c" e opc != "d" e opc != "e" e opc != "f" e opc != "g" e opc != "h")
		{
			escreva("\nOpção inválida!\nDigite novamente: ")
			leia(opc)
		}

		se (opc == "a")
		{	
			escreva("\nÁrea do quadrado")
			escreva("\ndigite o lado: ")
			leia(a)
			resultado = a * a
		}
		se (opc == "b")
		{	
			escreva("\nÁrea do retângulo")
			escreva("\ndigite a base: ")
			leia(b)
			escreva("\ndigite a altura: ")
			leia(a)
			resultado = b * a
		}
		se (opc == "c")
		{	
			escreva("\nÁrea do triângulo")
			escreva("\ndigite a base: ")
			leia(b)
			escreva("\ndigite a altura: ")
			leia(a)
			resultado = (b * a) / 2
		}
		se (opc == "d")
		{	
			escreva("\nÁrea do losango")
			escreva("\ndigite a diagonal 1: ")
			leia(a)
			escreva("\ndigite a diagonal 2: ")
			leia(b)
			resultado = a * b
		}
		se (opc == "e")
		{	
			escreva("\nÁrea do trapézio")
			escreva("\ndigite a base menor: ")
			leia(a)
			escreva("\ndigite a base maior: ")
			leia(b)
			escreva("\ndigite a altura: ")
			leia(c)
			resultado = ((a + b) * c) / 2
		}
		se (opc == "f")
		{	
			escreva("\nVolume do paralelepípedo")
			escreva("\ndigite a altura:")
			leia(a)
			escreva("\ndigite a largura:")
			leia(b)
			escreva("\ndigite a profundidade:")
			leia(c)
			resultado = a * b * c
		}
		se (opc == "h")
		{	
			escreva("\nVolume do cilindro")
			escreva("\ndigite o diâmetro: ")
			leia(a)
			b = a / 2
			resultado = 2 * (b * b) * 3.14
		}

		escreva("O resultado é ", resultado)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2613; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */