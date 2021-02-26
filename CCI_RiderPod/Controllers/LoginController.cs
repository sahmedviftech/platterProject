using CCI_Escalate.Helper;
using CCI_Escalate.Models;
using CCI_Escalate.Models.BAL;
using CCI_Escalate.Models.Core;
using CCI_Escalate.Models.PartialClasses;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace CCI_Escalate.Controllers
{
    public class LoginController : Controller
    {
        BAL_Signup balSign = new BAL_Signup();
        BAL_Login bal = new BAL_Login();
        Shared shared = new Shared();
        BAL_Email EmailTemplate = new BAL_Email();

        public ActionResult Index(string Continue)
        {

            //var user = EscalateSession.CurrentUser;
            //if (user != null)
            {
                    string url = "/Login/Index";
                    return Redirect(url);
            }

           // return View();
        }
        public ActionResult ForgotPassword()
        {
            return View("ForgotPassword");
        }
        // GET: Login
        //[HttpPost]
        public ActionResult Login(string email, string password, bool gridCheck = false)
        {
            try
            {

                var user = bal.Login(email, password);
               // EscalateSession.CurrentUser = user;
                if (gridCheck == true)
                {
                    Session.Timeout = 4320;
                }
                shared.returnMessages("Login Succesful", "Welcome to site", false);
                string[] Pathurl = null;
                if (Request.Cookies["CurrentUrl"] != null)
                {
                    Pathurl = Request.Cookies["CurrentUrl"].Value.Split('>');
                    int countt = Pathurl.Count();

                    if (countt == 1)
                    {
                        Pathurl = new string[2];
                        Pathurl[0] = Request.Cookies["CurrentUrl"].Value;
                        Pathurl[1] = "0";
                    }
                    else
                    {
                        if (Pathurl[1] == "undefined")
                        {
                            Pathurl[1] = "0";
                        }
                    }

                }

                if (Request.Cookies["CurrentUrl"] != null && Request.Cookies["CurrentUrl"].Value != "" && Convert.ToInt32(Pathurl[1]) == user.RoleId && (Pathurl[0] != Server.MapPath("/Login/Index")))
                {
                    var value = Pathurl[0];
                    return Redirect(value);

                }
                else
                {
                        string url = "/Login/Index";
                        return Redirect(url);
                }
            }
            catch (Exception exp)
            {
              //  EscalateSession.CurrentUser = null;
                shared.returnMessages("Login Failed", exp.Message, true);
                ViewBag.Msg = exp.Message;
                return View("Index");
            }
        }
        [HttpPost]
        public ActionResult PasswordReset(SignupUser model)
        {
            var jsonString = bal.ResetPassword(model);
            return Json(jsonString, JsonRequestBehavior.AllowGet);
        }
     
  
        public ActionResult thankyouForRegis()
        {
            string Email = null;
            string AccountTypeID = null;
            if (TempData["verificationEmailSignUP"] != null && TempData["AccountTypeID"] != null)
            {
                Email = TempData["verificationEmailSignUP"].ToString();
                AccountTypeID = TempData["AccountTypeID"].ToString();
            }
            else
            {
                return RedirectToAction("Index", "Login");
            }
            ViewBag.Email = Email;
            ViewBag.AccountTypeID = AccountTypeID;
            return View();
        }
        [HttpPost]
        public JsonResult GetLoginUserEmail()
        {
            //var user = EscalateSession.CurrentUser;

            //if (user != null)
            //{
            //    return Json(user.Email, JsonRequestBehavior.AllowGet);
            //}
            //else
            {
                return Json(null, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult Logout(string continues)
        {
            FormsAuthentication.SignOut();

            Session.Abandon();
            Session.RemoveAll();
            //Session.Clear();
            Response.Cache.SetCacheability(HttpCacheability.NoCache);
            Response.Cache.SetExpires(DateTime.Now.AddHours(-1));
            Response.Cache.SetNoStore();
            HttpCookie C = new HttpCookie("CurrentUrl");
            C.Value = continues;
            C.Expires = DateTime.Now.AddMinutes(30);
            Response.Cookies.Add(C);

            return Json(new { url = Url.Action("Index", "Login") });
        }
    }
}