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

// Contoh penggunaan
console.log(isBalancedBracket("{ [ ( ) ] }")); // Output: YES
console.log(isBalancedBracket("{ [ ( ] ) }")); // Output: NO
console.log(isBalancedBracket("{ ( ( [ ] ) [ ] ) [ ] }")); // Output: YES
