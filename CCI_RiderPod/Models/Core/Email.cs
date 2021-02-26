using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;

namespace CCI_Escalate.Models.Core
{
    public class Email
    {
        public string SendEmail(string EmailAddress, string VerificationCode)
        {
            string msg = "";
            try
            {
                string Url = "http://localhost:39003/SignUp/Verification?Code=" + VerificationCode;
                string eBody = "Thank you for signing up with Homii. <br /><br />";
                eBody += "To activate your account, please click the link below: <br /><br />";
                eBody += " " + Url + "<br /><br /><br />";
                MailMessage Msg = new MailMessage();
                Msg.From = new MailAddress("nancysdadams57201@gmail.com");
                Msg.To.Add(EmailAddress);
                Msg.Subject = "Verification Code";
                Msg.IsBodyHtml = true;
                Msg.Body = eBody;
               
                SmtpClient smtpC = new SmtpClient();
                smtpC.Host = "smtp.gmail.com";
                smtpC.Port = 587;
                smtpC.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
                smtpC.UseDefaultCredentials = false;
                smtpC.Credentials = new System.Net.NetworkCredential("nancysdadams57201@gmail.com", "na24jackson6");
                smtpC.EnableSsl = Convert.ToBoolean(true);
                smtpC.Send(Msg);
            }
            catch (Exception ex)
            {

                //Err.WriteError(ex.InnerException.ToString());
                msg = ex.ToString();
            }

            return "";
            //return PartialView("Index", db.vt_SMTPConfiguration.Where(x => x.IsActive != false).FirstOrDefault());
        }
    }
}