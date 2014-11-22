var result = 0;
for (i = 2; i < process.argv; i++) {
  result += Number(process.argv[i]);
}

console.log(result);