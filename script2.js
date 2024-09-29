document.getElementById('convertirBtn').addEventListener('click', function(event) {
    event.preventDefault();

    
    const celsius = parseFloat(document.getElementById('celsius-input').value);

    
    if (isNaN(celsius)) {
        document.getElementById('resultado').innerText = "Por favor ingrese un valor válido.";
        return;
    }

    
    const conversion = document.querySelector('input[name="conversion"]:checked').value;

    
    let resultado;

    
    if (conversion === 'fahrenheit') {
        resultado = (celsius * 9/5) + 32;
        document.getElementById('resultado').innerText = `${celsius} °C = ${resultado.toFixed(2)} °F`;
    } else if (conversion === 'kelvin') {
        resultado = celsius + 273.15;
        document.getElementById('resultado').innerText = `${celsius} °C = ${resultado.toFixed(2)} K`;
    }
});
