programa
{
	
	funcao inicio()
	{
		real salario, percReajuste

		escreva("Digite o salário do funcionário: ")
		leia(salario)

		se (salario <= 400)
			percReajuste = 0.15
		senao se (salario <= 800)
			percReajuste = 0.12
		senao se (salario <= 1200)
			percReajuste = 0.10
		senao se (salario <= 2000)
			percReajuste = 0.07
		senao
			percReajuste = 0.04
		
		escreva("\nNovo salário: ", salario + (salario * percReajuste))
		escreva("\nReajuste ganho: ", salario * percReajuste)
		escreva("\nEm percentual: ", percReajuste * 100, "%")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 538; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */