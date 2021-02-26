using CCI_Escalate.Models.Core;
using CCI_Escalate.Models.PartialClasses;
using CCI_RiderWebAPI.Core;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.SessionState;


namespace CCI_Escalate.Models.DAL
{
    public class dal
    {
        EscalateDbEntities db = new EscalateDbEntities();
        public User login(string userName, string password)
        {
            return db.Users.Where(x => x.Email == userName && x.Password == password && x.IsActive == true).SingleOrDefault();
        }

        public string getRoleName(int roleID)
        {
            var role = db.Roles.Where(x => x.Id == roleID).FirstOrDefault().Role1;
            return role;
        }

        public bool EmailActivation(string Email, string password, string verificationcode)
        {
            var data = db.Users.Where(x => x.Email == Email).FirstOrDefault();
            if (data != null)
            {
                data.VerificationCode = verificationcode;
                //data.IsActive = false;
                db.Entry(data).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }
        public bool CheckVarificationCode(string verificationcode)
        {
            var result = db.Users.Where(x => x.VerificationCode == verificationcode).SingleOrDefault();
            if (result != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public bool UpdatePassword(string Email, string Password)
        {
            bool IsPasswordUpdated = false;
            var data = db.Users.Where(x => x.Email == Email).SingleOrDefault();
            if (data != null)
            {
                // data.IsActive = true;
                data.VerificationCode = "";
                data.Password = Password;
                db.Entry(data).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                IsPasswordUpdated = true;
            }
            else
            {
                IsPasswordUpdated = false;
            }
            return IsPasswordUpdated;
        }

        public bool EmailExists(string email)
        {
            int Count = db.Users.Where(x => x.Email == email).Count();

            return Count > 0;
        }

        public User CreateUser(SignupUser model)
        {
            var ProjectLastSeen = DateTime.UtcNow;
            TimeZoneInfo easternZone = TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time");
            DateTime easternTime = TimeZoneInfo.ConvertTimeFromUtc(ProjectLastSeen, easternZone);



            User us = new User();
            us.RoleId = model.RoleId;
            us.FirstName = model.FirstName;
            us.LastName = model.LastName;
            us.PhoneNumber = model.PhoneNumber;
            us.Email = model.Email;
            us.VerificationCode = model.VerificationCode;
            us.Password = model.Password;
            us.IsActive = false;
            us.CreateDate = easternTime;
            us.ModifiedDate = easternTime;
            us.SessionID = model.SessionID;
            us.LoginStatus = false;
            db.Entry(us).State = System.Data.Entity.EntityState.Added;
            db.SaveChanges();

            return us;
        }

        public User UpdateLoginStatusByUserID(int Id)
        {
            var data = db.Users.Where(x => x.Id == Id).FirstOrDefault();
            data.LoginStatus = true;

            db.Entry(data).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();

            return data;
        }

      







        //public UserDetail CreateUserDetail(SignupUser model)
        //{
        //    var ProjectLastSeen = DateTime.UtcNow;
        //    TimeZoneInfo easternZone = TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time");
        //    DateTime easternTime = TimeZoneInfo.ConvertTimeFromUtc(ProjectLastSeen, easternZone);


        //    UserDetail us = new UserDetail();

        //    us.UserId = model.Id;
        //    us.CompanyName = model.CompanyName;
        //    us.BusinessPhoneNumber = model.BusinessPhoneNumber;
        //    us.BusinessAddress = model.BusinessAddress;
        //    us.PostalCode = model.PostalCode;
        //    us.NumberOfEmployee = model.NumberOfEmployee;
        //    us.LegalStructure = model.LegalStructure;
        //    us.InBusinessSince = model.InBusinessSince;
        //    us.CreatedDate = easternTime;
        //    us.ModifiedDate = easternTime;

        //    db.Entry(us).State = System.Data.Entity.EntityState.Added;
        //    db.SaveChanges();

        //    return us;
        //}
       
        //public UserDetail UpdateUserDetail(SignupUser model)
        //{
        //    var ProjectLastSeen = DateTime.UtcNow;
        //    TimeZoneInfo easternZone = TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time");
        //    DateTime easternTime = TimeZoneInfo.ConvertTimeFromUtc(ProjectLastSeen, easternZone);


        //    var data1 = db.UserDetails.Where(x => x.UserId == model.Id).FirstOrDefault();
        //    //UserDetail data = new UserDetail();
        //    //data.UserId = model.Id;
        //    data1.CompanyName = model.CompanyName;
        //    data1.BusinessPhoneNumber = model.BusinessPhoneNumber;
        //    data1.BusinessAddress = model.BusinessAddress;
        //    data1.PostalCode = model.PostalCode;
        //    data1.NumberOfEmployee = model.NumberOfEmployee;
        //    data1.LegalStructure = model.LegalStructure;
        //    data1.InBusinessSince = model.InBusinessSince;
        //    data1.ModifiedDate = easternTime;

        //    db.Entry(data1).State = System.Data.Entity.EntityState.Modified;
        //    db.SaveChanges();

        //    return data1;
        //}
        public User UpdateUser(SignupUser model)
        {
            var ProjectLastSeen = DateTime.UtcNow;
            TimeZoneInfo easternZone = TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time");
            DateTime easternTime = TimeZoneInfo.ConvertTimeFromUtc(ProjectLastSeen, easternZone);


            var data = db.Users.Where(x => x.Id == model.Id).FirstOrDefault();
            //data.AccountTypeID = model.AccountTypeID;
            data.FirstName = model.FirstName;
            data.LastName = model.LastName;
            data.PhoneNumber = model.PhoneNumber;
            data.Email = model.Email;
            //data.VerificationCode = model.VerificationCode;
            data.IsActive = model.IsActive;
            data.ModifiedDate = easternTime;
            //data.CityId = model.CityId;
            //data.IncentiveCode = model.IncentiveCode;
            db.Entry(data).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();

            return data;
        }

        public FileAttach DeleteImage(int id)
        {
            var data = db.FileAttaches.Where(x => x.Id == id).FirstOrDefault();
            data.isActive = false;

            db.Entry(data).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();


            return data;
        }

        public FileAttach FileAttachSave(int ProjectId, string ServerPath, string SessionID)
        {
            var ProjectLastSeen = DateTime.UtcNow;
            TimeZoneInfo easternZone = TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time");
            DateTime easternTime = TimeZoneInfo.ConvertTimeFromUtc(ProjectLastSeen, easternZone);


            FileAttach us = new FileAttach();

            us.FilePath = ServerPath;
            us.CreatedDate = easternTime;
            us.BrowserId = SessionID;
            us.ProjectId = ProjectId;
            us.isActive = true;

            db.Entry(us).State = System.Data.Entity.EntityState.Added;
            db.SaveChanges();



            return us;

            }


            public EmailTemplate getEmailTemplate(string TemplateName)
        {
            return db.EmailTemplates.Where(x => x.Template == TemplateName).SingleOrDefault();
        }
        public EmailSetting EmailSettings()
        {
            return db.EmailSettings.OrderByDescending(x => x.Id).FirstOrDefault();
        }

        //public bool FileAttach(Pc_FileAttach model)
        //{

        //    bool status = true;
        //    var data = db.FileAttaches.Where(x => x.Id == model.Id).Count();
        //    if (data == 0)
        //    {
        //        FileAttach us = new FileAttach();

        //        HttpSessionState sessionValue = HttpContext.Current.Session;
        //        string SeenionId = sessionValue.SessionID.ToString();

        //        us.FilePath = Convert.ToString(model.Filestring);
        //        us.CreatedDate = easternTime;
        //        us.BrowserId = SeenionId;

        //        db.Entry(us).State = System.Data.Entity.EntityState.Added;
        //        db.SaveChanges();
        //    }
        //    else
        //    {
        //        status = false;
        //    }
        //    return status;
        //}
        public int ProfileImageCount(int UserID)
        {

            var data = db.ProfileImages.Where(x => x.UserId == UserID).Count();
            return data;

        }
        public setting EditSetting(int id)
        {
            var data = db.settings.Where(x => x.Id == id).FirstOrDefault();

            return data;
        }
        public List<setting> GetSettingAlreadyExist(string Key)
        {
            var data = db.settings.Where(x => x.Key == Key).ToList();
            return data;
        }
        public List<setting> GetSettingList()
        {
            var data = db.settings.ToList();
            return data;
        }
        public string DeleteSetting(int id)
        {
            var data = db.settings.Where(x => x.Id == id).FirstOrDefault();
            db.settings.Remove(data);
            db.SaveChanges();

            return "OK";
        }
        public setting SaveSetting(Pc_Setting model)
        {
            setting s = new setting();
            if (model.Id > 0)
            {
                s.Id = model.Id;
                s.Key = model.Key;
                s.Value = model.Value;
                db.Entry(s).State = System.Data.Entity.EntityState.Modified;


            }
            else
            {
                s.Id = model.Id;
                s.Key = model.Key;
                s.Value = model.Value;
                db.settings.Add(s);

            }

            db.SaveChanges();
            return s;
        }
        public ProfileImage ProfileImageSave(int UserID, string ServerPath)
        {
            var ProjectLastSeen = DateTime.UtcNow;
            TimeZoneInfo easternZone = TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time");
            DateTime easternTime = TimeZoneInfo.ConvertTimeFromUtc(ProjectLastSeen, easternZone);


            ProfileImage us = new ProfileImage();
            us.UserId = UserID;
            us.ImagePath = ServerPath;
            us.CreateDate = easternTime;

            db.Entry(us).State = System.Data.Entity.EntityState.Added;
            db.SaveChanges();

            return us;

        }
        public ProfileImage ProfileImageUpdate(int UserID, string ServerPath)
        {
            var ProjectLastSeen = DateTime.UtcNow;
            TimeZoneInfo easternZone = TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time");
            DateTime easternTime = TimeZoneInfo.ConvertTimeFromUtc(ProjectLastSeen, easternZone);


            var data = db.ProfileImages.Where(x => x.UserId == UserID).FirstOrDefault();

            data.UserId = UserID;
            data.ImagePath = ServerPath;
            //data.CreateDate = easternTime;

            db.Entry(data).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();

            return data;

        }

        public GalleryImage GalleryImageSave(int UserID, string ServerPath)
        {
            var ProjectLastSeen = DateTime.UtcNow;
            TimeZoneInfo easternZone = TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time");
            DateTime easternTime = TimeZoneInfo.ConvertTimeFromUtc(ProjectLastSeen, easternZone);


            GalleryImage us = new GalleryImage();

            us.UserId = UserID;
            us.GalImagePath = ServerPath;
            us.CreateDate = easternTime;


            db.Entry(us).State = System.Data.Entity.EntityState.Added;
            db.SaveChanges();
            return us;

        }
        //DeleteWork
        public User DeleteUser(int id)
        {
            var data = db.Users.Where(x => x.Id == id).SingleOrDefault();
            data.IsActive = false;
            data.IsDeleted = true;
            db.Entry(data).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();

            return data;
        }

        //public List<sp_GetGalleryImages_Result> GetGalleryImages(int UserID)
        //{
        //    return db.sp_GetGalleryImages(UserID).ToList();
        //}
        //public sp_GetUserDetail_Result GetUserDetail(int UserID)
        //{
        //    return db.sp_GetUserDetail(UserID).FirstOrDefault();
        //}
       
        public User GetUserByEmail(string email)
        {
            var user = db.Users.Where(x => x.Email == email).FirstOrDefault();
            return user;
        }
        public User ProfileUpdate(SignupUser model)
        {

            var data = db.Users.Where(x => x.Id == model.Id).FirstOrDefault();
            data.FirstName = model.FirstName;
            data.LastName = model.LastName;
            data.PhoneNumber = model.PhoneNumber;
            data.Email = model.Email;
            data.IsActive = model.IsActive;
            db.Entry(data).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();

            return data;
        }
        //public UserDetail UserDetailProfileUpdate(SignupUser model)
        //{

        //    var data = db.UserDetails.Where(x => x.UserId == model.Id).FirstOrDefault();
        //    data.CompanyName = model.CompanyName;
        //    data.BusinessAddress = model.BusinessAddress;
        //    data.BusinessPhoneNumber = model.BusinessPhoneNumber;
        //    data.NumberOfEmployee = model.NumberOfEmployee;
        //    data.InBusinessSince = model.InBusinessSince;
        //    data.LegalStructure = model.LegalStructure;
        //    data.PostalCode = model.PostalCode;
        //    data.PostalCode = model.PostalCode;
        //    data.Licenses = model.Licenses;
        //    data.Certificates = model.Certificates;
        //    data.Awards = model.Awards;
        //    data.CommercialServices = model.CommercialServices;
        //    data.IndustrialServices = model.IndustrialServices;
        //    data.Financing = model.Financing;
        //    data.EmergencyService = model.EmergencyService;
        //    data.CompanyOverview = model.CompanyOverview;
        //    data.Products = model.Products;
        //    data.Brands = model.Brands;
        //    data.Styles = model.Styles;
        //    data.Specialties = model.Specialties;
        //    data.PaymentMethods = model.PaymentMethods;
        //    data.LiabilityInsurance = model.LiabilityInsurance;
        //    data.Diplomas = model.Diplomas;
        //    data.WrittenContract = model.WrittenContract;
        //    data.ProjectMinimum = model.ProjectMinimum;
        //    data.Warranty = model.Warranty;
        //    data.WebsiteUrl = model.WebsiteUrl;
        //    data.InstagramUrl = model.InstagramUrl;
        //    data.FacebookUrl = model.FacebookUrl;
        //    data.TwitterUrl = model.TwitterUrl;
        //    data.YoutubeUrl = model.YoutubeUrl;

        //    db.Entry(data).State = System.Data.Entity.EntityState.Modified;
        //    db.SaveChanges();

        //    return data;
        //}
        public User PasswordUpdate(SignupUser model)
        {

            var data = db.Users.Where(x => x.Id == model.Id).FirstOrDefault();
            string EncryptedPassword = Encryption.Encrypt(model.Password);

            data.Password = EncryptedPassword;
            db.Entry(data).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();


            return data;
        }
       
        public Array GetImagesByProjectID(int ProjectId)
        {
            return db.FileAttaches.Where(x => x.ProjectId == ProjectId && x.isActive == true).Select(x => x.FilePath).ToArray();
        }
        public GalleryImage DeleteGalImage(int id)
        {

            var data = db.GalleryImages.Where(x => x.Id == id).FirstOrDefault();

            db.Entry(data).State = System.Data.Entity.EntityState.Deleted;
            db.SaveChanges();


            return data;
        }
        //public FileAttach DeleteImage(int id)
        //{
        //    var data = db.FileAttaches.Where(x => x.Id == id).FirstOrDefault();
        //    data.isActive = false;

        //    db.Entry(data).State = System.Data.Entity.EntityState.Modified;
        //    db.SaveChanges();


        //    return data;
        //}
        public string UploadLimitCount()
        {
            var value = "MaxUploadLimit";
            return db.settings.Where(x => x.Key == value).FirstOrDefault().Value;

        }
        public int UploadGalImageCount(int UserId)
        {

            return db.GalleryImages.Where(x => x.UserId == UserId).Count();

        }

        //public List<GalleryImage> CountofGalleryImages(int userId)
        //{
        //    return db.GalleryImages.Where(x => x.UserId == userId).ToList();
        //}
      
       
      
        public List<User> GetUserList()
        {
            return db.Users.Where(x => x.IsDeleted == false).ToList();


        }
        public User checkCurrentPass(int id, string password)
        {
            return db.Users.Where(x => x.Id == id && x.Password == password && x.IsActive == true).FirstOrDefault();
        }


      
       
        public List<Role> GetAllRoles()
        {
            return db.Roles.ToList();
        }
     

        public User Verification(string Code)
        {

            var data = db.Users.Where(x => x.VerificationCode == Code).FirstOrDefault();

            data.IsActive = true;
            data.VerificationCode = "";
            db.Entry(data).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();

            return data;
        }
        public User CheckVerificationCode(string Code)
        {

            var data = db.Users.Where(x => x.VerificationCode == Code).FirstOrDefault();


            return data;
        }



     
      
        public dynamic GetUserByIDbill(int id)
        {
            return db.Users.Where(x => x.Id == id).FirstOrDefault();
        }
       
   
      
        public void SaveErrorLog(string email, string description, string exception, DateTime createDat)
        {

           // db.SP_SaveErrorLogs(email, description, exception, createDat);
            
        }
 


    }

}