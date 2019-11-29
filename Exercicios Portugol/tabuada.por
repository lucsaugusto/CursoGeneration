programa
{
	
	funcao inicio()
	{
		inteiro num, resultado,i

		escreva("Digite um valor: ")
		leia(num)

		enquanto (num / 1 != num)
		{
			escreva("Isso não é um número.\nDigite novamente: ")
			leia(num)
		}
		
		para (i = 0; i < 11; i++)
		{
			resultado = num * i
			escreva("\n", num, "x", i, " = ", resultado)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 104; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */