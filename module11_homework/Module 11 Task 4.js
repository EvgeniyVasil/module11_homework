function turnCount(x, y) {
  let i = setInterval(() => {
    console.log(x++);
    if (x > y) clearInterval(i);
  }, 1000)
}

turnCount(5, 15);