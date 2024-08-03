function generateKeys() {
    const keysContainer = document.getElementById('keys');
    keysContainer.innerHTML = '';

    for (let i = 0; i < 4; i++) {
        const key = generateKey();
        const keyElement = document.createElement('div');
        keyElement.className = 'key';
        keyElement.textContent = key;
        keysContainer.appendChild(keyElement);
    }
}

function generateKey() {
    const parts = ['BIKE'];
    parts.push(generatePart(3));
    parts.push(generatePart(4));
    parts.push(generatePart(4));
    parts.push(generatePart(3));
    return parts.join('-');
}

function generatePart(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let part = '';
    for (let i = 0; i < length; i++) {
        part += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return part;
}

function handleGenerateKeys() {
    generateKeys();
    showAd();
    disableButton();
}

function disableButton() {
    const button = document.getElementById('generateButton');
    button.disabled = true;
    setTimeout(() => {
        button.disabled = false;
        button.textContent = 'Generate keys';
    }, 60000);
    button.textContent = 'Please wait...';
}

// from here

//to here

function showAd() {
    // Add code to show an interstitial ad here if you have one
    alert("Ad would be shown here.");
}