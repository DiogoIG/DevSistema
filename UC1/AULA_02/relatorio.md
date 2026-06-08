# Relatório da Aula 02

## Atividades Realizadas

- Continuação dos estudos sobre o **GitHub**.
- Apresentação dos principais comandos utilizados no **Git Bash**.
- Instalação das ferramentas necessárias:
  - Git Bash
  - Visual Studio Code (VS Code)
  - Node.js
- Aprendemos a utilizar o comando:

```bash
git clone <link-do-repositorio>
```

Esse comando cria uma cópia do repositório do GitHub no computador local.

- Configuração do usuário do Git:

```bash
git config --global user.name "nome de usuario do github"
git config --global user.email "seuemailcadastrado"
```

- Aprendemos a abrir o projeto diretamente no VS Code pelo Git Bash utilizando o comando:

```bash
code .
```

- Foi explicado o uso do comando `cd`, que serve para navegar entre diretórios:

```bash
cd nome-da-pasta
```

- Aprendemos também o atalho para ativar e desativar o terminal integrado do VS Code:

```text
Ctrl + J
```

ou

```text
Ctrl + '
```

## Conclusão

A segunda aula foi dedicada à continuação do aprendizado sobre Git e GitHub, com foco na instalação das ferramentas necessárias, configuração do ambiente de desenvolvimento e utilização dos principais comandos do Git Bash e do Visual Studio Code.

# Utilização do git

# 1- Conectar Usuario

Comandos

git config --global user.name "nome do usuario do sistema"
git config --global user.email "email do usuario do git hub"

<!-- Objetivo identificar o usuario que esta autalizando o projeto -->

<!-- Este comando usa-se somente uma vez ou quando necessitar de nova identificação -->

<!-- É importante na primeira vez que o github esteja logado, pois o sistema vai precisar dar permissão  -->
 
# 2. Verificando qual usuario esta logado

Comando:
git config user.name
git config user.email

# Para enviar para repositório 

Digite: 

git add .
<!--  prepara os arquivos para envio -->
git commit -m "nome"
<!--  criar a chave de identificação  -->
git push 
<!--  Envia os arquivos para repositório -->

Estes comandos serão sempre executados, será uma rotina a ser executada sempre para atualizar seus projetos

## Para baixar atualuzações do Repositório

git pull
<!--  baixar as atualizações do repositório -->
Exemplo de caso:
Pedro desenvolve seus projetos no trabalho. Ele eexecuta os comandos git add. , git commit -m "nome" e git push.
no final de semana, em casa Pedro, clona seu projeto para seu computado pessoal. Realiza algumas alterações no projeto e atualiza no repositorio repetindo novamente os comanods: git add ., git commit - "nome" e git push.
Na segunda-feira ao chegar no trabalho, Pedro abre o terminal  e aplica o comando: git pull, para atualizar no trabalho os aqruivos que ele alterou no final de semana. 