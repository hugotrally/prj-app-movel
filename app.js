// Simulando uma taxa de conversão fixa
const exchangeRates = {
    BRL: 1, // Base BRL
    USD: 5.0 // Exemplo: 1 USD = 5 BRL
};

// Referências aos elementos do DOM
const form = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');

// Lógica de adicionar um novo item na lista
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const value = parseFloat(document.getElementById('value').value);
    const currency = document.getElementById('currency').value;

    // Conversão para BRL, se necessário
    const convertedValue = value * exchangeRates[currency];
    const total = quantity * convertedValue;

    // Criação do item de despesa na lista
    const li = document.createElement('li');
    li.textContent = `${description}: ${quantity} x ${value.toFixed(2)} ${currency} = ${total.toFixed(2)} BRL`;
    expenseList.appendChild(li);

    // Limpar os campos do formulário
    form.reset();
});
