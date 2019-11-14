programa
{
	
	funcao inicio()
	{
		cadeia palavra[5]
		inteiro indice

		//armazena os valores nas posições do vetor
		para (indice = 0; indice < 5; indice++){
			escreva("Volta ", indice, " do 'para'")
			escreva("\nindice = ", indice, "\npalavra[indice] == palavra[", indice, "]\n\n")
			palavra[indice] = ("indice " + indice)
		}

		escreva("--------------------------------")
		//mostra os valores nas posições do vetor
		para (indice = 0; indice < 5; indice++){
			
			escreva("\nMostrando palavra[indice] == palavra[", indice, "]")
			escreva("\npalavra[indice] == ", palavra[indice], "\n\n")
		}

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
 * @POSICAO-CURSOR = 364; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */