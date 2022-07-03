const crypto = require("crypto");
const seed = require("random-bytes-seed");

let num = 123;

export const init_num = (number) => {
  num = number;
};

const randomBytes = seed(num.toString());

const KEY = randomBytes(32)
  .toString("base64")
  .slice(0, 32);
const IV = randomBytes(16)
  .toString("base64")
  .slice(0, 16);
const ALGO = "aes-256-cbc";

export const encrypt = (text) => {
  let cipher = crypto.createCipheriv(ALGO, KEY, IV);
  let encrypted = cipher.update(text, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted.slice(0, -2);
};

export const decrypt = (text) => {
  let decipher = crypto.createDecipheriv(ALGO, KEY, IV);
  let decrypted = decipher.update(text, "base64", "utf8");
  return decrypted + decipher.final("utf8");
};

// const encrypted_key = encrypt("HelloWorld");
// console.log(encrypted_key);
// const decrypted_key = decrypt(encrypted_key);
// console.log(decrypted_key);
