function isPalindrome(s) {
    return s == s.split("").reverse().join("") ? 'palindrome' : 'not palindrome';
}
console.log(isPalindrome('noon'));
