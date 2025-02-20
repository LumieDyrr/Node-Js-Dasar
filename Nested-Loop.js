function checkPrime(value) {
    value = parseInt(value);
    if (isNaN(value) || value < 2) {
        alert("Masukkan angka yang valid dan lebih besar dari 1");
        return;
    }

    let isPrime = true;
    for (let j = 2; j <= value; j++) {
        if (value % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        alert(value + " adalah bilangan prima");
    } else {
        alert(value + " bukan bilangan prima");
    }
}

let input = prompt("Masukkan angka");
checkPrime(input);
