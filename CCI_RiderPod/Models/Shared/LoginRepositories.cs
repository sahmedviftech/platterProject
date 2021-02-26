using CCI_Escalate.Models.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CCI_Escalate.Models
{
    public class UserRepositories
    {
        public static bool CheckAccess(string RoleName, User user)
        {
            DAL.dal DAL = new Models.DAL.dal();
            string UserRole = DAL.getRoleName(user.RoleId);


            if (RoleName.Contains(UserRole))
            {
                return true;
            }
            
            return false;
        }
    }
}