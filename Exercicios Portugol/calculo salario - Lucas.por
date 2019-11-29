programa
{
	
	funcao inicio()
	{
		real salario

		escreva("Digite o salário do funcionário: ")
		leia(salario)

		se (salario <= 400)
		{	
			escreva("\nNovo salário: ", salario * 1.15)
			escreva("\nReajuste ganho: ", salario * 0.15)
			escreva("\nEm percentual: 15%")
		}
		senao se (salario <= 800)
		{
			escreva("\nNovo salário: ", salario * 1.12)
			escreva("\nReajuste ganho: ", salario * 0.12)
			escreva("\nEm percentual: 12%")
		} 
		senao se (salario <= 1200)
		{
			escreva("\nNovo salário: ", salario * 1.10)
			escreva("\nReajuste ganho: ", salario * 0.10)
			escreva("\nEm percentual: 10%")
		}
		senao se (salario <= 2000)
		{
			escreva("\nNovo salário: ", salario * 1.07)
			escreva("\nReajuste ganho: ", salario * 0.07)
			escreva("\nEm percentual: 7%")
		}
		senao
		{
			escreva("\nNovo salário: ", salario * 1.04)
			escreva("\nReajuste ganho: ", salario * 0.04)
			escreva("\nEm percentual: 4%")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 442; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */