using CCI_Escalate.Models;
using CCI_Escalate.Models.BAL;
using CCI_Escalate.Models.Core;
using CCI_Escalate.Models.PartialClasses;
using CCI_RiderWebAPI.Core;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.SessionState;

namespace CCI_Escalate.Controllers
{
    public class SignUpController : Controller
    {
        BAL_Signup bal = new BAL_Signup();
        BAL_Email EmailTemplate = new BAL_Email();
        BAL_Login balLogin = new BAL_Login();
        // GET: SignUp
        public ActionResult Index()
        {
            //log.Logout();
            return View();
        }
       // [HttpPost]
        public ActionResult Verification(string Code)
        {
            var checkverifycode = bal.CheckVerificationCode(Code);
            if (checkverifycode != null)
            {
                var userDetail = bal.verification(Code);
                string DecryptedPassword = Encryption.Decrypt(userDetail.Password);
                return RedirectToAction("Login", "Login", new { email = userDetail.Email, password = DecryptedPassword, gridCheck = false });

            }
            else
            {
                return RedirectToAction("Index", "Login");

            }
        }
        [HttpPost]
        public JsonResult GetAccountTypes()
        {
            string JSONString = "";
            var data = bal.GetAllRoles();
            JSONString = JsonConvert.SerializeObject(data);
            return Json(JSONString, JsonRequestBehavior.AllowGet);
        }
      
        [HttpPost]
        public JsonResult Save(SignupUser model)
        {
            //var jsonString;
            var res = Utility.IsValidCaptcha(model.url);
            if (res == false)
            {
                //jsonString = "invalid recptcha";
                return Json("Invalid Recptcha", JsonRequestBehavior.AllowGet);
            }
            else
            {
                var IncentiveCode = "";
                //if (Request.Cookies["Incentive"] != null)
                //{
                //    IncentiveCode = Request.Cookies["Incentive"].Values.ToString();
                //    var GetUserID = bal.GetUserId(IncentiveCode);
                //    model.ReferralId = GetUserID.Id;
                //}
                string SessionID = System.Web.HttpContext.Current.Session.SessionID.ToString();
                model.SessionID = SessionID;
                var jsonString = bal.signUp(model);
                if (jsonString.Email != "")
                {
                    TempData["verificationEmailSignUP"] = jsonString.Email;
                    TempData["AccountTypeID"] = jsonString.AccountTypeID;
                }
                else
                {

                }
                return Json(jsonString, JsonRequestBehavior.AllowGet);
            }
        }
       

     
    }
}