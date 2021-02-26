using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CCI_Escalate
{
    public class Shared : Controller
    {
        public void returnMessages(string Title, string Description, bool isError)
        {
            TempData["MessageTitle"] = "Login Failed";
            TempData["Message"] = "Invalid username or password.";
            if (isError)
            {
                TempData["MessageStatus"] = 1;
                TempData["MessageType"] = "error";
            }
            else
            {
                TempData["MessageStatus"] = 0;
                TempData["MessageType"] = "success";
            }
        }

        public static dynamic returnMessageJSON(string Title, string Description, bool isError)
        {

            int ErrorId = 0;
            string MessageType = "";

            if (isError)
            {
                ErrorId = 1;
                MessageType = "error";
            }
            else
            {
                ErrorId = 0;
                MessageType = "success";
            }

            var data = new
            {
                MessageTitle = Title,
                Message = Description,
                MessageStatus = ErrorId,
                MessageType = MessageType
            };

            return data;
        }
    }
        
}