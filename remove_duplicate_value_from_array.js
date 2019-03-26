
// remove_duplicate_value_from_array
// =====================old way==========================
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
var temp = names.filter(function (v, i) {

    if (names.indexOf(v) === i) {
        console.log(v + "==" + i);
        return v;
    } else {
        console.log(false);
    }

});
console.log(temp);

// =====================new way==========================
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

let unique = [...new Set(names)];
console.log(unique);
