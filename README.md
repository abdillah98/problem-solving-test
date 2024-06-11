# Balanced Bracket Checker

## Deskripsi
Fungsi ini memeriksa apakah sebuah string yang terdiri dari bracket `(`, `)`, `{`, `}`, `[` dan `]` adalah seimbang atau tidak. Bracket dikatakan seimbang jika setiap bracket pembuka memiliki bracket penutup yang sesuai dan dalam urutan yang benar.

## Contoh
- Input: `{ [ ( ) ] }`
  Output: `YES`
- Input: `{ [ ( ] ) }`
  Output: `NO`
- Input: `{ ( ( [ ] ) [ ] ) [ ] }`
  Output: `YES`

## Aturan
1. Karakter yang diperbolehkan: `(`, `)`, `{`, `}`, `[`, `]`.
2. Bracket dapat dipisahkan dengan atau tanpa whitespace.
3. Fungsi mengembalikan `YES` jika bracket seimbang, `NO` jika tidak.


## Implementasi
```
function isBalancedBracket(s) {
  // Stack untuk menyimpan bracket pembuka
  const stack = [];
  
  // Map untuk mencocokkan bracket pembuka dan penutup
  const bracketMap = {
      '(': ')',
      '{': '}',
      '[': ']'
  };
  
  // Set karakter pembuka
  const openBrackets = new Set(['(', '{', '[']);
  
  // Loop melalui setiap karakter dalam string, abaikan whitespace
  for (const char of s.replace(/\s+/g, '')) {
      if (openBrackets.has(char)) {
          // Jika karakter adalah bracket pembuka, tambahkan ke stack
          stack.push(char);
      } else if (Object.values(bracketMap).includes(char)) {
          // Jika karakter adalah bracket penutup, periksa apakah stack kosong atau bracket terakhir tidak sesuai
          if (stack.length === 0 || bracketMap[stack.pop()] !== char) {
              return "NO";
          }
      }
  }
  
  // Periksa apakah semua bracket pembuka telah ditutup
  return stack.length === 0 ? "YES" : "NO";
}
```

## Penjelasan
- Mengabaikan Whitespace: String input diubah menggunakan s.replace(/\s+/g, '') untuk menghapus semua whitespace sebelum memeriksa keseimbangan bracket.
- Loop Melalui String: Setelah whitespace dihapus, loop melalui setiap karakter untuk memeriksa bracket pembuka dan penutup.
- Mengecek Bracket Penutup: Pastikan bracket penutup mencocokkan bracket pembuka terakhir yang ada di stack. Jika tidak, return "NO".
- Akhir Loop: Jika stack kosong setelah loop, return "YES", jika tidak, return "NO"

## Kompleksitas
- Waktu: Kompleksitas waktu tetap 𝑂(𝑛), di mana 𝑛 adalah panjang string setelah whitespace dihapus.
- Ruang: Kompleksitas ruang juga tetap 𝑂(𝑛) dalam kasus terburuk, di mana semua karakter dalam string adalah bracket pembuka dan harus disimpan dalam stack.