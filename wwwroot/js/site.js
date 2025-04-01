// Tela de introdução - Aparece 1x por sessão
document.addEventListener('DOMContentLoaded', function () {
    const introOverlay = document.getElementById('introOverlay');
    const mainContent = document.getElementById('mainContent');
    const gameSection = document.getElementById('gameSection');

    // Verifica se já foi exibido nesta sessão
    const introShown = sessionStorage.getItem('introShown');

    if (!introShown) {
        // Mostra a introdução (primeira vez na sessão)
        introOverlay.style.display = 'flex';

        // Remove a introdução ao clicar
        introOverlay.addEventListener('click', function () {
            introOverlay.style.opacity = '0';
            setTimeout(function () {
                introOverlay.style.display = 'none';
                sessionStorage.setItem('introShown', 'true');

                // Mostra o conteúdo principal
                mainContent.style.display = 'block';
                gameSection.style.display = 'block';

                // Inicia o jogo
                setTimeout(initGame, 100);
            }, 500);
        });
    } else {
        // Se já viu a introdução nesta sessão
        introOverlay.style.display = 'none';
        mainContent.style.display = 'block';
        gameSection.style.display = 'block';
        setTimeout(initGame, 100);
    }
});

    function initGame() {
        const gameArea = document.getElementById('gameArea');
        const creature = document.getElementById('creature');
        const cursor = document.getElementById('cursor');
        const scoreDisplay = document.querySelector('#score span');
        const startButton = document.getElementById('startGame');

        let gameActive = false;
        let score = 0;
        let gameInterval;

        // Posição inicial do bichinho
        let creatureX = Math.random() * (gameArea.offsetWidth - 40);
        let creatureY = Math.random() * (gameArea.offsetHeight - 40);

        // Mostra o cursor personalizado quando o mouse entra na área
        gameArea.addEventListener('mouseenter', function () {
            cursor.style.display = 'block';
        });

        // Esconde o cursor personalizado quando o mouse sai
        gameArea.addEventListener('mouseleave', function () {
            cursor.style.display = 'none';
        });

        // Inicia o jogo
        startButton.addEventListener('click', function () {
            gameActive = true;
            score = 0;
            creature.classList.remove('game-over');
            startButton.style.display = 'none';

            gameInterval = setInterval(function () {
                score++;
                scoreDisplay.textContent = score;
            }, 1000);
        });

        // Movimenta o cursor personalizado
        gameArea.addEventListener('mousemove', function (e) {
            if (!gameActive) return;

            const rect = gameArea.getBoundingClientRect();
            const x = e.clientX - rect.left - 15;
            const y = e.clientY - rect.top - 15;

            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
            moveCreature(x, y);
        });

        function moveCreature(targetX, targetY) {
            const speed = 3 + (score * 0.1);
            const dx = targetX - creatureX;
            const dy = targetY - creatureY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > 0) {
                creatureX += (dx / distance) * speed;
                creatureY += (dy / distance) * speed;
            }

            creature.style.left = creatureX + 'px';
            creature.style.top = creatureY + 'px';

            if (distance < 30) {
                endGame();
            }
        }

        function endGame() {
            gameActive = false;
            clearInterval(gameInterval);
            creature.classList.add('game-over');
            startButton.style.display = 'inline-block';

            setTimeout(() => {
                creature.classList.remove('game-over');
            }, 1000);
        }

        creature.style.left = creatureX + 'px';
        creature.style.top = creatureY + 'px';
    }

    // Inicializa tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });


// Filtragem de projetos
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const projectItems = document.querySelectorAll('[data-category]');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Atualiza o botão ativo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            // Filtra os projetos
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Inicializa os tooltips (se estiver usando Bootstrap)
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
});


// Validação e envio do formulário de contato
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Validação simples
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !subject || !message) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            // Simulação de envio (substitua por chamada AJAX real)
            alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
            contactForm.reset();

            // Exemplo de chamada AJAX real:
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                })
            })
            .then(response => response.json())
            .then(data => {
                alert('Mensagem enviada com sucesso!');
                contactForm.reset();
            })
            .catch(error => {
                alert('Ocorreu um erro ao enviar a mensagem: ' + error.message);
            });
            */
        });
    }

    // Animação para os itens de contato
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 100}ms`;
    });
});