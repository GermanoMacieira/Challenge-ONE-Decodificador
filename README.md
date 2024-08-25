# Decodificador de Texto

Este projeto é uma aplicação web simples que permite aos usuários criptografar e descriptografar mensagens de texto, substituindo caracteres específicos por palavras definidas. A interface possui um campo para inserir texto, botões para realizar a criptografia/descriptografia, e um campo de saída onde o texto processado é exibido. Além disso, há um botão para copiar o texto criptografado ou descriptografado para a área de transferência.

## Funcionalidades

- **Criptografia:** Converte as letras "a", "e", "i", "o" e "u" para as palavras correspondentes "ai", "enter", "imes", "ober" e "ufat".
- **Descriptografia:** Reverte o processo de criptografia, convertendo as palavras de volta para as letras originais.
- **Copiar Texto:** Permite copiar o texto criptografado ou descriptografado para a área de transferência.

## Estrutura do Projeto

- `index.html`: Estrutura HTML da aplicação, contendo os elementos de interface.
- `style.css`: Estilo da aplicação, responsável pela aparência dos elementos.
- `script.js`: Script JavaScript responsável pela lógica de criptografia, descriptografia e cópia do texto.

## Como Executar o Projeto

### Pré-requisitos

- Navegador web atualizado (Google Chrome, Mozilla Firefox, Microsoft Edge, etc.)

### Passos

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/GermanoMacieira/Challenge-ONE-Decodificador.git
   ```
2. **Navegar até o diretório do projeto:**
   ```bash
   cd Challenge-ONE-Decodificador
   ```
3. **Abrir o arquivo `index.html` no navegador:**
   - Você pode abrir o arquivo diretamente no navegador ou usar uma extensão como "Live Server" no VSCode para uma melhor experiência de desenvolvimento.

4. **Utilizar a aplicação:**
   - Digite o texto no campo da esquerda.
   - Clique em "Criptografar" para transformar o texto.
   - Clique em "Descriptografar" para reverter o texto criptografado.
   - Clique em "Copiar" para copiar o texto resultante.

## Possíveis Vulnerabilidades

1. **Injeção de código via `textarea`:** 
   - A aplicação não faz sanitização do input do usuário, o que pode permitir a injeção de scripts maliciosos se for integrada com outras funcionalidades ou servidores.

2. **Navegador antigo ou não compatível:**
   - O uso de `replaceAll` pode não ser suportado em navegadores mais antigos, causando falhas na execução do código.

3. **Uso de `innerHTML`:**
   - Não utilizado diretamente, mas vale ressaltar que qualquer manipulação futura de `innerHTML` para exibir mensagens pode abrir a aplicação a vulnerabilidades de Cross-Site Scripting (XSS).

4. **Ausência de tratamento de erros:**
   - O código JavaScript não possui tratamento de exceções, o que pode resultar em comportamento inesperado se o usuário fornecer entradas inválidas ou se ocorrer algum erro durante a execução das funções.

## Considerações Finais

Este projeto é um exemplo básico de como implementar uma funcionalidade de criptografia e descriptografia de textos em uma aplicação web. Para um uso mais seguro e robusto em ambientes de produção, é recomendável implementar validações de entrada, sanitização de dados e tratamento de erros adequado.
