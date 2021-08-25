let num = process.argv.slice(2);
for (let item of num) {
  item = Number(item);
  if (!isNaN(item) && item > 0) {
    setTimeout(() => {
      process.stdout.write('.');
      process.stdout.write('\x07');
    }, item * 1000);
  }
};