using Braintree;
using CCI_Escalate.Models.Core;
using CCI_Escalate.Models.DAL;
using CCI_Escalate.Models.PartialClasses;
using CCI_RiderWebAPI.Core;
using Stripe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CCI_Escalate.Models.BAL
{
    public class BAL_Login
    {
        DAL.dal dal = new DAL.dal();
        BAL_Email Email = new BAL_Email();
        public User Login(string username, string password)
        {

            string EncryptedPassword = Encryption.Encrypt(password);
            string EncryptedPassword2 = Encryption.Decrypt("rBfYEYK_aAs=");
            var user = dal.login(username, EncryptedPassword);

            if (user == null)
            {
                throw new Exception("Username or password is invalid");
            }
            return user;
        }
        public dynamic ResetPassword(SignupUser model)
        {
            try
            {

                if (model.Email != null && model.VerificationCode == null && model.Password == null)
                {
                    Random generator = new Random();
                    model.VerificationCode = generator.Next(0, 999999).ToString("D6");
                    if (dal.EmailActivation(model.Email, model.Password, model.VerificationCode))
                    {
                        var user = dal.GetUserByEmail(model.Email);
                        model.FirstName = user.FirstName;
                        model.LastName = user.LastName;
                        Email.GetEmailTemplate("Forgot Password", model);
                        return Shared.returnMessageJSON(Messages.EmailExistSuccessTitle, Messages.EmailExistSuccessDescription, false);
                    }
                    else
                    {
                        return Shared.returnMessageJSON(Messages.EmailExistErrorTitle, Messages.EmailExistErrorDescription, true);
                    }

                }
                else if (model.Email != null && model.VerificationCode != null && model.Password == null)
                {
                    if (dal.CheckVarificationCode(model.VerificationCode))
                    {
                        return Shared.returnMessageJSON(Messages.CodeVerificationSuccessTitle, Messages.CodeVerificationSuccessDescription, false);
                    }
                    else
                    {
                        return Shared.returnMessageJSON(Messages.CodeVerificationErrorTitle, Messages.CodeVerificationErrorDescription, true);
                    }

                }
                else if (model.Email != null && model.VerificationCode != null && model.Password != null)
                {
                    string EncryptedPassword = Encryption.Encrypt(model.Password);
                    if (dal.UpdatePassword(model.Email, EncryptedPassword))
                    {
                        return Shared.returnMessageJSON(Messages.PasswordUpdateSuccessTitle, Messages.PasswordUpdateSuccessDescription, false);
                    }
                    else
                    {
                        return Shared.returnMessageJSON(Messages.PasswordUpdateErrorTitle, Messages.PasswordUpdateErrorDescription, true);
                    }

                }
                else
                {
                    return Shared.returnMessageJSON(Messages.PasswordResetVerificationDataTitle, Messages.PasswordResetVerificationDescription, true);
                }
            }
            catch (Exception exp)
            {
                var email = EscalateSession.CurrentUser;
                if (email != null)
                {
                    dal.SaveErrorLog(email.Email, "BAL_Login - ResetPassword", exp.Message, DateTime.Now);
                }
                else
                {
                    dal.SaveErrorLog("", "BAL_Login - ResetPassword", exp.Message, DateTime.Now);
                }
                return Shared.returnMessageJSON(exp.Data.ToString(), exp.Message.ToString(), true);
            }

        }
        // public dynamic CreateSubscriptionsPerivice(Pc_Payment model)
        // {
        //     try
        //     {
        //         var gateway = new BraintreeGateway
        //         {
        //             Environment = Braintree.Environment.SANDBOX,
        //             MerchantId = "23h4zhk2xgvqn76t",
        //             PublicKey = "qzbgkt9jfjkrg8tb",
        //             PrivateKey = "b460e55347809fad3452d59aa055b3c4"
        //         };


        //         CustomerRequest PaymentMethodTokken = new CustomerRequest
        //         {
        //             PaymentMethodNonce = model.Nonce,
        //             FirstName = model.FirstName,
        //             LastName = model.LastName,

        //             CreditCard = new CreditCardRequest
        //             {
        //                 Options = new CreditCardOptionsRequest
        //                 {
        //                     VerifyCard = true
        //                 }
        //             }
        //         };

        //         Result<Customer> result2 = gateway.Customer.Create(PaymentMethodTokken);
        //         if (result2.IsSuccess())
        //         {
        //             Customer customer = result2.Target;
        //             var customerId = customer.Id;
        //             // e.g. 160923

        //             string Tokken = customer.PaymentMethods[0].Token;

        //             var request = new SubscriptionRequest
        //             {
        //                 PaymentMethodToken = Tokken,
        //                 PlanId = "testPlanfor1day",
        //                 Price = model.Amount,
        //                 NumberOfBillingCycles = model.NumOfBillCyc,

        //             };
        //             Result<Subscription> result = gateway.Subscription.Create(request);
        //             if (result.IsSuccess())
        //             {
        //                 model.SubscriptionID = result.Target.Id;

        //             }
        //             else
        //             {
        //                 return Shared.returnMessageJSON(Messages.GatewaySubscriptionInValidDataTitle, Messages.GatewaySubscriptionDescription, true);
        //             }
        //             return Shared.returnMessageJSON(Messages.CreateSubscriptionSuccessTitle, Messages.CreateSubscriptionSuccessDescription, false);

        //         }
        //         else
        //         {
        //             return Shared.returnMessageJSON(Messages.GatewayCustomerInValidDataTitle, Messages.GatewaySubscriptionDescription, true);
        //         }
        //     }
        //     catch (Exception exp)
        //     {
        //         var email = EscalateSession.CurrentUser;
        //         if (email != null)
        //         {
        //             dal.SaveErrorLog(email.Email, "BAL_Login - CreateSubscriptions", exp.Message, DateTime.Now);
        //         }
        //         else
        //         {
        //             dal.SaveErrorLog("", "BAL_Login - CreateSubscriptions", exp.Message, DateTime.Now);
        //         }
        //         return Shared.returnMessageJSON(exp.Data.ToString(), exp.Message.ToString(), true);
        //     }


        //}
       
       
    
        public void Logout()
        {

        }

    }
}