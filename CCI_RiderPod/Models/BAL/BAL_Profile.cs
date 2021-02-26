using CCI_Escalate.Models.DAL;
using CCI_Escalate.Models.PartialClasses;
using CCI_RiderWebAPI.Core;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace CCI_Escalate.Models.BAL
{
    public class BAL_Profile
    {
        DAL.dal dal = new DAL.dal();

        public dynamic ProfileUpdate(SignupUser model)
        {
            try
            {
                if (isDataValid(model))
                {
                    dal.ProfileUpdate(model);
                   // dal.UserDetailProfileUpdate(model);
                    return Shared.returnMessageJSON(Messages.UserUpdateSuccessTitle, Messages.UserUpdateSuccessDescription, false);
                }
                else
                {
                    return Shared.returnMessageJSON(Messages.UserUpdateDataTitle, Messages.UserUpdateDescription, true);
                }

            }
            catch (Exception ex)
            {
                var email = EscalateSession.CurrentUser;
                if (email != null)
                {
                    dal.SaveErrorLog(email.Email, "BAL_Profile - ProfileUpdate", ex.Message, DateTime.Now);
                }
                else
                {
                    dal.SaveErrorLog("", "BAL_Profile - ProfileUpdate", ex.Message, DateTime.Now);
                }
                return Shared.returnMessageJSON(ex.Data.ToString(), ex.Message.ToString(), true);

            }


        }
        public dynamic PasswordUpdate(SignupUser model)
        {
            try
            {
                if (isPasswordValid(model))
                {
                    dal.PasswordUpdate(model);
                    return Shared.returnMessageJSON(Messages.UserUpdateSuccessTitle, Messages.UserUpdateSuccessDescription, false);

                }
                else
                {
                    return Shared.returnMessageJSON(Messages.UserUpdateDataTitle, Messages.UserUpdateDescription, true);
                }
            }
            catch (Exception ex)
            {
                var email = EscalateSession.CurrentUser;
                if (email != null)
                {
                    dal.SaveErrorLog(email.Email, "BAL_Profile - PasswordUpdate", ex.Message, DateTime.Now);
                }
                else
                {
                    dal.SaveErrorLog("", "BAL_Profile - PasswordUpdate", ex.Message, DateTime.Now);
                }
                return Shared.returnMessageJSON(ex.Data.ToString(), ex.Message.ToString(), true);

            }

        }
        public dynamic DeleteGalImage(int Id)
        {
            try
            {
                if (isDataDeleteValid(Id))
                {
                    dal.DeleteGalImage(Id);
                    return Shared.returnMessageJSON(Messages.UserUpdateSuccessTitle, Messages.UserUpdateSuccessDescription, false);
                }
                else
                {
                    return Shared.returnMessageJSON(Messages.UserUpdateDataTitle, Messages.UserUpdateDescription, true);
                }

            }
            catch (Exception ex)
            {
                var email = EscalateSession.CurrentUser;
                if (email != null)
                {
                    dal.SaveErrorLog(email.Email, "BAL_Profile - DeleteGalImage", ex.Message, DateTime.Now);
                }
                else
                {
                    dal.SaveErrorLog("", "BAL_Profile - DeleteGalImage", ex.Message, DateTime.Now);
                }
                return Shared.returnMessageJSON(ex.Data.ToString(), ex.Message.ToString(), true);

            }


        }
        public bool isDataValid(SignupUser model)
        {
            if (model.Email != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public bool isDataDeleteValid(int Id)
        {
            if (Id != 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public bool isPasswordValid(SignupUser model)
        {
            if (model.Password != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        //public dynamic ImageSave(Pc_Images model)
        //{
        // if (isDataimageValid(model))
        // {
        // if (dal.ImageSave(model))
        // {
        // return Shared.returnMessageJSON(Messages.AddSuccessTitle, Messages.AddSuccessDescription, false);
        // }
        // else
        // {
        // return Shared.returnMessageJSON(Messages.AddErrorTitle, Messages.AddErrorDescription, true);
        // }
        // }
        // else
        // {
        // return Shared.returnMessageJSON(Messages.AddInValidDataTitle, Messages.AddInValidDataDescription, true);
        // }

        //}
        //public dynamic GalleryImageSave(Pc_GalleryImages model)
        //{
        //}
        //public dynamic FileAttachImage(Pc_Images model)
        //{

        // if (dal.ImageSave(model))
        // {
        // return Shared.returnMessageJSON(Messages.AddSuccessTitle, Messages.AddSuccessDescription, false);
        // }
        // else
        // {
        // return Shared.returnMessageJSON(Messages.AddErrorTitle, Messages.AddErrorDescription, true);
        // }


        //}
        public bool isDataimageValid(Pc_Images model)
        {
            if (model.ImagesPath != null)
            {
                return true;
            }
            else
            {
                return false;
            }

        }
        public bool isDataGalImageValid(Pc_GalleryImages model)
        {
            if (model.GalImagePath != null)
            {
                return true;
            }
            else
            {
                return false;
            }

        }


        public dynamic UploadImage(Pc_Images model)
        {

            try
            {
                var file = model.ImagesPath;
                string CenteralLocation = "Content/Images/";
                Pc_UploadedImages result = new Pc_UploadedImages();


                if (file != null)
                {
                    var fileName = Path.GetFileName(file.FileName);
                    var extention = Path.GetExtension(fileName);

                    Guid guid = Guid.NewGuid();

                    string path = "~/" + CenteralLocation + guid + extention;
                    var paths = Path.Combine(System.Web.HttpContext.Current.Server.MapPath(path));
                    file.SaveAs(paths);

                    string ServerFilePath = "../" + CenteralLocation + guid + extention;

                    //string ServerFilePath = path.ToString();
                    var countImg = dal.ProfileImageCount(model.UserId);
                    if (countImg > 0)
                    {
                        dal.ProfileImageUpdate(model.UserId, ServerFilePath);
                    }
                    else
                    {
                        dal.ProfileImageSave(model.UserId, ServerFilePath);
                    }


                    result.Message = Shared.returnMessageJSON(Messages.AddSuccessTitle, Messages.AddSuccessDescription, false);
                    result.ImagesURL = ServerFilePath;
                    result.UserId = model.UserId;
                }
                else
                {
                    result.Message = Shared.returnMessageJSON(Messages.AddSuccessTitle, Messages.AddSuccessDescription, true);
                }



                return result;
            }
            catch (Exception ex)
            {
                var email = EscalateSession.CurrentUser;
                if (email != null)
                {
                    dal.SaveErrorLog(email.Email, "BAL_Profile - UploadImage", ex.Message, DateTime.Now);
                }
                else
                {
                    dal.SaveErrorLog("", "BAL_Profile - UploadImage", ex.Message, DateTime.Now);
                }
                return Shared.returnMessageJSON(ex.Data.ToString(), ex.Message.ToString(), true);

            }




        }
        public bool checkCurrentPass(string pass)
        {
            bool ischecked = false;

            var CurrentId = EscalateSession.CurrentUser.Id;
            string EncryptedPassword = Encryption.Encrypt(pass);

            var data = dal.checkCurrentPass(CurrentId, EncryptedPassword);

            if (data == null)
            {
                //  throw new Exception("Current Password Not Matched");
                ischecked = false;
            }
            else
            {

                ischecked = true;

            }
            return ischecked;

        }

        //10 April 2020
        //public dynamic UploadGalImage(Pc_GalleryImages model)
        //{
        //    try
        //    {
        //        var file = model.GalImagePath;
        //        string CenteralLocation = "Content/Images/";
        //        Pc_UploadedGalleryImages result = new Pc_UploadedGalleryImages();
        //        List<string> ImagesUrl = new List<string>();
        //        if (file.Count > 0)
        //        {
        //            int maxUploadLimit = Convert.ToInt32(dal.UploadLimitCount());
        //            int currentUploaded = Convert.ToInt32(dal.UploadGalImageCount(model.UserId));
        //            //var countadd = dal.CountofGalleryImages(model.UserId);
        //            //int UploadLimit = countadd.Count;
        //            for (int i = 0; i < file.Count && currentUploaded < maxUploadLimit; i++)
        //            {
        //                var fileName = Path.GetFileName(file[i].FileName);
        //                var extention = Path.GetExtension(file[i].FileName);
        //                Guid guid = Guid.NewGuid();
        //                string path = "~/" + CenteralLocation + guid + extention;
        //                var paths = Path.Combine(System.Web.HttpContext.Current.Server.MapPath(path));
        //                file[i].SaveAs(paths);
        //                string ServerFilePath = "../" + CenteralLocation + guid + extention;
        //                ImagesUrl.Add(ServerFilePath);
        //                dal.GalleryImageSave(model.UserId, ServerFilePath);
        //                currentUploaded = currentUploaded + 1;
        //            }
        //            result.Message = Shared.returnMessageJSON(Messages.AddSuccessTitle, Messages.AddSuccessDescription, false);
        //        }
        //        else
        //        {
        //            result.Message = Shared.returnMessageJSON(Messages.AddSuccessTitle, Messages.AddSuccessDescription, true);
        //        }
        //        result.ImagesURL = ImagesUrl;
        //        result.UserId = model.UserId;
        //        return result;
        //    }
        //    catch (Exception exp)
        //    {
        //        return Shared.returnMessageJSON(exp.Data.ToString(), exp.Message.ToString(), true);
        //    }
        //}

        public dynamic UploadGalImage(Pc_GalleryImages model)
        {
            try
            {
                GalleryImage retrunModal = new GalleryImage();
                var file = model.GalImagePath;
                string CenteralLocation = "Content/Images/";
                Pc_UploadedGalleryImages result = new Pc_UploadedGalleryImages();
                List<string> ImagesUrl = new List<string>();
                List<int> ImagesIds = new List<int>();
                if (file.Count > 0)
                {
                    int maxUploadLimit = Convert.ToInt32(dal.UploadLimitCount());
                    int currentUploaded = Convert.ToInt32(dal.UploadGalImageCount(model.UserId));
                    for (int i = 0; i < file.Count && currentUploaded < maxUploadLimit; i++)
                    {
                        var fileName = Path.GetFileName(file[i].FileName);
                        var extention = Path.GetExtension(file[i].FileName);
                        Guid guid = Guid.NewGuid();
                        string path = "~/" + CenteralLocation + guid + extention;
                        var paths = Path.Combine(System.Web.HttpContext.Current.Server.MapPath(path));
                        file[i].SaveAs(paths);
                        string ServerFilePath = "../" + CenteralLocation + guid + extention;
                        ImagesUrl.Add(ServerFilePath);
                        retrunModal = dal.GalleryImageSave(model.UserId, ServerFilePath);
                        currentUploaded = currentUploaded + 1;
                        ImagesIds.Add(retrunModal.Id);
                    }
                    result.Message = Shared.returnMessageJSON(Messages.AddSuccessTitle, Messages.AddSuccessDescription, false);
                }
                else
                {
                    result.Message = Shared.returnMessageJSON(Messages.AddSuccessTitle, Messages.AddSuccessDescription, true);
                }
                result.ImageIds = ImagesIds;
                result.ImagesURL = ImagesUrl;
                result.UserId = model.UserId;

                return result;
            }
            catch (Exception ex)
            {
                var email = EscalateSession.CurrentUser;
                if (email != null)
                {
                    dal.SaveErrorLog(email.Email, "BAL_Profile - UploadGalImage", ex.Message, DateTime.Now);
                }
                else
                {
                    dal.SaveErrorLog("", "BAL_Profile - UploadGalImage", ex.Message, DateTime.Now);
                }
                return Shared.returnMessageJSON(ex.Data.ToString(), ex.Message.ToString(), true);

            }
        }

        //DeleteWork
        public dynamic DeleteUser(int id)
        {
            try
            {
                if (id != 0)
                {
                    dal.DeleteUser(id);
                    return Shared.returnMessageJSON(Messages.DeleteSuccessTitle, Messages.DeleteSuccessDescription, false);

                }
                else
                {
                    return Shared.returnMessageJSON(Messages.DeleteInValidDataTitle, Messages.DeleteInValidDataDescription, true);
                }
            }
            catch (Exception ex)
            {
                var email = EscalateSession.CurrentUser;
                if (email != null)
                {
                    dal.SaveErrorLog(email.Email, "BAL_Profile - DeleteUser", ex.Message, DateTime.Now);
                }
                else
                {
                    dal.SaveErrorLog("", "BAL_Profile - DeleteUser", ex.Message, DateTime.Now);
                }
                return Shared.returnMessageJSON(ex.Data.ToString(), ex.Message.ToString(), true);

            }


        }





        //public List<sp_GetGalleryImages_Result> GetGalleryImages(int UserId)
        //{
        //    return dal.GetGalleryImages(UserId);
        //}
        //public sp_GetUserDetail_Result GetUserDetail(int UserId)
        //{
        //    return dal.GetUserDetail(UserId);
        //}
       
       
       
    }
}