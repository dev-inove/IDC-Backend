# Como configurar seu ambiente para executar a aplicação?
Esse é um guia feito para que os colaboradores do projeto possam configurar o seu ambiente de desenvolvimento para que possam ser realizadas as atividades do projeto

## Quais Tecnologias precisarão ser Instaladas
As tecnologias a serem instaladas são as que seguem a baixo e vao ser utilizadas nas versões especificadas no sistema, de preferencia use sistemas baseados em linux para melhor compatibilidade ou use o wsl caso use o windows:
- node v18.15.0
- docker
- git
- wsl 2 (Caso use windows)


---
## Como Instalar git?
Baixando o git atraves deste [link](https://github.com/git-for-windows/git/releases/download/v2.40.0.windows.1/Git-2.40.0-64-bit.exe) para windows e atraves da execução de comando para ubuntu:
```
apt-get install git
```
e configure com suas credencias github.
## Como instalar o Wsl?
Verifique e marque nos recursos do windows:
* Subsistema do windows para linux
* Plataforma do Hipervisor do Windows

Apos verificar os recuros execute o powershel como administrador e execute o segunte comando:
```
wsl --install
```
Atraves deste comando será instalado uma dependencia via terminal do ubuntu, quando terminar será pedido que reinicie o sistema operacional.
Caso tenha duvidas no processo anterior utilize este [link](https://learn.microsoft.com/pt-br/windows/wsl/install) ou peça ajuda para instalar.

## Como instalar o node em seu computador?
Há duas maneiras de instalar o node em seu computador que são as seguintes:
- utilizando o npm
- utilizando o nvm (Recomendado)

## • Utilizando o npm
Para conseguir instalar o node com o npm você vai precisar seguir os passos abaixo:

### **Passo 1:** Execute esse comando para adicionar o repositório do node ao seu sistema
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash
```

### **Passo 2:** Após ter adicionado o repositório do node ao seu sistema, execute esse comando para instalar o node.
```bash
sudo apt-get install -y nodejs
```
Terminando os passos você poderá checar se o node está instalado executando o comando a seguir:
```bash
node --version
```
A saída vai parecer algo próximo a isso aqui:
```bash
$ node --version
v18.15.0
```

Tendo feito isso você deverá baixar a versão específica que estamos usando no sistema a versão 18.15.0, e pode fazer isso da seguinte forma:

### **Passo 3:** Para instalar a versão utilizada no projeto você deverá executar o seguinte comando:
```bash
npm install -g node@18.15.0
```
Assim terá o seu ambiente configurado com o node e o npm, que serão necessários para compilar e fazer uma série de ações no ambiente de desenvolvimento do projeto.

## • Utilizando o nvm
Para conseguir instalar o node com o nvm você vai precisar seguir os passos abaixo:

### **Passo 1:** Execute esses comandos para instalar o gerenciador de versões do node (nvm)
```bash
sudo apt install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

### **Passo 2:** Após ter instalado o nvm no seu sistema, execute esse comando para instalar o node na versão utilizada no projeto.
```bash
nvm install v18.15.0
```
### **Passo 3:** Terminando os passos você deve dizer para seu sistema utilizar essa versão como principal com esse comando abaixo:

```bash
nvm alias default v18.15.0
```
A saída vai parecer algo próximo a isso aqui:
```bash
$ nvm alias default v18.15.0
default -> v18.15.0
```
### **Passo 4:** Após baixar e definir a versão que será utilizada execute o comando para ativar o node:

```bash
nvm use v18.15.0
```
Assim terá o seu ambiente configurado com o node e o npm, e poderá utilizar também o nvm para gerenciar as versões de node do seu ambiente
## Como instalar o docker?
Haverá maneiras diferentes para instalar o docker dependendo do sistema operacinal:
* Windows
* Linux

## • Utilizando Windows
Para instalar o docker no windows entre no [site do docker](https://www.docker.com/) e baixe o executavel de instalação e execute.
## • Utilizando Linux
Para instalar o docker em sistemas baseados em linux siga as instruçoes neste [link](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04).

---
## Executando a aplicação

### Baixe o repositorio
```
git clone https://github.com/dev-inove/IDC-Backend/tree/dev
```
Começaremos pelo docker, dentro do repositorio execute:
```
docker compose up
```
Caso esteja no windows sugiro iniciar o docker desktop antes de executar o comando anterior.
Agora verificamos se o contaner estar funcionado com o segunte comando:
```
docker ps
```
deverá aparecer agora parecido com isso:

![imagem de reperesentacao](https://tecadmin.net/tutorial/wp-content/uploads/2017/09/docker-ps-command.png)

Agora com o node damos um 
```
npm install
```
para baixar todas as dependencias. Em seguida damos um 
```
npm run dev
```
para verificar se a instalaçao e execuçao ocorreu com exito.