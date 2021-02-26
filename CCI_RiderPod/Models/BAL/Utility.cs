using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Script.Serialization;

namespace CCI_Escalate.Models.BAL
{
    public static class Utility
    {
        public class CaptchaResult
        {
            public string success { get; set; }
        }

        public static bool IsValidCaptcha(string resp)
        {
            try
            {


                //6LdfpOUUAAAAACyQSQx1wiu4ajqCSrMMUUPTZQB_
                // string acceeskey = ConfigurationManager.AppSettings["captchaserverkey"].ToString();
                // string acceeskey = "6LcqlwAVAAAAAKFWf99DR1u-UWTFLAdTaNctUUi-";//6LfsnQAVAAAAAGQ46KeVaki0eExW_WxdVBCqxoFA
                string acceeskey = "6Lex2K4ZAAAAAAexiB3oFb1H9mlhkKDNbhBNtcoh";
                var req = (HttpWebRequest)WebRequest.Create
         ("https://www.google.com/recaptcha/api/siteverify?secret=" + acceeskey + "&response=" + resp + "");
                //Google recaptcha Response
                using (WebResponse wResponse = req.GetResponse())
                {
                    using (StreamReader readStream = new StreamReader(wResponse.GetResponseStream()))
                    {
                        string jsonResponse = readStream.ReadToEnd();
                        JavaScriptSerializer js = new JavaScriptSerializer();
                        // Deserialize Json
                        CaptchaResult data = js.Deserialize<CaptchaResult>(jsonResponse);
                        if (Convert.ToBoolean(data.success))
                        {
                            return true;
                        }
                        else
                        {
                            return false;

                        }
                    }
                }

            }

            catch (Exception e)
            {

                throw new Exception("Invalid Captcha Try Again..");


            }
        }
    }
}