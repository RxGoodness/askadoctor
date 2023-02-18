/**
 *
 * Required External Modules
 *
 */

//import { userModel, IUser } from '../../models';
// import { commissionModel } from "../../models";
import { APIError, ISendEmail, SendEmail } from "../../commons";

/**
 *
 * Services
 *
 */

export default {
  /**
   *
   * SendEmail
   *
   */
  async SendEmail(body: ISendEmail) {
    const response = await SendEmail(body);
    //after sending email save to database
    // const commission = await commissionModel.create(body);
    return {
      messageId: response.messageId,
      envelope: response.envelope,
      response: response.response,
      accepted: response.accepted,
    };
  },
};
