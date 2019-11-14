programa
{
	
	funcao inicio()
	{
		cadeia matriz[10][10]
		inteiro i, j

		para (i = 0; i < 10; i++)
		{
			para (j = 0; j < 10; j++)
			{
				se(i >= 1 e i <= 8 e j == 1)
					matriz[i][j] = "O"
				senao se(i >= 1 e i <= 8 e j == 2)
					matriz[i][j] = "O"
				senao se(i == 7 e j >= 1 e j <= 8)
					matriz[i][j] = "O"
				senao se(i == 8 e j >= 1 e j <= 8)
					matriz[i][j] = "O"
				senao
					matriz[i][j] = "/"
			}
		}

		para (i = 0; i < 10; i++)
		{
			para (j = 0; j < 10; j++)
			{
				se(j == 9)
				{
					escreva(matriz[i][j],"\n")
				}
				senao
				{
					escreva(matriz[i][j])
				}
				
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 384; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */