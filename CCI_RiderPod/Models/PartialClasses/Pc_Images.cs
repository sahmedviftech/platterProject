using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CCI_Escalate.Models.PartialClasses
{
    public class Pc_Images
    {
        
        public int UserId { get; set; }
        public HttpPostedFileBase ImagesPath { get; set; }
        public string ServerPath { get; set; }

    }
    public class Pc_UploadedImages
    {
        public int UserId { get; set; }
        public string ImagesURL { get; set; }
        public dynamic Message { get; set; }

    }
}