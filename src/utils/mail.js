/**
 * @typedef {import('nodemailer').SendMailOptions} MailOptions
 */

const { InternalServerError } = require('http-errors');

const transporter = require('../config/transporter');
const logger = require('../config/logger');

module.exports = {
  /**
   * Verifies SMTP server readiness.
   *
   * @returns {Promise<void>}
   */
  async verifySMTPConnection() {
    try {
      await transporter.verify();

      logger.info('SMTP server ready.');
    } catch (error) {
      logger.error(`Failed to verify SMTP server: ${error}.`);
    }
  },

  /**
   * Sends a mail with the configured options.
   *
   * @param {MailOptions} options
   * @returns {Promise<void>}
   */
  async sendMail(options) {
    try {
      await transporter.sendMail(options);
    } catch (error) {
      throw new InternalServerError(`Failed to send mail: ${error.message}. Options: ${options}`);
    }
  },
};
