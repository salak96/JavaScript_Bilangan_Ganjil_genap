//1 function getTotal
function getTotal(number, callback) {
  //3 array argument
  let numbers = []
  //2 for loop
  for (let i = 0; i <= number; i++) {
    numbers.push(i)
  }
  return callback(numbers);
}


//   result =`Hasil penjumlahan angka genap dari 1 sampai ${number} adalah ${total}`;
//4 function sumGenap
//6 arrow function
  const sumGenap = (numbers) => {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i]
    }
  }
  return sum;
}
//5 panggil function  getTotal dan sumGenap
let total = getTotal(5, sumGenap);
console.log(total);

//tangkap pakai dom 7
let btn = document.querySelector('button')
let result = document.querySelector('#result')
btn.addEventListener('click', function () {
  let number = document.querySelector('#inputValue').value
  //hanya angka soal ke 8
  if (isNaN(number)) {
    alert('Input harus angka')
  }
  
  result.innerHTML =`Hasil penjumlahan angka genap dari 1 sampai  ${number}` + " = " +  getTotal(number, sumGenap);
  //validasi angka negatif
  if (number === 0) {
    result.innerHTML = `Hasil penjumlahan angka genap dari 1 sampai  ${number}` + " = " + 0;
  }else if (number < 0) {
    result.innerHTML = `Hasil penjumlahan angka genap dari 1 sampai  ${number}` + " = " + "Angka negatif tidak dihitung";
  }

});

