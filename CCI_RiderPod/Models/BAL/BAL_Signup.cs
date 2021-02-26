using Braintree;
using CCI_Escalate.Models.DAL;
using CCI_Escalate.Models.PartialClasses;
using CCI_RiderWebAPI.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CCI_Escalate.Models.BAL
{
    public class BAL_Signup
    {
        DAL.dal dal = new DAL.dal();
        BAL_Email Email = new BAL_Email();
        public dynamic signUp(SignupUser model)
        {
            try
            {
                if (isDataValid(model))
                {
                    if (dal.EmailExists(model.Email) == false)
                    {
                        //model.EmailExists = 0;
                        string EncryptedPassword = Encryption.Encrypt(model.Password);
                        Random generator = new Random();
                        model.VerificationCode = generator.Next(0, 999999).ToString("D6");
                        model.Password = EncryptedPassword;
                        Random InCodeGen = new Random();
                        var InCode = InCodeGen.Next(0, 999999).ToString("D6");
                        model.IncentiveCode = model.FirstName + model.LastName + '_' + InCode;
                        var data = dal.CreateUser(model);

                        Email.GetEmailTemplate("Sign Up", model);
                       
                        //var adminDetails = dal.GetAdminData();
                        //foreach (var item in adminDetails)
                        //{
                        //    model.Email = item.Email;
                        //    model.FirstName = item.FirstName;
                        //    model.LastName = item.LastName;
                        //    Email.GetEmailTemplate("Sign Up", model);
                        //}
                        return data; // Shared.returnMessageJSON(Messages.SignUpSuccessTitle, Messages.SignUpSuccessDescription, false);
                    }
                    else
                    {
                        User user = new User();
                        user.Email = "";
                        return user;
                        //return Shared.returnMessageJSON(Messages.SignUpErrorTitle, Messages.SignUpErrorDescription, true);
                    }
                }               
                else
                {
                    return Shared.returnMessageJSON(Messages.SignUpInValidDataTitle, Messages.SignUpInValidDataDescription, true);
                }
            }
            catch (Exception ex)
            {
                var email = EscalateSession.CurrentUser;
                if (email != null)
                {
                    dal.SaveErrorLog(email.Email, "BAL_Signup - signUp", ex.Message, DateTime.Now);
                }
                else
                {
                    dal.SaveErrorLog("", "BAL_Signup - signUp", ex.Message, DateTime.Now);
                }
                return Shared.returnMessageJSON(ex.Data.ToString(), ex.Message.ToString(), true);

            }

        }
                
        public bool isDataValid(SignupUser model)
        {
            if (model.Email != null && model.RoleId != 0 && model.Password != null)
            {
                return true;
            }
            else
            {
                return false;
            }

        }
        public List<Role> GetAllRoles()
        {
            return dal.GetAllRoles();
        }
        public dynamic verification(string Code)
        {
            try
            {
                if (isDataValid(Code))
                {
                    
                   
                        var data = dal.Verification(Code);

                       // var RoleCheck = dal.CheckAccountType(data.Id);
                      

                        return data;
                   
                    
                }
                else
                {
                    return Shared.returnMessageJSON(Messages.VerificationInValidErrorTitle, Messages.VerificationErrorDescription, true);
                }

            }
            catch (Exception exp)
            {
                
                var email = EscalateSession.CurrentUser;
                if (email == null)
                {
                   var  email1 = "verification code";
                    dal.SaveErrorLog(email1, exp.Data.ToString(), exp.Message, DateTime.Now);
                }
                else
                {
                    dal.SaveErrorLog(email.Email, exp.Data.ToString(), exp.Message, DateTime.Now);
                }
               
                return Shared.returnMessageJSON(exp.Data.ToString(), exp.Message.ToString(), true);
            }


        }
        public bool isDataValid(string Code)
        {
            if (Code != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public dynamic CheckVerificationCode(string Code)
        {
            try
            {
                
                    var checkcode = dal.CheckVerificationCode(Code);
                    
                        return checkcode;

                    

                }
            catch (Exception exp)
            {

                
                    var email1 = " check verification code";
                    dal.SaveErrorLog(email1, exp.Data.ToString(), exp.Message, DateTime.Now);
                
                return Shared.returnMessageJSON(exp.Data.ToString(), exp.Message.ToString(), true);
            }


        }
        //public User GetUserId(string IncentiveCode)
        //{
        //    //var user = dal.GetUserIdWithIncen(IncentiveCode);
        //    return new User;
        //}

    }
}