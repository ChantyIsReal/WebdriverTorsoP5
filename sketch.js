let blueRectX, blueRectY, blueRectWidth, blueRectHeight;
let redRectX, redRectY, redRectWidth, redRectHeight;
let interval;
let slideCount = 1;

function setup() {
  createCanvas(640, 480);
  background(255); // Define o fundo como branco

  // Inicializa as posições e tamanhos dos retângulos
  initializeRectangles();

  // Define o intervalo para mudar os retângulos a cada segundo
  interval = setInterval(changeRectangles, 1000); // Mudança a cada 1 segundo
}

function initializeRectangles() {
  // Define posições iniciais dos retângulos
  blueRectX = random(width);
  blueRectY = random(height);
  redRectX = random(width);
  redRectY = random(height);

  // Define tamanhos iniciais dos retângulos
  blueRectWidth = random(50, 375);
  blueRectHeight = random(50, 375);
  redRectWidth = random(50, 375);
  redRectHeight = random(50, 375);

  // Desenha os retângulos iniciais
  drawRectangles();
}

function changeRectangles() {
  // Limpa o fundo branco
  background(255);

  // Atualiza as posições e tamanhos dos retângulos
  updateRectangles();

  // Redesenha os retângulos com as novas posições e tamanhos
  drawRectangles();

  // Atualiza o contador de slides
  slideCount++;

  // Redesenha o texto com o número do slide
  drawSlideText();
}

function updateRectangles() {
  // Atualiza as posições dos retângulos
  blueRectX = random(width);
  blueRectY = random(height);
  redRectX = random(width);
  redRectY = random(height);

  // Atualiza os tamanhos dos retângulos
  blueRectWidth = random(50, 300);
  blueRectHeight = random(50, 300);
  redRectWidth = random(50, 300);
  redRectHeight = random(50, 300);
}

function drawRectangles() {
  // Desenha o retângulo azul
  fill(0, 0, 255);
  noStroke();
  rect(blueRectX, blueRectY, blueRectWidth, blueRectHeight);

  // Desenha o retângulo vermelho
  fill(255, 0, 0);
  noStroke();
  rect(redRectX, redRectY, redRectWidth, redRectHeight);
}

function drawSlideText() {
  fill(0);
  textSize(18);
  textAlign(LEFT, BOTTOM);
  text(`aqua.flv - Slide ${slideCount}`, 10, height - 10);
}

function keyPressed() {
  clearInterval(interval); // Pára a mudança dos retângulos quando uma tecla é pressionada
}
