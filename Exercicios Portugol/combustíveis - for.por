programa
{
	
	funcao inicio()
	{
		cadeia opc
		cadeia tipo[4] = {"alcool", "gasolina", "diesel", "fim"}
		inteiro count

		escreva("Olá, digite o tipo de combustível.", "\nOpções:", "\n- alcool\n- gasolina\n- diesel\n- fim", "\n> ")
		leia(opc)

		enquanto (opc != "alcool" e opc !=  "gasolina" e opc !=  "diesel" e opc !=  "fim")
		{
			escreva("\nVocê digitou uma opção inválida.", "\nOpções:", "\n- alcool\n- gasolina\n- diesel\n- fim", "\nPor favor, digite novamente.\n> ")
			leia(opc)
		}
		
		para (count = 0; count < 4; count++)
		{
			se (opc == tipo[3]) // fim
				escreva("\nMuito obrigado, volte sempre.\n")
			se (opc == tipo[count])
				escreva("\nMuito obrigado por escolher a opção ", opc, "\n")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 154; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */