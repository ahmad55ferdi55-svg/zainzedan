// Fungsi utama untuk konversi suhu
function convertTemp(unit) {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');

    if (unit === 'C') {
        // Konversi Celsius ke Fahrenheit
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            // Rumus: F = (C * 9/5) + 32
            const fahrenheit = (celsius * 9/5) + 32;
            // Menampilkan hasil dengan 2 angka di belakang koma
            fahrenheitInput.value = fahrenheit.toFixed(2);
        } else {
            // Jika input Celsius dikosongkan, kosongkan juga Fahrenheit
            fahrenheitInput.value = "";
        }
    } else if (unit === 'F') {
        // Konversi Fahrenheit ke Celsius
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            // Rumus: C = (F - 32) * 5/9
            const celsius = (fahrenheit - 32) * 5/9;
            // Menampilkan hasil dengan 2 angka di belakang koma
            celsiusInput.value = celsius.toFixed(2);
        } else {
            // Jika input Fahrenheit dikosongkan, kosongkan juga Celsius
            celsiusInput.value = "";
        }
    }
}

// Fungsi untuk mereset semua input
function clearInputs() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
}
