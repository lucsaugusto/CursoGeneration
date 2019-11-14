programa
{
	
	funcao inicio()
	{
		cadeia palavra[5]
		inteiro indice

		//armazena os valores nas posições do vetor
		palavra[0] = "indice 0" // se o indice for 0 --> palavra[indice] == palavra[0]
		palavra[1] = "indice 1" // se o indice for 1 --> palavra[indice] == palavra[1]
		palavra[2] = "indice 2" // se o indice for 2 --> palavra[indice] == palavra[2]
		palavra[3] = "indice 3" // se o indice for 3 --> palavra[indice] == palavra[3]
		palavra[4] = "indice 4" // se o indice for 4 --> palavra[indice] == palavra[4]

		//mostra os valores nas posições do vetor
		escreva("\n", palavra[0])
		escreva("\n", palavra[1])
		escreva("\n", palavra[2])
		escreva("\n", palavra[3])
		escreva("\n", palavra[4])

		escreva("\ndigite o indice: ")
		leia(indice)

		escreva("\nVocê digitou: ", indice, "\nEssa aqui é a posição de '", palavra[indice], "'")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 649; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */