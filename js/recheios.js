// Soma dos bagulhos
const form = document.getElementById('formPersonalize');
const precoTotalSpan = document.getElementById('precoTotal');
const maxRecheios = 3;

form.addEventListener('change', () => {
  const recheiosSelecionados = [...form.querySelectorAll('input[name="recheio"]:checked')];
  if (recheiosSelecionados.length > maxRecheios) {
    // Deseleciona o último selecionado para respeitar o limite
    recheiosSelecionados[recheiosSelecionados.length - 1].checked = false;
    alert(`Você pode escolher no máximo ${maxRecheios} recheios.`);
    return;
  }

  let total = 0;

  recheiosSelecionados.forEach(input => {
    total += parseFloat(input.getAttribute('data-preco'));
  });

  const coberturaSelecionada = form.querySelector('input[name="cobertura"]:checked');
  if (coberturaSelecionada) {
    total += parseFloat(coberturaSelecionada.getAttribute('data-preco'));
  }

  const tamanhoSelecionado = form.querySelector('input[name="tamanho"]:checked');
  if (tamanhoSelecionado) {
    total += parseFloat(tamanhoSelecionado.getAttribute('data-preco'));
  }

  precoTotalSpan.textContent = total.toFixed(2).replace('.', ',');
});


// Whatsapp
document.getElementById('btnEnviarWhats').addEventListener('click', () => {
  // Captura as escolhas feitas
  const recheiosSelecionados = [...document.querySelectorAll('input[name="recheio"]:checked')].map(el => el.value);
  const coberturaSelecionada = document.querySelector('input[name="cobertura"]:checked')?.value || 'Nenhuma';
  const tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked')?.value || 'Nenhum';

  // Exemplo de valores (se você já tem, adapte aqui)
  const precosRecheio = {ganache: 10, nutella: 12, coco: 8, abacaxi: 9};
  const precosCobertura = {chocolate: 15, chantilly: 10, fondant: 20};
  const precosTamanho = {pequeno: 50, medio: 80, grande: 120};

  // Soma preços dos recheios selecionados (máx 3)
  let totalRecheios = 0;
  recheiosSelecionados.forEach(r => {
    totalRecheios += precosRecheio[r] || 0;
  });

  // Preço cobertura
  let precoCobertura = precosCobertura[coberturaSelecionada] || 0;

  // Preço tamanho
  let precoTamanho = precosTamanho[tamanhoSelecionado] || 0;

  // Total geral
  const total = totalRecheios + precoCobertura + precoTamanho;

  // Monta mensagem para WhatsApp
  const mensagem = encodeURIComponent(
    `Olá! Gostaria de fazer uma encomenda:\n` +
    `- Recheios: ${recheiosSelecionados.join(', ') || 'Nenhum'}\n` +
    `- Cobertura: ${coberturaSelecionada}\n` +
    `- Tamanho: ${tamanhoSelecionado}\n` +
    `\nTotal estimado: R$ ${total.toFixed(2)}\n` +
    `Por favor, me informe os próximos passos para finalizar.`
  );

  // Número do WhatsApp da confeitaria (coloque o seu número com código do país, ex: 55 para Brasil)
  const telefone = '5521990353042';

  // URL para abrir o WhatsApp
  const urlWhatsapp = `https://wa.me/${telefone}?text=${mensagem}`;

  // Abre o WhatsApp em nova aba
  window.open(urlWhatsapp, '_blank');
});

window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const tamanhoEscolhido = urlParams.get('tamanho');

  if (tamanhoEscolhido) {
    const radio = document.querySelector(`input[name="tamanho"][value="${tamanhoEscolhido}"]`);
    if (radio) {
      radio.checked = true;
    }
  }
});
