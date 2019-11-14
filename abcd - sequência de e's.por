programa
{
	
	funcao inicio()
	{
		inteiro a, b, c, d

		escreva("Digite um valor para A: ")
		leia(a)
		escreva("Digite um valor para B: ")
		leia(b)
		escreva("Digite um valor para C: ")
		leia(c)
		escreva("Digite um valor para D: ")
		leia(d)

		se ((b > c) e (d > a) e ((c + d) > (a + b)) e (c > 0) e (d > 0) e (a%2 == 0))
		{
			escreva("Valores aceitos")
		}
		senao
		{
			escreva("Valores não aceitos")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 420; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */