// Function ke-2 untuk menjumlahkan angka genap pada array
const sumEvenNumbers = (arr) => {
  return arr.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
};

// Function ke-1 untuk menghasilkan array integer dari 0 hingga n dan menjumlahkan angka genap
const generateAndSumArray = (n) => {
  // validasi input agar pastikan n adalah integer positif
  if (!Number.isInteger(n) || n < 0) {
    return "Input harus berupa integer positif";
  }

  // menggunakan method Array.from untuk menghasilkan array dengan nilai dari 0 hingga n
  const arr = Array.from({length: n+1}, (_, i) => i);

  // memanggil function sumEvenNumbers dengan menggunakan method chaining pada array arr
  const sum = arr.sumEvenNumbers();
  
  // mengembalikan hasil jumlah angka genap
  return sum;
};

// menambahkan method sumEvenNumbers ke dalam prototype array
Array.prototype.sumEvenNumbers = sumEvenNumbers;

