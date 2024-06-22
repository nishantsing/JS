function f(x) {
    x += 1;
    console.log(x);
}
function g(x) {
    x.value *= 5;
}

var a, b = 1, c = { value: 2 }, d = c;

f(a);
f(b);
g(d);

console.log(a, b, c.value, d.value);