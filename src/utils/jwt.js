const jwt = require('jsonwebtoken');

const { jwtConfig } = require('../config');

const { algorithm, secret, accessTokenExpiryTime, refreshTokenExpiryTime } = jwtConfig;

module.exports = {
  /**
   * Generates and returns a new JWT token.
   *
   * @param {string | Object | Buffer} accessTokenPayload
   * @param {string | Object | Buffer} refreshTokenPayload
   * @returns {{ accessToken: string, expiresIn: number, refreshToken: string }}
   */
  generateToken(accessTokenPayload, refreshTokenPayload) {
    // Generate access token
    const accessToken = jwt.sign(accessTokenPayload, secret, {
      algorithm,
      expiresIn: accessTokenExpiryTime,
    });

    // Generate refresh token
    const refreshToken = jwt.sign(refreshTokenPayload, secret, {
      algorithm,
      expiresIn: refreshTokenExpiryTime,
    });

    return { accessToken, expiresIn: accessTokenExpiryTime, refreshToken };
  },

  /**
   * Returns the decoded payload of a token.
   *
   * @param {string} token
   * @returns {any}
   */
  getDecodedToken(token) {
    return jwt.decode(token);
  },
};
