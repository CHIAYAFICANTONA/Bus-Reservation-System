const forge = require('node-forge');
const fs = require('fs');

// Generate a keypair and store as PEM format
const { privateKey, publicKey } = forge.pki.rsa.generateKeyPair(2048);

const pemPrivateKey = forge.pki.privateKeyToPem(privateKey);
const pemPublicKey = forge.pki.publicKeyToPem(publicKey);

// Save the keys to files
fs.writeFileSync('private.pem', pemPrivateKey);
fs.writeFileSync('public.pem', pemPublicKey);

console.log('Keys generated and saved to private.pem and public.pem');
