# Padrões de contribuição

## A seguir, Você tem todos os passos necessários para criar branches e commits padronizadas

* Faça o checkout da branch de desenvolvimento usando o comando git

```text
checkout dev
```

* Crie uma nova branch para a sua tarefa com o comando

```text
git checkout -b nome-da-branch
```

Onde "nome-da-branch" deve seguir o padrão "IDC-23-(inicial do time, B para Backend, F para Frontend)(número da task com 3 digitos)-(tipo de commit)-(descrição-curta)".

Exemplo: "IDC-23-B001-feat-criar-login"

* Faça as alterações no código necessárias para completar a task e faça commits com mensagens descritivas e claras, seguindo o padrão "(inicial do time, B para Backend, F para Frontend)(número da task com 3 digitos) - (tipo de commit) - (descrição-curta)". Exemplo: "B001 - feat - Adicionar funcionalidade de login"

| tipo de commit | palavra-chave|
|----------|:-------------:|
| commit inicial | init |
| novo recurso | feat |
| teste | test |
| correção de bugs | fix |
| refatoração | refac |

* Quando possivel faça apenas um(1) commit por branch.

* Quando a task estiver completa e testada, abra um pull request (PR) da branch criada para a branch dev. para isso entre no repositório e observe que vai aparecer um alerta com a opção compare & pull request. Clique nesse botão!

Outra maneira de criar uma PR é indo na aba Pull requests > new pull request

* Lembre-se de trocar a branch que vai ser receber o merge para dev
* Certifique que você incluiu todos os detalhes da task na descrição do PR como exemplificado no print a baixo. Quando estiver tudo certo crie a PR clicando em “Create pull request”
* Tudo certo, agora o lider do seu time vai revisar e avaliar o código.
* Aguarde a aprovação e, se necessário, faça as alterações sugeridas.
* Quando o PR for aprovado, faça o merge da PR para a branch dev.

para um commit:

```text
git ferch -all
git push origin nome-da-branch
```

para mais de um commit:

```text
git ferch -all
git rebase origin/dev
git push origin nome-da-branch
```

Onde o "nome-da-branch" é o nome da branch que voce criou.

### Lembre-se de seguir essas práticas cada vez que trabalhar em uma nova task. Isso ajudará a manter o código organizado e fácil de entender, além de facilitar a revisão e aprovação de código pelos membros da equipe. Se você tiver alguma dúvida, não hesite em perguntar aos seus colegas de equipe
