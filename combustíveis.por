programa
{
	
	funcao inicio()
	{
		cadeia opc
		cadeia tipo[4] = {"alcool", "gasolina", "diesel", "fim"}


		escreva("Olá, digite o tipo de combustível.\nOpções:\n- alcool\n- gasolina\n- diesel\n- fim\n> ")
		leia(opc)

		enquanto (opc != "alcool" e opc !=  "gasolina" e opc !=  "diesel" e opc !=  "fim")
		{
			escreva("\nVocê digitou uma opção inválida.\nPor favor, digite novamente.\nOpções:\n- alcool\n- gasolina\n- diesel\n- fim\n> ")
			leia(opc)
		}
		
		
		
		se (opc == "alcool")
		{
			escreva("\nMuito obrigado por escolher a opção ", opc, "\n")
		}
		senao se (opc == "gasolina")
		{
			escreva("\nMuito obrigado por escolher a opção ", opc, "\n")
		}
		senao se (opc == "diesel")
		{
			escreva("\nMuito obrigado por escolher a opção ", opc, "\n")
		}
		senao
		{
			escreva("\nMuito obrigado, volte sempre.\n")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 365; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {opc, 6, 9, 3};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */