// JavaScript for Metric Converter

// Length Conversion
function convertLength(unitFrom, unitTo, value) {
    // Define conversion factors
    const factors = {
        'inches-millimeters': 25.4,
        'feet-meters': 0.3048,
        'yards-meters': 0.9144,
        'miles-kilometers': 1.60934
    };

    // Calculate converted value
    const factorKey = `${unitFrom}-${unitTo}`;
    if (factors.hasOwnProperty(factorKey)) {
        return value * factors[factorKey];
    } else {
        return null; // Conversion not supported
    }
}

// Area Conversion
// Implement similar functions for other conversion types

// Example usage:
// console.log(convertLength('inches', 'millimeters', 10)); // Output: 254

// Add event listeners for conversion inputs
document.addEventListener('DOMContentLoaded', function() {
    const lengthForm = document.getElementById('length-form');
    lengthForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const unitFrom = lengthForm.elements['unit-from'].value;
        const unitTo = lengthForm.elements['unit-to'].value;
        const value = parseFloat(lengthForm.elements['value'].value);
        const result = convertLength(unitFrom, unitTo, value);
        if (result !== null) {
            document.getElementById('length-result').textContent = result.toFixed(2);
        } else {
            document.getElementById('length-result').textContent = 'Conversion not supported';
        }
    });
});
