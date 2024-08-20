

# Portfólio Interativo

Bem-vindo ao meu portfólio! Este é um espaço para compartilhar meu trabalho e conquistas de uma maneira interativa e visualmente interessante.

## 🚀 Descrição

Este portfólio apresenta uma animação de olho interativo que segue o cursor do mouse. Embora ainda esteja em desenvolvimento, você pode encontrar links importantes para me conectar e explorar meus projetos futuros.

## 🔗 Links Importantes

- **[GitHub](https://github.com/seu-usuario)**: Veja meus repositórios e projetos mais recentes.
- **[LinkedIn](https://www.linkedin.com/in/seu-perfil)**

## 🛠️ Estrutura do Projeto

- **`index.html`**: Arquivo principal da página com a estrutura HTML e links para os arquivos CSS e JS.
- **`style.css`**: Contém os estilos CSS para a animação do olho e layout da página.
- **`script.js`**: Código JavaScript para controlar a animação do olho e a interação com o cursor.

## 🖼️ Visual

### Olho Animado

A animação do olho é feita com CSS e segue o movimento do cursor do mouse. Após 10 segundos, a pupila recentraliza e a animação do olho volta a ser exibida.

### Ícones de Redes Sociais

Os ícones de redes sociais são carregados dinamicamente e estão localizados no canto inferior direito da página. Eles fornecem links diretos para meu GitHub e LinkedIn.

### Text Container

O contêiner de texto pode ser usado para exibir informações adicionais ou futuros projetos, atualmente está configurado para exibir um iframe.

## 🧩 Personalização

1. **Atualize os Links:**
   - Substitua os links para GitHub e LinkedIn com os URLs apropriados para seus perfis.

2. **Modifique o Layout:**
   - Ajuste o CSS no arquivo `style.css` para alterar a aparência do olho e a disposição dos ícones de redes sociais.

3. **Adicione Conteúdos ao Iframe:**
   - Altere o `src` do iframe no arquivo `index.html` para carregar diferentes conteúdos no futuro.

## 📜 Código

Aqui está um trecho do código para o olho animado e os ícones das redes sociais:

```html
<div class="eye">
    <div class="shut">
        <span></span>
    </div>
    <div class="pupil"></div>
</div>

<div id="social-icons-container"></div>
```

```css
.eye {
    width: 200px;
    height: 200px;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    border-radius: 75% 0;
    overflow: hidden;
    cursor: pointer;
}

.pupil {
    width: 40px;
    height: 40px;
    background: #222f3e;
    border-radius: 50%;
    border: 20px solid #576574;
    position: absolute;
    top: 30%;
    left: 30%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    animation: lookAround 10s infinite alternate ease-in-out;
}
```

```javascript
fetch('social-icons.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('social-icons-container').innerHTML = data;
    });
```

## 📝 Licença

Este projeto está disponível sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

Você pode ajustar qualquer seção conforme necessário para melhor refletir seu conteúdo e estilo!
