using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CCI_Escalate.Models.PartialClasses
{
    public class UsersDetails
    {
        public string Name { get; set; }
        public string Role { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public bool IsActive { get; set; }
    }
    public class KPIs
    {
        public int ID { get; set; }
        public string Role { get; set; }
    }
}