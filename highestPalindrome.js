function highestPalindromeHelper(s, l, r, k, changes) {
  if (l > r) {
      // Jika sudah melewati tengah, periksa apakah semua bracket pembuka telah ditutup
      return { str: s, changes: changes };
  }

  if (s[l] !== s[r]) {
      if (k <= 0) {
          return { str: s, changes: -1 };
      }

      // Pilih karakter yang lebih besar antara s[l] dan s[r]
      const maxChar = s[l] > s[r] ? s[l] : s[r];

      s = s.substring(0, l) + maxChar + s.substring(l + 1);
      s = s.substring(0, r) + maxChar + s.substring(r + 1);

      changes++;
      k--;
  }

  return highestPalindromeHelper(s, l + 1, r - 1, k, changes);
}

function maximizePalindrome(s, l, r, k, changes) {
  if (l > r) {
      return { str: s, changes: changes };
  }

  if (l === r && k > 0 && s[l] !== '9') {
      s = s.substring(0, l) + '9' + s.substring(l + 1);
      changes++;
      k--;
  }

  if (s[l] !== '9') {
      if (changes[l] || changes[r]) {
          if (k > 0) {
              s = s.substring(0, l) + '9' + s.substring(l + 1);
              s = s.substring(0, r) + '9' + s.substring(r + 1);
              k--;
          }
      } else if (k >= 2) {
          s = s.substring(0, l) + '9' + s.substring(l + 1);
          s = s.substring(0, r) + '9' + s.substring(r + 1);
          k -= 2;
      }
  }

  return maximizePalindrome(s, l + 1, r - 1, k, changes);
}

function highestPalindrome(s, k) {
  let { str: palindrome, changes } = highestPalindromeHelper(s, 0, s.length - 1, k, 0);
  if (changes === -1) {
      return "-1";
  }

  let result = maximizePalindrome(palindrome, 0, palindrome.length - 1, k, []);
  return result.str;
}

// Contoh penggunaan
console.log(highestPalindrome('3943', 1)); // Output: 3993
console.log(highestPalindrome('932239', 2)); // Output: 992299
console.log(highestPalindrome('0011', 1)); // Output: -1
