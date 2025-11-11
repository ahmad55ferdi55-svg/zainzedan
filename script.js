// Fungsi untuk Mengelola Tab
function showTab(tabId) {
    // Sembunyikan semua konten tab
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Hapus status 'active' dari semua tombol
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Tampilkan konten tab yang dipilih
    document.getElementById(tabId).classList.add('active');
    
    // Set status 'active' pada tombol yang diklik
    document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');

    // Reset input setiap kali tab diubah
    clearAllInputs();
}


// --- 1. Konversi Suhu (Celsius, Fahrenheit, Reamur, Kelvin) ---
function convertTemp(unit) {
    const C = document.getElementById('celsius');
    const F = document.getElementById('fahrenheit');
    const R = document.getElementById('reamur');
    const K = document.getElementById('kelvin');

    let inputVal, celsius;

    if (unit === 'C') {
        inputVal = parseFloat(C.value);
        if (isNaN(inputVal)) { clearTempInputs(); return; }
        celsius = inputVal;
    } else if (unit === 'F') {
        inputVal = parseFloat(F.value);
        if (isNaN(inputVal)) { clearTempInputs(); return; }
        // F ke C: (F - 32) * 5/9
        celsius = (inputVal - 32) * 5 / 9;
    } else if (unit === 'R') {
        inputVal = parseFloat(R.value);
        if (isNaN(inputVal)) { clearTempInputs(); return; }
        // R ke C: R * 5/4
        celsius = inputVal * 5 / 4;
    } else if (unit === 'K') {
        inputVal = parseFloat(K.value);
        if (isNaN(inputVal)) { clearTempInputs(); return; }
        // K ke C: K - 273.15
        celsius = inputVal - 273.15;
    }

    // Terapkan hasil konversi (berdasarkan nilai Celsius)
    if (unit !== 'C') C.value = celsius.toFixed(2);
    if (unit !== 'F') F.value = (celsius * 9 / 5 + 32).toFixed(2); // C ke F
    if (unit !== 'R') R.value = (celsius * 4 / 5).toFixed(2);     // C ke R
    if (unit !== 'K') K.value = (celsius + 273.15).toFixed(2);    // C ke K
}

function clearTempInputs() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('reamur').value = '';
    document.getElementById('kelvin').value = '';
}


// --- 2. Konversi Berat (Kg, Lbs, Gram) ---
function convertWeight(unit) {
    const KG = document.getElementById('kilogram');
    const LBS = document.getElementById('pound');
    const G = document.getElementById('gram');
    
    const CONV_KG_LBS = 2.20462;
    const CONV_KG_G = 1000;

    let inputVal, kilogram;

    if (unit === 'KG') {
        inputVal = parseFloat(KG.value);
        if (isNaN(inputVal)) { clearWeightInputs(); return; }
        kilogram = inputVal;
    } else if (unit === 'LBS') {
        inputVal = parseFloat(LBS.value);
        if (isNaN(inputVal)) { clearWeightInputs(); return; }
        // LBS ke KG: LBS / 2.20462
        kilogram = inputVal / CONV_KG_LBS;
    } else if (unit === 'G') {
        inputVal = parseFloat(G.value);
        if (isNaN(inputVal)) { clearWeightInputs(); return; }
        // G ke KG: G / 1000
        kilogram = inputVal / CONV_KG_G;
    }

    // Terapkan hasil konversi (berdasarkan nilai Kilogram)
    if (unit !== 'KG') KG.value = kilogram.toFixed(3);
    if (unit !== 'LBS') LBS.value = (kilogram * CONV_KG_LBS).toFixed(3); // KG ke LBS
    if (unit !== 'G') G.value = (kilogram * CONV_KG_G).toFixed(0);      // KG ke G
}

function clearWeightInputs() {
    document.getElementById('kilogram').value = '';
    document.getElementById('pound').value = '';
    document.getElementById('gram').value = '';
}


// --- 3. Konversi Jarak (Km, Mil, Meter, Cm) ---
function convertDistance(unit) {
    const KM = document.getElementById('kilometer');
    const MILE = document.getElementById('mile');
    const M = document.getElementById('meter');
    const CM = document.getElementById('centimeter');
    
    const CONV_KM_MILE = 0.621371;
    const CONV_KM_M = 1000;
    const CONV_KM_CM = 100000;

    let inputVal, kilometer;

    if (unit === 'KM') {
        inputVal = parseFloat(KM.value);
        if (isNaN(inputVal)) { clearDistanceInputs(); return; }
        kilometer = inputVal;
    } else if (unit === 'MILE') {
        inputVal = parseFloat(MILE.value);
        if (isNaN(inputVal)) { clearDistanceInputs(); return; }
        // Mil ke KM: Mil / 0.621371
        kilometer = inputVal / CONV_KM_MILE;
    } else if (unit === 'M') {
        inputVal = parseFloat(M.value);
        if (isNaN(inputVal)) { clearDistanceInputs(); return; }
        // M ke KM: M / 1000
        kilometer = inputVal / CONV_KM_M;
    } else if (unit === 'CM') {
        inputVal = parseFloat(CM.value);
        if (isNaN(inputVal)) { clearDistanceInputs(); return; }
        // CM ke KM: CM / 100000
        kilometer = inputVal / CONV_KM_CM;
    }

    // Terapkan hasil konversi (berdasarkan nilai Kilometer)
    if (unit !== 'KM') KM.value = kilometer.toFixed(4);
    if (unit !== 'MILE') MILE.value = (kilometer * CONV_KM_MILE).toFixed(4); // KM ke Mil
    if (unit !== 'M') M.value = (kilometer * CONV_KM_M).toFixed(2);         // KM ke M
    if (unit !== 'CM') CM.value = (kilometer * CONV_KM_CM).toFixed(0);      // KM ke CM
}

function clearDistanceInputs() {
    document.getElementById('kilometer').value = '';
    document.getElementById('mile').value = '';
    document.getElementById('meter').value = '';
    document.getElementById('centimeter').value = '';
}


// Fungsi untuk mereset semua input di semua tab
function clearAllInputs() {
    clearTempInputs();
    clearWeightInputs();
    clearDistanceInputs();
}

// Jalankan fungsi showTab saat halaman dimuat untuk menampilkan tab 'temp' secara default
window.onload = function() {
    showTab('temp');
};
