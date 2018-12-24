function isPalindrome(s) {
    return s == s.split("").reverse().join("") ? 'palindrome' : 'not palindrome';
}
alert(isPalindrome('noon'));
