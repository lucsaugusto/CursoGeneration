programa
{
	
	funcao inicio()
	{
		real n1, n2, n3, media

		escreva("- Digite as notas -\n")
		escreva("nota 1: ")
		leia(n1)
		escreva("nota 2: ")
		leia(n2)
		escreva("nota 3: ")
		leia(n3)

		n1 = n1 * 0.2
		n2 = n2 * 0.3
		n3 = n3 * 0.5
		media = (n1 + n2 + n3)

		escreva("Média = ", media)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 91; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */