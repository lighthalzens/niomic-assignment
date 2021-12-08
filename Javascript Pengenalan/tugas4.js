const hJoni = 185;
const hBudi = 167;
const hJotaro = 183;
var metric = "-cm";

if (hJoni < hBudi && hBudi < hJotaro) {
    console.log(a + metric, b + metric, c + metric);
} else if (hJoni < hBudi && hJotaro < hBudi) {
    console.log(hJoni + metric, hJotaro + metric, hBudi + metric);
} else if (hBudi < hBudi && hJoni < hJotaro) {
    console.log(hBudi + metric, hJoni + metric, hJotaro + metric);
} else if (hBudi < hJoni && hJotaro < hJoni) {
    console.log(hBudi + metric, hJotaro + metric, hJoni + metric);
} else if (hJotaro < hJoni && hJoni < hBudi) {
    console.log(hJotaro + metric, hJoni + metric, hBudi + metric);
} else {
    console.log(hJotaro + metric, hBudi + metric, hJoni + metric);
}