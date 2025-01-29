function openTimer() {

    const newWindow = window.open("", "_blank", "width=400,height=200");
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cronómetro</title>
            <style>
                body {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                }
                .mensaje {
                    font-size: 18px;
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 20px;
                }
                #timer {
                    font-size: 2em;
                    font-weight: bold;
                    color: #007bff;
                }
            </style>
        </head>
        <body>
            <!-- Letrero junto al cronómetro -->
            <div class="mensaje">Próximo camión:</div>
            <div id="timer">05:00</div>
            <script>
                let time = 300; // 5 minutos en segundos
                const timerElement = document.getElementById('timer');

                function updateTimer() {
                    const minutes = Math.floor(time / 60);
                    const seconds = time % 60;
                    timerElement.textContent = \`\${String(minutes).padStart(2, '0')}:\${String(seconds).padStart(2, '0')}\`;
                    if (time > 0) {
                        time--;
                        setTimeout(updateTimer, 1000);
                    } else {
                        timerElement.textContent = "¡Tiempo terminado!";
                    }
                }

                updateTimer();
            <\/script>
        </body>
        </html>
    `);
    newWindow.document.close();
}