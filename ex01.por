//1. Leia um número de 3 dígitos e gere um novo número composto da inversão dos dígitos: Ex: 123 -> 321

programa
{
	
	funcao inicio()
	{
		inteiro num, aux, c, d, u

		escreva("Insira um número de 3 digitos: ")
		leia(num)

		c = num / 100
		num = num % 100
		d = num / 10
		num = num % 10
		u = num / 1

		escreva("\nDigitado:\n", c, "\n", d, "\n", u)
		
		escreva("\nInverso:\n", u, "\n", d, "\n", c)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 103; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {num, 8, 10, 3}-{c, 8, 20, 1}-{d, 8, 23, 1}-{u, 8, 26, 1};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */