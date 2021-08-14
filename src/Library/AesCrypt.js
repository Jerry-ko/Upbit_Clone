import CryptoJS from 'crypto-js';

// 암호키
const passpharase = 'kby2DdaFOs7BRIRGmNBOSwqHgp9AgCOV';

/**
 * Encrypt
 *
 * @param {*} data
 * @returns
 */
export function encrypt(data) {
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), CryptoJS.enc.Utf8.parse(passpharase), {
        iv: CryptoJS.enc.Hex.parse(String.fromCharCode(0).repeat(16)),
    });
    return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
}

/**
 * Decrypt
 *
 * @param {*} data
 * @returns
 */
export function decrypt(data) {
    const decrypted = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(passpharase), {
        iv: CryptoJS.enc.Hex.parse(String.fromCharCode(0).repeat(16)),
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}
