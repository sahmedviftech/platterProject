using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;

namespace CCI_Escalate.Controllers
{
    public class ErrorController : Controller
    {

        public ActionResult Index()
        {
            return View("HttpError505");

        }
        public ActionResult HttpError404()
        {
            return View("HttpError404");

            // return View();
        }
        public ActionResult HttpError505()
        {
            return View("HttpError505");

        }
        public ActionResult NoAccess()
        {
            return View("NoAccess");

        }
    }
}