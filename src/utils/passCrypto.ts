// eslint-disable-next-line @typescript-eslint/no-var-requires
const crypto = require("crypto");
// const secret = env.config().parsed?.SECRET;

export default class PassCrypto {
  static encrypt(pass: string): string {
    const passCrypto = crypto.createHash("sha256").update(pass).digest("hex");
    console.log(passCrypto);

    return passCrypto;
  }
}
