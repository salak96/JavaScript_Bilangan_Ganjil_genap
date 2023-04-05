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
function sumGenap(numbers) {
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
});