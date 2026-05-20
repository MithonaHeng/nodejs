process.stdin.on("data", function (chunk) {
  const input = chunk.toString().trim();
  if (input === "exit") {
    process.exit(0);
  }
  try {
    const result = eval(input);
    console.log(result);
  } catch (e) {
    console.error("Error evaluating expression");
  }
  process.stdout.write("Enter a mathematical expression (or 'exit' to quit): ");
});

process.stdout.write("Enter a mathematical expression (or 'exit' to quit): ");
