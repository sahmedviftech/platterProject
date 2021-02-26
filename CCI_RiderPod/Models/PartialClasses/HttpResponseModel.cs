using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CCI_Escalate.Models.PartialClasses
{
    public class HttpResponseModel
    {
        public Boolean status { get; set; }
        public string message { get; set; }
        public dynamic data { get; set; }

        public bool log_message { get; set; }
    }

    public class HttpResponseModelError
    {
        public Boolean status { get; set; }
        public string message { get; set; }
    }

    public class HttpResponseModelCode
    {
        public Boolean status { get; set; }
        public string message { get; set; }
        public string Code { get; set; }
        public string UserId { get; set; }

    }
    public class HttpResponseModelId
    {
        public Boolean status { get; set; }
        public string message { get; set; }
        public int Id { get; set; }
    }

    public class HttpResponseModelErrorLimit
    {
        public Boolean status { get; set; }
        public string message { get; set; }
        public Boolean IsLimit { get; set; }
    }
}