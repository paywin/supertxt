# SuperTXT · Caractere Studio

Estúdio ASCII no navegador para transformar imagens, vídeos e uma aba compartilhada em caracteres coloridos.

## Executar

Abra `index.html` no Chrome ou Edge. Para servir localmente, execute na pasta do projeto:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Acesse http://localhost:8000. Não há instalação de dependências nem etapa de build.

## Recursos

- Upload e arraste de imagens e vídeos compatíveis com o navegador.
- Densidade de 60 a 500 colunas, contraste, brilho e inversão.
- Paletas original, verde, preto e branco e âmbar; caracteres clássicos, binários, blocos e detalhados.
- Exportação PNG com lado maior de 3840 pixels e TXT sem cores.
- Gravação da saída em tempo real, sem áudio, em formato suportado pelo navegador.
- Demonstração animada gerada localmente.

## Street View

Na seção Street View, pesquise um endereço e abra o Google Maps. Entre no Street View no Maps usando o boneco amarelo. Volte ao estúdio, clique em **Compartilhar aba do Maps** e escolha a aba do Google Maps no seletor do navegador. Use as janelas lado a lado para navegar no Maps e acompanhar a conversão no estúdio.

A integração usa captura de aba autorizada pelo usuário; não utiliza a API do Google. A navegação ocorre no Maps, não no canvas ASCII. Captura requer suporte do navegador e contexto seguro (HTTPS ou localhost); recomenda-se Chrome ou Edge no computador. Navegadores móveis e visualizadores embutidos podem não oferecer captura.

## Arquivos e privacidade

As mídias são processadas localmente e não são enviadas a um servidor. A interface carrega fontes do Google Fonts; o Maps requer internet. Vídeos dependem dos codecs instalados no navegador; MP4 H.264 é uma opção compatível. PNG em 4K aumenta a resolução de saída, mas o detalhe depende da fonte e da densidade escolhida. Densidades elevadas podem reduzir o desempenho.

## Validação

```sh
node --check app.js
node tests/verify.cjs
```

O teste usa um contexto Canvas simulado e verifica dimensões, mapeamento de luminosidade, densidade, paleta, inversão, TXT, abas e restauração dos ajustes. Captura, reprodução e gravação ainda precisam ser verificadas em um navegador real.

## Hospedagem

Site estático: publique `index.html`, `style.css` e `app.js` em qualquer hospedagem HTTPS. Para GitHub Pages, configure **Settings → Pages → Deploy from a branch → main → / (root)**. Enviar o código ao repositório não ativa o Pages automaticamente.
