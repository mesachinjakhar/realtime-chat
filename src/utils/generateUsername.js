export function generateUsername(baseUsername) {
  const num = "0123456789ABCDEF"; // String of possible digits
  const randomSuffix = Array.from({ length: 3 }) // Create an array of length 3
    .map(() => num[Math.floor(Math.random() * num.length)]) // Generate 3 random digits
    .join(""); // Join the array into a string

  const generatedUsername = baseUsername + randomSuffix;

  console.log(generatedUsername);
  return generatedUsername;
}
