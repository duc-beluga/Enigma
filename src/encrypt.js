const crypto = require("crypto");
const seed = require("random-bytes-seed");

export class Encrypt {
  constructor(num) {
    this.num = num;
    this.randomBytes = seed(this.num.toString());
    this.KEY = this.randomBytes(32)
      .toString("base64")
      .slice(0, 32);
    this.IV = this.randomBytes(16)
      .toString("base64")
      .slice(0, 16);
    this.ALGO = "aes-256-cbc";
  }

  encrypt(text) {
    let cipher = crypto.createCipheriv(this.ALGO, this.KEY, this.IV);
    let encrypted = cipher.update(text, "utf8", "base64");
    encrypted += cipher.final("base64");
    return encrypted.slice(0, -2);
  }

  decrypt(text) {
    let decipher = crypto.createDecipheriv(this.ALGO, this.KEY, this.IV);
    let decrypted = decipher.update(text, "base64", "utf8");
    return decrypted + decipher.final("utf8");
  }

  // const encrypted_key = encrypt("HelloWorld");
  // console.log(encrypted_key);
  // const decrypted_key = decrypt(encrypted_key);
  // console.log(decrypted_key);
}
