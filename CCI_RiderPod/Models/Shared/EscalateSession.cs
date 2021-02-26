using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CCI_Escalate.Models;
using CCI_Escalate.Models.DAL;

namespace CCI_Escalate
{
    public static class EscalateSession
    {
        public static User CurrentUser
        {
            get { return (HttpContext.Current.Session["UserSession"] as User) ?? null; }

            set { HttpContext.Current.Session["UserSession"] = value; }
        }
    }
}