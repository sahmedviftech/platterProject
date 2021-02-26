using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CCI_Escalate.Models.PartialClasses
{
    public class Pc_FileAttach
    {
        public int Id { get; set; }

        public int ProjectId { get; set; }
        public string BrowserId { get; set; }
        public List<HttpPostedFileBase> FilePath { get; set; }
        public string ServerPath { get; set; }
    }
    public class Pc_UploadedFile
    {
        public int ProjectId { get; set; }
        public string Filestring { get; set; }
        public dynamic Message { get; set; }
    }
}