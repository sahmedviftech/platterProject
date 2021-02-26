using CCI_Escalate.Models;
using CCI_Escalate.Models.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CCI_Escalate.Models.PartialClasses
{
    public class Pc_GalleryImages
    {
        public int UserId { get; set; }

        public List<HttpPostedFileBase> GalImagePath { get; set; }
    }

    public class Pc_UploadedGalleryImages
    {
        public int UserId { get; set; }
        public List<int> ImageIds { get; set; }
        public List<string> ImagesURL { get; set; }
        public dynamic Message { get; set; }

    }



}