using CCI_Escalate.Models.DAL;
using CCI_Escalate.Models.PartialClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;

namespace CCI_Escalate.Models.BAL
{
    public class BAL_Email
    {
        DAL.dal dal = new DAL.dal();

        public void GetEmailTemplate(string TemplateName, SignupUser model)
        {
            var result = dal.getEmailTemplate(TemplateName);
            var smtpSettings = dal.EmailSettings();
            SendEmail(model, result, smtpSettings);
        }
        //Updated Code
       


        public string SendEmail(SignupUser model, EmailTemplate result, EmailSetting smtpSettings)
        {
            string msg = "";
            try
            {

                //var adminDetails = GetAdminData();


                //var Fullname = model.FirstName == null ? "" : model.FirstName  + " " + model.LastName == null ? "" : model.LastName;
                var Fullname = model.FirstName == null ? "" : model.FirstName;
                Fullname = Fullname += " " + model.LastName == null ? "" : model.LastName;
                var UserFullname = model.UserFirstName == null ? "" : model.UserFirstName;
                UserFullname = UserFullname += " " + model.UserLastName == null ? "" : model.UserLastName;
                // string Url = "https://homii.ca/SignUp/Verification?Code=" + model.VerificationCode;
                var http =  HttpContext.Current.Request.Url.ToString().Split('/');
               //var pathurl = "/SignUp/Verification?Code=" + model.VerificationCode;
                //var http = System.Web.HttpContext.Current.Server.MapPath(pathurl); ;
                string url = "";
                for (int i = 0; i < http.Length - 1; i++)
                {
                    url = url + http[i] + "/";
                }
                string Url = "https://portal.homii.ca/SignUp/Verification?Code=" + model.VerificationCode;
                //string Url = url + "Verification?Code=" + model.VerificationCode;

                string eBody = result.Body;
                eBody = eBody.Replace("{Url}", Url);
                eBody = eBody.Replace("{ProjectTitle}", model.Title == null ? "" : model.Title);
                eBody = eBody.Replace("{UserName}", model.UserName == null ? "" : model.UserName.ToString().ToUpperInvariant());
                eBody = eBody.Replace("{FirstName}", model.FirstName == null ? "" : model.FirstName.ToString().ToUpperInvariant());
                eBody = eBody.Replace("{Admin}", model.UserName == null ? "" : model.UserName.ToString().ToUpperInvariant());
                if (result.Template == "Incentive Redeem")
                {
                    eBody = eBody.Replace("{FullName}", UserFullname == null ? "" : UserFullname);
                }
                else
                {
                    eBody = eBody.Replace("{FullName}", Fullname == null ? "" : Fullname);
                }
                //eBody = eBody.Replace("{FullName}", Fullname == null ? "" : Fullname);
                eBody = eBody.Replace("{Description}", model.Description == null ? "" : model.Description.ToString().ToUpperInvariant());
                eBody = eBody.Replace("{verificationcode}", model.VerificationCode == null ? "" : model.VerificationCode);



                MailMessage Msg = new MailMessage();
                Msg.From = new MailAddress(result.FromEmail);
                Msg.To.Add(model.Email);
                Msg.Subject = result.Subject;
                Msg.IsBodyHtml = true;
                Msg.Body = eBody;

                //string Url = "http://localhost:39003/SignUp/Verification?Code=" + model.VerificationCode;
                //string eBody = result.Body;

                //MailMessage Msg = new MailMessage();
                //Msg.From = new MailAddress(result.FromEmail);
                //Msg.To.Add(model.Email);
                //Msg.Subject = result.Subject;
                //Msg.IsBodyHtml = true;
                //Msg.Body = eBody;

                SmtpClient smtpC = new SmtpClient();
                smtpC.Host = smtpSettings.SmtpHost;
                smtpC.Port = Convert.ToInt32(smtpSettings.SmtpPort);
                smtpC.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
                smtpC.UseDefaultCredentials = false;
                smtpC.Credentials = new System.Net.NetworkCredential(result.FromEmail, result.EmailPassword);
                smtpC.EnableSsl = Convert.ToBoolean(smtpSettings.SmtpEnableSsl);
                smtpC.Send(Msg);
            }
            catch (Exception exp)
            {
                var email = EscalateSession.CurrentUser.Email;
                dal.SaveErrorLog(email, exp.Data.ToString(), exp.Message, DateTime.Now);
               
                //Err.WriteError(ex.InnerException.ToString());
                msg = exp.ToString();
            }
            return "";
            //return PartialView("Index", db.vt_SMTPConfiguration.Where(x => x.IsActive != false).FirstOrDefault());
        }



        //Old Code


        //public string SendEmail(SignupUser model, EmailTemplate result, EmailSetting smtpSettings)
        //{
        // string msg = "";
        // try
        // {
        // string domain = "http://localhost:39003";
        // string Url = domain+"/SignUp/Verification?Code=" + model.VerificationCode;
        // string eBody = result.Body;
        // eBody = eBody.Replace("{Url}", Url);
        // eBody = eBody.Replace("{Title}", model.Email);
        // eBody = eBody.Replace("{UserName}", model.FirstName + model.LastName);

        // MailMessage Msg = new MailMessage();
        // Msg.From = new MailAddress(result.FromEmail);
        // Msg.To.Add(model.Email);
        // Msg.Subject = result.Subject;
        // Msg.IsBodyHtml = true;
        // Msg.Body = eBody;

        // //string Url = "http://localhost:39003/SignUp/Verification?Code=" + model.VerificationCode;
        // //string eBody = result.Body;

        // //MailMessage Msg = new MailMessage();
        // //Msg.From = new MailAddress(result.FromEmail);
        // //Msg.To.Add(model.Email);
        // //Msg.Subject = result.Subject;
        // //Msg.IsBodyHtml = true;
        // //Msg.Body = eBody;

        // SmtpClient smtpC = new SmtpClient();
        // smtpC.Host = smtpSettings.SmtpHost;
        // smtpC.Port = Convert.ToInt32(smtpSettings.SmtpPort);
        // smtpC.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
        // smtpC.UseDefaultCredentials = false;
        // smtpC.Credentials = new System.Net.NetworkCredential(result.FromEmail, result.EmailPassword);
        // smtpC.EnableSsl = Convert.ToBoolean(smtpSettings.SmtpEnableSsl);
        // smtpC.Send(Msg);
        // }
        // catch (Exception ex)
        // {

        // //Err.WriteError(ex.InnerException.ToString());
        // msg = ex.ToString();
        // }
        // return "";
        // //return PartialView("Index", db.vt_SMTPConfiguration.Where(x => x.IsActive != false).FirstOrDefault());
        //}



        ////replace my code to fahad ccode

        //public string SendEmail(SignupUser model, EmailTemplate result, EmailSetting smtpSettings)
        //{
        //    string msg = "";
        //    try
        //    {
        //        // string Url = "https://homii.ca/SignUp/Verification?Code=" + model.VerificationCode;
        //        string Url = "http://localhost:39003/SignUp/Verification?Code=" + model.VerificationCode;
        //        string eBody = result.Body;
        //        eBody = eBody.Replace("{Url}", Url);
        //        eBody = eBody.Replace("{Title}", model.Email);
        //        eBody = eBody.Replace("{UserName}", model.FirstName + model.LastName);
        //        eBody = eBody.Replace("{FirstName}", model.FirstName);
        //        eBody = eBody.Replace("{Admin}", "Usama khan");
        //        eBody = eBody.Replace("{FullName}", model.FirstName + model.LastName);
        //        eBody = eBody.Replace("{Description}", "");
        //        eBody = eBody.Replace("{verificationcode}", model.VerificationCode);



        //        MailMessage Msg = new MailMessage();
        //        Msg.From = new MailAddress(result.FromEmail);
        //        Msg.To.Add(model.Email);
        //        Msg.Subject = result.Subject;
        //        Msg.IsBodyHtml = true;
        //        Msg.Body = eBody;

        //        //string Url = "http://localhost:39003/SignUp/Verification?Code=" + model.VerificationCode;
        //        //string eBody = result.Body;

        //        //MailMessage Msg = new MailMessage();
        //        //Msg.From = new MailAddress(result.FromEmail);
        //        //Msg.To.Add(model.Email);
        //        //Msg.Subject = result.Subject;
        //        //Msg.IsBodyHtml = true;
        //        //Msg.Body = eBody;

        //        SmtpClient smtpC = new SmtpClient();
        //        smtpC.Host = smtpSettings.SmtpHost;
        //        smtpC.Port = Convert.ToInt32(smtpSettings.SmtpPort);
        //        smtpC.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
        //        smtpC.UseDefaultCredentials = false;
        //        smtpC.Credentials = new System.Net.NetworkCredential(result.FromEmail, result.EmailPassword);
        //        smtpC.EnableSsl = Convert.ToBoolean(smtpSettings.SmtpEnableSsl);
        //        smtpC.Send(Msg);
        //    }
        //    catch (Exception ex)
        //    {

        //        //Err.WriteError(ex.InnerException.ToString());
        //        msg = ex.ToString();
        //    }
        //    return "";
        //    //return PartialView("Index", db.vt_SMTPConfiguration.Where(x => x.IsActive != false).FirstOrDefault());
        //}

    }
}