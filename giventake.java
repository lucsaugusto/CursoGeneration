import java.io.IOException;

import javax.swing.JOptionPane;
public class MenuPrincipal 
{
    public static void main (String arg [ ]) throws IOException 
    {
    Livro[][] livro = new Livro[100][10];	
    ClasseCadastraL cadastra = new ClasseCadastraL(); 
    ClasseCarregaL consulta = new ClasseCarregaL();
    ClasseEmprestimoL emprestimo = new ClasseEmprestimoL();
    //ClasseAdicionarL adicionar = new ClasseAdicionarL();
    ClasseDevolveL devolver = new ClasseDevolveL();
    int opc=0;
    
    JOptionPane.showMessageDialog(null, "BEM-VINDO AO SISTEMA DE EMPRESTIMOS \n     EMPRESTA E DEVOLVE");
    while (opc!=9)
    {
        opc = Integer.parseInt(JOptionPane.showInputDialog("1 - Cadastro Livros \n2 - Consultar Livros \n3 - Realizar emprestimo \n4 - Devolver um livro\n5 - Inserir novos Livros \n9 - Finaliza"));
        switch (opc)     
        {
            case 1: 
                livro = cadastra.CadastroLivro(livro);
            break;
            case 2: 
                consulta.CarregaLivro(livro);
            break;
            
            case 3: 
                livro = emprestimo.EmprestarLivro(livro);
            break;
            case 4: 
                livro = devolver.DevolverLivro(livro);
            break;
            //case 5: 
                //livro = adicionar.InserirLivro(livro);
            //break;
            case 9: 
                JOptionPane.showMessageDialog(null,"SESS�O FINALIZADA ");
            break;
            default: 
                JOptionPane.showMessageDialog(null,"OP��O INV�LIDA");
            }
        }
    }
}




import java.io.*;	
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import javax.swing.*;	
public class ClasseCadastraL 
{
    public Livro[ ][ ] CadastroLivro (Livro[ ][ ] livro) throws IOException 
    {
        int i, j, qtde;
        String fileName = "LivrosCadastrados.txt";	
        BufferedWriter writer = new BufferedWriter(new FileWriter( fileName ));	
        qtde = Integer.parseInt(JOptionPane.showInputDialog("Quantos livros deseja cadastrar?"));
        LocalDate dataretorno = LocalDate.now();
        LocalDate dataaquisicao = LocalDate.now();
        dataretorno = dataretorno.plusDays(5);
        
        for (i = 0 ; i < qtde ; i++)
            for(j = 0; j < 10; j++)
                livro[i][j] = new Livro();

        for (i = 0 ; i < qtde ; i++)  
        {
            JOptionPane.showMessageDialog(null, "Livro " + i);
            livro[i][0].codigolivro = i;
            writer.write(Integer.toString(livro[i][0].codigolivro) + ",");  	
            livro[i][1].nomelivro = JOptionPane.showInputDialog("Título: ");
            writer.write(livro[i][1].nomelivro + ",");  
            livro[i][2].nomeautor = JOptionPane.showInputDialog("Autor: ");
            writer.write(livro[i][2].nomeautor + ","); 	
            livro[i][3].nomeeditora = JOptionPane.showInputDialog("Editora: ");
            writer.write(livro[i][3].nomeeditora + ",");
            livro[i][4].dataaquisicao = dataaquisicao.format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
            writer.write(livro[i][4].dataaquisicao + ",");  	
            livro[i][5].genero = JOptionPane.showInputDialog("Gênero: ");
            writer.write(livro[i][5].genero + ",");
            livro[i][6].disponivel = "sim";
            writer.write(livro[i][6].disponivel + ",");
            livro[i][7].nomepessoa = " ";
            writer.write(livro[i][7].nomepessoa + ",");  	
            livro[i][8].contato = " ";
            writer.write(livro[i][8].contato + ",");
            livro[i][9].dataretorno = " ";
            writer.write(livro[i][9].dataretorno);
            writer.newLine();

        }
        JOptionPane.showMessageDialog(null, "GRAVAÇÃO FEITA COM SUCESSO ");	
        writer.close();
        return livro;
    }
}





import java.io.*;	
import javax.swing.*;	
public class ClasseCarregaL {
    public Livro[ ][ ] CarregaLivro (Livro[ ][ ] livro) throws IOException 
    {
        int i, j;
        String linha;
        String[] palavras;
        String fileName = "LivrosCadastrados.txt";	
        BufferedReader reader = new BufferedReader(new FileReader( fileName ));	
        //FileInputStream arquivo = new FileInputStream("LivrosCadastrados.txt");
        //InputStreamReader input = new InputStreamReader(arquivo);
        //BufferedReader reader = new BufferedReader(input);
        ClasseSalvarL salvar = new ClasseSalvarL();
        for (i = 0; i < 100; i++){
            for (j = 0; j < 10; j++)
            {
                livro[i][j] = new Livro();
            }
        }
        
        for (i = 0; i < 100; i++){
            linha = reader.readLine();
            if(linha != null){
                palavras = linha.split(",");
                livro[i][0].codigolivro   = Integer.parseInt(palavras[0]);
                livro[i][1].nomelivro     = palavras[1];
                livro[i][2].nomeautor     = palavras[2];
                livro[i][3].nomeeditora   = palavras[3];
                livro[i][4].dataaquisicao = palavras[4];
                livro[i][5].genero        = palavras[5];
                livro[i][6].disponivel    = palavras[6];
                livro[i][7].nomepessoa    = palavras[7];
                livro[i][8].contato       = palavras[8];
                livro[i][9].dataretorno   = palavras[9];  
            }  
        }
        reader.close();
        
	for (i = 0; i < 5; i++){
            System.out.println("\nAqui é do Consulta\n");
            System.out.println(livro[i][0].codigolivro);
            System.out.println(livro[i][1].nomelivro);
            System.out.println(livro[i][2].nomeautor);
            System.out.println(livro[i][3].nomeeditora);
            System.out.println(livro[i][4].dataaquisicao);
            System.out.println(livro[i][5].genero);
            System.out.println(livro[i][6].disponivel);
            System.out.println(livro[i][7].nomepessoa);
            System.out.println(livro[i][8].contato);
            System.out.println(livro[i][9].dataretorno);
        }
        
        //livro[0][1].nomelivro     = "Deu bom";
        //livro[1][1].nomelivro     = "Codigo";
        //livro[2][1].nomelivro     = "Infeliz";
        
        System.out.println("Tamanho: "+livro.length);
        System.out.println("Tamanho: "+livro[0].length);
        salvar.SalvarSessao(livro);
        return livro;	
    }
}




import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import javax.swing.JOptionPane;

public class ClasseEmprestimoL {
    public Livro[ ][ ] EmprestarLivro (Livro[ ][ ] livro) throws IOException {
        int i, j, codigo;	
        String linha, sim = "sim", teste = "Linha teste: ";
        String[] palavras;
        ClasseSalvarL salvar = new ClasseSalvarL();
        LocalDate dataretorno = LocalDate.now();
        LocalDate dataaquisicao = LocalDate.now();
        dataretorno = dataretorno.plusDays(5);
        
        JOptionPane.showMessageDialog(null, "-----EMPRÉSTIMO-----\n\nPreencha com nome e\n contato do interessado:");
        codigo = Integer.parseInt(JOptionPane.showInputDialog("Digite o código do Livro: "));
        JOptionPane.showMessageDialog(null, livro[codigo][0].codigolivro);
        JOptionPane.showMessageDialog(null, livro[codigo][1].nomelivro);
        JOptionPane.showMessageDialog(null, livro[codigo][2].nomeautor);
        JOptionPane.showMessageDialog(null, livro[codigo][3].nomeeditora);
        JOptionPane.showMessageDialog(null, livro[codigo][4].dataaquisicao);
        JOptionPane.showMessageDialog(null, livro[codigo][5].genero);
        JOptionPane.showMessageDialog(null, livro[codigo][6].disponivel);
        //JOptionPane.showMessageDialog(null, dataretorno.format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
        if(livro[codigo][6].disponivel.equalsIgnoreCase("sim")){
            livro[codigo][6].disponivel = "nao";
            livro[codigo][7].nomepessoa = JOptionPane.showInputDialog("Nome: ");
            livro[codigo][8].contato = JOptionPane.showInputDialog("Contato: ");
            livro[codigo][9].dataretorno = dataretorno.format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        }
        else{
            JOptionPane.showMessageDialog(null, "\nLivro indisponível.");
        }
        salvar.SalvarSessao(livro);
     return livro;   
    }
}






import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import javax.swing.JOptionPane;

public class ClasseDevolveL {
    public Livro[ ][ ] DevolverLivro (Livro[ ][ ] livro) throws IOException {
        int i, j, codigo;	
        String linha, sim = "sim", teste = "Linha teste: ";
        String[] palavras;
        ClasseSalvarL salvar = new ClasseSalvarL();
        LocalDate dataretorno = LocalDate.now();
        LocalDate dataaquisicao = LocalDate.now();
        dataretorno = dataretorno.plusDays(5);
        
        JOptionPane.showMessageDialog(null, "-----DEVOLUÇÃO-----\n\nPreencha com nome e\n contato do interessado:");
        codigo = Integer.parseInt(JOptionPane.showInputDialog("Digite o código do Livro: "));
        JOptionPane.showMessageDialog(null, livro[codigo][0].codigolivro);
        JOptionPane.showMessageDialog(null, livro[codigo][1].nomelivro);
        JOptionPane.showMessageDialog(null, livro[codigo][2].nomeautor);
        JOptionPane.showMessageDialog(null, livro[codigo][3].nomeeditora);
        JOptionPane.showMessageDialog(null, livro[codigo][4].dataaquisicao);
        JOptionPane.showMessageDialog(null, livro[codigo][5].genero);
        JOptionPane.showMessageDialog(null, livro[codigo][6].disponivel);
        //JOptionPane.showMessageDialog(null, dataretorno.format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));

        if(livro[codigo][6].disponivel.equalsIgnoreCase("nao")){
            livro[codigo][6].disponivel = "sim";
            livro[codigo][7].nomepessoa = " ";
            livro[codigo][8].contato = " ";
            livro[codigo][9].dataretorno = " ";
        }
        salvar.SalvarSessao(livro);
        return livro;   
    }
}






import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.*;
import java.text.DateFormat;
import java.util.Calendar;
import javax.swing.JOptionPane;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;

public class ClasseSalvarL {
    public Livro[ ][ ] SalvarSessao (Livro[ ][ ] livro) throws IOException {
        int i, j, b;	
        String fileName = "LivrosCadastrados.txt", sim = "sim";	
        BufferedWriter writer = new BufferedWriter(new FileWriter( fileName ));
        LocalDate dataaquisicao = LocalDate.now();
        LocalDate dataretorno = LocalDate.now();
        dataretorno = dataretorno.plusDays(5);

        for (i = 0; i < 5; i++){
            writer.write(Integer.toString(livro[i][0].codigolivro) + ",");  	
            writer.write(livro[i][1].nomelivro + ",");  
            writer.write(livro[i][2].nomeautor + ","); 	
            writer.write(livro[i][3].nomeeditora + ",");
            //livro[i][4].dataaquisicao = dataaquisicao.format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
            writer.write(livro[i][4].dataaquisicao + ",");
            writer.write(livro[i][5].genero + ",");
            
            if(livro[i][6].disponivel.equalsIgnoreCase("nao")){
                writer.write(livro[i][6].disponivel + ",");
                writer.write(livro[i][7].nomepessoa + ",");
                writer.write(livro[i][8].contato + ",");
                livro[i][9].dataretorno = dataretorno.format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
                writer.write(livro[i][9].dataretorno);
            }
            else{
                livro[i][6].disponivel = "sim";
                writer.write(livro[i][6].disponivel + ",");
                livro[i][7].nomepessoa = " ";
                writer.write(livro[i][7].nomepessoa + ",");
                livro[i][8].contato = " ";
                writer.write(livro[i][8].contato + ",");
                livro[i][9].dataretorno = " ";
                writer.write(livro[i][9].dataretorno);
            }
            writer.newLine();
        }
        writer.close();
        
        return livro;
    }
}
        

        
/*
        for (i = 0; i < 3; i++){
            System.out.println("\nAqui é do salvar\n");
            System.out.println(livro[i][0].codigolivro);
            System.out.println(livro[i][1].nomelivro);
            System.out.println(livro[i][2].nomeautor);
            System.out.println(livro[i][3].nomeeditora);
            System.out.println(livro[i][4].dataaquisicao);
            System.out.println(livro[i][5].genero);
            System.out.println(livro[i][6].disponivel);
            System.out.println(livro[i][7].nomepessoa);
            System.out.println(livro[i][8].dataretorno);
        }
*/      






class Livro {
    Integer codigolivro;
    String nomelivro;
    String nomeautor;
    String nomeeditora;
    String dataaquisicao;
    String genero;
    String disponivel;
    String nomepessoa;
    String contato;
    String dataretorno;

    Livro() {
        this(0, "", "", "", "", "", "", "", "");
    }

    Livro(Integer codigolivro1, String nomelivro1, String nomeautor1, String nomeeditora1, String dataaquisicao1, String genero1, String disponivel1, String nomepessoa1, String dataretorno1) {
        codigolivro = codigolivro1;
        nomelivro = nomelivro1;
        nomeautor = nomeautor1;
        nomeeditora = nomeeditora1;
        dataaquisicao = dataaquisicao1;
        genero = genero1;
        disponivel = disponivel1;
        nomepessoa = nomepessoa1;
        dataretorno = dataretorno1;
    }
}





import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class ClasseAdicionarL {
    public Livro[ ][ ] AdicionarLivros (Livro[ ][ ] livro) throws IOException {
        int i, j;	
        String linha, teste = "Linha teste: ";
        String[] palavras;
        String fileName = "LivrosCadastrados.txt";	
        //BufferedWriter writer = new BufferedWriter(new FileWriter( fileName ));
        
     return livro;   
    }
}
