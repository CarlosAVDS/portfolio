const projetos = [
    {
        'molib': "🎬 React TMDB API Study\r\nProjeto desenvolvido com React.js, JavaScript e CSS para consumir a TMDB API e exibir filmes populares, detalhes e imagens em tempo real. O objetivo foi praticar integração com APIs REST, manipulação de estados com useState e useEffect, roteamento com React Router e criação de componentes reutilizáveis para exibição dinâmica de conteúdo.\r\n\r\n🔧 Tecnologias: React, JavaScript (ES6+), TMDB API, React Router, CSS\r\n🎯 Destaques: Consumo de API externa, renderização condicional, navegação por rotas e exibição de dados dinâmicos"

    },
    {
        'quiz': "🎯 React Quiz\r\nUm aplicativo interativo de perguntas e respostas desenvolvido com React.js, JavaScript e CSS Modules. O objetivo é testar conhecimentos do usuário em tempo real, exibindo feedback imediato e pontuação final.\r\nEste projeto reforça habilidades com componentes funcionais, hooks (useState) e manipulação de estados e props.\r\n\r\n🔧 Tecnologias: React, JavaScript, CSS Modules\r\n📚 Destaques: Navegação por etapas, lógica condicional, UI reativa"
    },
    { 'box': "🌫️ Gerador de Box-Shadow\r\nFerramenta visual desenvolvida com HTML, CSS e JavaScript, que permite ao usuário criar sombreamentos (box-shadow) personalizados para elementos em CSS, com visualização em tempo real e código pronto para copiar.\r\n\r\nEste projeto reforça conceitos de manipulação do DOM, eventos em JavaScript e estilização dinâmica, sendo ideal para praticar interações com formulários e propriedades CSS.\r\n\r\n🔧 Tecnologias: HTML, CSS, JavaScript\r\n🎯 Destaques: Interface interativa, pré-visualização ao vivo, geração automática de código" },
    { 'qr': "📱 Gerador de QR Code\r\nAplicação simples e funcional construída com HTML, CSS e JavaScript, que gera códigos QR dinâmicos a partir de qualquer link inserido pelo usuário. Ideal para praticar integração com bibliotecas externas e manipulação de eventos.\r\n\r\nO projeto utiliza a biblioteca QRCode.js, permitindo ao usuário visualizar e baixar o QR Code em tempo real, com foco em experiência de usuário (UX) e funcionalidade prática.\r\n\r\n🔧 Tecnologias: HTML, CSS, JavaScript, QRCode.js\r\n🎯 Destaques: Geração dinâmica de QR Code, download da imagem, input validado e responsivo" },
    { 'huddle': "📄 Landing Page Huddle\r\nPágina institucional desenvolvida com HTML e CSS, inspirada em desafios do Frontend Mentor. O foco está na criação de uma interface limpa, responsiva e moderna, seguindo boas práticas de estrutura semântica e design.\r\n\r\nO projeto reforça habilidades em layout com Flexbox, tipografia responsiva, uso de Google Fonts e adaptação visual para diferentes tamanhos de tela.\r\n\r\n🔧 Tecnologias: HTML5, CSS3\r\n🎯 Destaques: Design moderno, responsividade, boas práticas de HTML semântico" },
    { 'hdc': "🌐 HDC Host\r\nLanding page fictícia para uma empresa de hospedagem de sites, desenvolvida com HTML5 e CSS3. O objetivo do projeto é simular um site corporativo moderno, com foco em design responsivo, estrutura semântica e chamadas para ação bem posicionadas.\r\n\r\nEssa página demonstra domínio de layout com Flexbox, organização de seções informativas e estilo visual clean, sendo ideal para apresentação de serviços ou produtos digitais.\r\n\r\n🔧 Tecnologias: HTML5, CSS3\r\n🎯 Destaques: Layout responsivo, seções bem estruturadas, design institucional moderno" }]


//ELEMENTOS
const darkSwitch = document.querySelector('#checkbox')
const logo = document.getElementById('logo')
//Modal switch
const modal = document.querySelector('#modal')
const closeModal = document.querySelector('#close-modal')
const modalcont = document.querySelector('#modal-container')
const card = document.querySelectorAll('.card-box')
const projTitle = document.querySelector('#proj-title')
const projVideo = document.querySelector('#proj-vd')
const player = document.querySelector('#video')
const icons = document.querySelector('#icons-used')
const projectDesc = document.querySelector('#proj-desc')
const codeButton = document.querySelector('#git-button')
const codeLink = document.querySelector('#git-link')
const deployButton = document.querySelector('#deploy-button')
const deployLink = document.querySelector('#deploy-link')
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
//Mobile menu
const btnMobile = document.getElementById('menu-button')
const nav = document.getElementById('nav-menu');
const navMenu = document.getElementById('nav-itens')

//Dark-mode checagem no load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    darkSwitch.setAttribute('checked', 'true');
}

//Functions
function darkHandler() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
};

function modalHandler(modal) {
    let currentText = modal;

    switch (currentText) {

        case "Movies Lib":
            projTitle.textContent = currentText;
            projectDesc.innerHTML = projetos[0].molib.replace(/(?:\r\n|\r|\n)/g, '<br>');
            projVideo.setAttribute("src", "assets/videos/movies.mp4");
            icons.innerHTML = ['<i class="fa-brands fa-react" title="reactjs"></i>' +
                '<i class="fa-brands fa-html5" title="html"></i>' +
                '<i class="fa-brands fa-css3-alt" title="css"></i>' +
                '<i class="fa-brands fa-square-js" title="javascript"></i>']
            player.load();

            setTimeout(() => {
                codeLink.setAttribute("href", "https://github.com/CarlosAVDS/react-tmdbapi-study");
                deployLink.setAttribute("href", "https://molib-tmdb.vercel.app/");
                codeButton.removeAttribute("disabled");
                deployButton.removeAttribute("disabled");
            }, 300)
            break;
        case "Quiz app":
            projTitle.textContent = currentText;
            projectDesc.innerHTML = projetos[1].quiz.replace(/(?:\r\n|\r|\n)/g, '<br>');
            projVideo.setAttribute("src", "assets/videos/quiz-react.mp4");
            icons.innerHTML = ['<i class="fa-brands fa-react" title="reactjs"></i>' +
                '<i class="fa-brands fa-html5" title="html"></i>' +
                '<i class="fa-brands fa-css3-alt" title="css"></i>' +
                '<i class="fa-brands fa-square-js" title="javascript"></i>']
            player.load();

            setTimeout(() => {
                codeLink.setAttribute("href", "https://github.com/CarlosAVDS/react-quiz");
                deployLink.setAttribute("href", "https://carlosavds.github.io/react-quiz/");
                codeButton.removeAttribute("disabled");
                deployButton.removeAttribute("disabled");
            }, 300)
            break;

        case "Gerador de Box Shadow":
            projTitle.textContent = currentText;
            projectDesc.innerHTML = projetos[2].box.replace(/(?:\r\n|\r|\n)/g, '<br>');
            projVideo.setAttribute("src", "assets/videos/box-shadow-gen.mp4");
            icons.innerHTML = ['<i class="fa-brands fa-html5" title="html"></i>' +
                '<i class="fa-brands fa-css3-alt" title="css"></i>' +
                '<i class="fa-brands fa-square-js" title="javascript"></i>']
            player.load();

            setTimeout(() => {
                codeLink.setAttribute("href", "https://github.com/CarlosAVDS/Gerador-Box-Shadow-");
                deployLink.setAttribute("href", "https://carlosavds.github.io/Gerador-Box-Shadow-/");
                codeButton.removeAttribute("disabled");
                deployButton.removeAttribute("disabled");
            }, 300)
            break;

        case "Gerador de QR CODE":
            projTitle.textContent = currentText;
            projectDesc.innerHTML = projetos[3].qr.replace(/(?:\r\n|\r|\n)/g, '<br>');
            projVideo.setAttribute("src", "assets/videos/qr-code-gen.mp4");
            icons.innerHTML = ['<i class="fa-brands fa-html5" title="html"></i>' +
                '<i class="fa-brands fa-css3-alt" title="css"></i>' +
                '<i class="fa-brands fa-square-js" title="javascript"></i>']
            player.load();

            setTimeout(() => {
                codeLink.setAttribute("href", "https://github.com/CarlosAVDS/qrcode-generator");
                deployLink.setAttribute("href", "https://carlosavds.github.io/qrcode-generator/");
                codeButton.removeAttribute("disabled");
                deployButton.removeAttribute("disabled");
            }, 300)
            break;

        case "Desafio Landing Page Huddle":
            projTitle.textContent = currentText;
            projectDesc.innerHTML = projetos[4].huddle.replace(/(?:\r\n|\r|\n)/g, '<br>');
            projVideo.setAttribute("src", "assets/videos/huddle-chall.mp4");
            icons.innerHTML = ['<i class="fa-brands fa-html5" title="html"></i>' +
                '<i class="fa-brands fa-css3-alt" title="css"></i>' +
                '<i class="fa-brands fa-square-js" title="javascript"></i>']
            player.load();

            setTimeout(() => {
                codeLink.setAttribute("href", "https://github.com/CarlosAVDS/Landing-Page-Huddle");
                deployLink.setAttribute("href", "https://carlosavds.github.io/Landing-Page-Huddle/");
                codeButton.removeAttribute("disabled");
                deployButton.removeAttribute("disabled");
            }, 300)
            break;

        case "Hdc Host":
            projTitle.textContent = currentText;
            projectDesc.innerHTML = projetos[5].hdc.replace(/(?:\r\n|\r|\n)/g, '<br>');
            projVideo.setAttribute("src", "assets/videos/hdc-host.mp4");
            icons.innerHTML = ['<i class="fa-brands fa-html5" title="html"></i>' +
                '<i class="fa-brands fa-css3-alt" title="css"></i>' +
                '<i class="fa-brands fa-square-js" title="javascript"></i>']
            player.load();

            setTimeout(() => {
                codeLink.setAttribute("href", "https://github.com/CarlosAVDS/hdc-host");
                deployLink.setAttribute("href", "https://carlosavds.github.io/hdc-host/");
                codeButton.removeAttribute("disabled");
                deployButton.removeAttribute("disabled");
            }, 300)
            break;

        default:
            projTitle.textContent = '404';
            projectDesc.textContent = 'Algo inexperado aconteceu';
            projVideo.src = '';
            break;
    }
}



function toggleMenu(event) {
    if (event.type === 'touchstart') {
        event.preventDefault();
        nav.classList.toggle('active');
    }
}


//EVENTOS
darkSwitch.addEventListener('click', () => {
    darkHandler();
})

card.forEach(element => {
    element.addEventListener('click', event => {
        modalHandler(element.textContent.replace(/[^a-zA-Z0-9]\s+/g, ''));
        modal.showModal();
    })
})

modal.addEventListener('click', () => modal.close());

modalcont.addEventListener('click', (event) => event.stopPropagation());

closeModal.addEventListener('click', () => {
    modal.close();
})

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

logo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

document.addEventListener('click', e => {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
})
