const crypto = require('crypto');

const generateUniqueHash = () => {
  return crypto.randomBytes(16).toString('hex');
};

export default generateUniqueHash;
