var str = "Digitallync@123";
var pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%&_?"])(?=.*\d).{8,}$/;
var result = pattern.test(str);
console.log(result);