programa
{
	
	funcao inicio()
	{
		cadeia nome[] = {"Lucas", "Paulo", "Henrique", "Caio", "Erika", "Gustavo", "Letícia", "Marcelo", "Leonardo", "Clara"}
		cadeia comentario[] = {"Quero café.", "Se a vida anda difícil, Imagina ela correndo.", "Eu não sei vocês, mas eu ainda não emagreci o suficiente para engordar no Natal.", "O argumento “Só se vive uma vez” já me fez gastar muito dinheiro.", "Se te oferecerem um óculos sem lentes, cuidado. Pode ser uma armação.", "Como ser odiado: Conte um spoiler falso na fila do cinema.", "A única pessoa que tinha rede Wi-fi na mitologia grega, era a Atena.", "Minha mãe fez um escondidinho tão bom, que até hoje não encontrei ele.", "Aquele cantor que era sincero: o Walter Franco.", "Aquele escritor preferido da Páscoa: o Paulo Coelho." } 
		inteiro count
		
		escreva("------- Começo da Tabela -------")
		
		para(count = 0; count < 10; count++)
		{	
			escreva("\n--------------------------------")
			escreva("\nID: ", count)
			escreva("\nNome: ", nome[count])
			escreva("\nComentário: ", comentario[count])
		}

		escreva("\n\n------- Final da Tabela --------")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1078; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */