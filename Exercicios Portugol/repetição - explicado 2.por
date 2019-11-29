programa
{
	
	funcao inicio()
	{
		cadeia palavra[5]
		inteiro indice

		//armazena os valores nas posições do vetor
		para (indice = 0; indice < 5; indice++){
			palavra[indice] = ("indice " + indice)
		}
		//mostra os valores nas posições do vetor
		para (indice = 0; indice < 5; indice++){
			escreva("\nMostrando palavra[indice] == palavra[", indice, "]")
			escreva("\npalavra[indice] == ", palavra[indice], "\n\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 424; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */