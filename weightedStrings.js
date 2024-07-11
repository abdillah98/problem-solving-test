function weightedStrings(s, queries) {
  // Membuat set untuk menyimpan bobot unik
  const weights = new Set();
  
  // Inisialisasi variabel untuk menyimpan nilai bobot karakter sebelumnya dan jumlah pengulangan
  let prevChar = null;
  let currentWeight = 0;
  let repeatCount = 0;
  
  // Loop melalui string
  for (const char of s) {
    const charWeight = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    // console.log('charWeight', charWeight);
      
      if (char === prevChar) {
          // Jika karakter sama dengan karakter sebelumnya, tingkatkan jumlah pengulangan
          repeatCount++;
      } else {
          // Jika karakter berbeda, reset jumlah pengulangan
          repeatCount = 1;
      }
      
      // Hitung bobot substring
      currentWeight = charWeight * repeatCount;
      
      // Tambahkan bobot ke set
      weights.add(currentWeight);
      
      // Simpan karakter sekarang sebagai karakter sebelumnya
      prevChar = char;
      }
      
      // Membuat hasil berdasarkan queries
      const result = queries.map(query => weights.has(query) ? "Yes" : "No");
      // console.log('result', result)
  
  return result;
}

// Contoh penggunaan
const string = "abbcccd";
const queries = [1, 3, 9, 8];
console.log(weightedStrings(string, queries)); // Output: ["Yes", "Yes", "Yes", "No"]
