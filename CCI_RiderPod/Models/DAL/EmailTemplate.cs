//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CCI_Escalate.Models.DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class EmailTemplate
    {
        public int Id { get; set; }
        public string Template { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
        public string FromEmail { get; set; }
        public string EmailPassword { get; set; }
    }
}