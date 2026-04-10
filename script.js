function convertCurrency(amount, fromCurrency, toCurrency) {
    const rates = {
        RUB: 92.50,
        USD: 1.00,
        EUR: 0.92
    };

    if (typeof amount !== 'number' || !Number.isFinite(amount) || amount < 0) {
        return null;
    }

    const from = String(fromCurrency).toUpperCase();
    const to = String(toCurrency).toUpperCase();

    if (!(from in rates) || !(to in rates)) {
        return null;
    }

    const converted = amount * (rates[to] / rates[from]);
    return Math.round(converted * 100) / 100;
}

// Тесты (выведутся в консоль браузера)
console.log("✅ Тесты конвертации:");
console.log(convertCurrency(1000, 'RUB', 'USD')); // 10.81
console.log(convertCurrency(1000, 'RUB', 'EUR')); // 9.95
console.log(convertCurrency(100, 'USD', 'EUR'));  // 92.00
console.log(convertCurrency(100, 'RUB', 'JPY'));  // null