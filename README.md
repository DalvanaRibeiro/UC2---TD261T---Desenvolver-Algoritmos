# Olá queridos alunos 👩‍💻

# UC2: Introdução a Algoritmos com JavaScript! 

Olá, pessoal!  

Sejam muito bem-vindos à **Unidade Curricular 2: Introdução a Algoritmos com JavaScript**.  

Aqui, vamos explorar :  
- Os **fundamentos de algoritmos** e lógica de programação;  
- Como **pensar passo a passo** para resolver problemas de forma eficiente;  
- A **sintaxe e recursos do JavaScript** aplicados à programação prática;  
- E, claro, muita prática com exercícios e projetos para consolidar o aprendizado.


<p align="center">
  <img src="https://assets.dio.me/NE7uaL6XGP-9iGInOaN5IGlCkhpX-81xNRT38bh__J0/f:webp/q:80/L2FydGljbGVzL2NvdmVyL2E0YjUyMjFjLTVkMzgtNGY4Mi04MzBlLTc4YTY1NWI4N2RlNi5qcGc" alt="Imagem do Reddit" width="250" />
</p>




-------


# Subindo os progressos para o GitHub 
<p align="center">
  <img src="https://i.redd.it/erdjqzlmlv111.png" alt="Imagem do Reddit" width="250" />
</p>


## Passo a passo rápido


 ### 1. Adicionar novas alterações - no terminal Bash
```
git add .
```` 

### 2. Commit das alterações (salvar)
```
git commit -m "Atualizando main com alterações da master e novas mudanças"
```

### 3. Subir a main para o GitHub
```
git push origin main
```

ou

```
git push origin main
```
-----
## Tenho duas branches main e master e agora? 🥹😭


Unificar branches main e master e subir para GitHub




### 1. Mudar para a branch main

```
git checkout main
```
### 2. Atualizar a main do repositório remoto
```
git pull origin main
```

# 3. Unir a master na main
```
git merge master
```





Objetivo

- Ficar só com a branch main
- Trazer tudo da master para a main
- Evitar perder código


## PASSO A PASSO
### 1. Verificar estado atual
```
git branch
```
E veja onde você está.

### 2. Atualizar tudo do remoto
```
git fetch origin
```
### 3. Ir para a main
```
git checkout main
```
### 4. Garantir que main está atualizada
```
git pull origin main
```
### 5. Trazer a master para dentro da main (merge)
```
git merge master
```

♾️ Isso junta o conteúdo da master dentro da main.

⚠️ Se aparecer conflito

### Depois do merge:
```
git status
```
Abra os arquivos conflitantes no VS Code, resolva manualmente.

Depois:
```
git add .
```
```
git commit -m "Resolvendo conflitos entre main e master"
```
### 6. Conferir se está tudo certo
```
git log --oneline --graph --all
```
### 7. Subir a main atualizada para o GitHub
```
git push origin main
```
### 8. (OPCIONAL MAS RECOMENDADO) Apagar a master
Apagar local:
```
git branch -d master
```
Apagar no GitHub:
```
git push origin --delete master
```

🤌 Dica importante 

Antes de apagar a master, sempre garanta:
```
git log --oneline --graph --all
```
Pra ver se tudo realmente foi integrado.


-----

<img width="333" height="333" alt="image" src="https://github.com/user-attachments/assets/81cc7675-4ed5-47f4-ba0c-0b94466b2057" />



