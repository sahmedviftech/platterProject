using CCI_Escalate.Models.DAL;
using CCI_Escalate.Models.PartialClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CCI_Escalate.Models.BAL
{
    public class BAL_Setting
    {
        DAL.dal dal = new DAL.dal();

        public dynamic SaveData(Pc_Setting model)
        {
            try
            {
                var data = dal.SaveSetting(model);
                if (data != null)
                {
                    return Shared.returnMessageJSON(Messages.AddSuccessTitle, Messages.AddSuccessDescription, false);

                }
                else
                {
                    return Shared.returnMessageJSON(Messages.AddInValidDataTitle, Messages.AddInValidDataDescription, true);
                }
            }
            catch (Exception exp)
            {

                var email = EscalateSession.CurrentUser.Email;
                dal.SaveErrorLog(email, exp.Data.ToString(), exp.Message, DateTime.Now);
                return Shared.returnMessageJSON(exp.Data.ToString(), exp.Message.ToString(), true);
            }


        }


        public dynamic SettingDelete(int id)
        {
            try
            {
                if (id != 0)
                {
                    dal.DeleteSetting(id);
                    return Shared.returnMessageJSON(Messages.DeleteSuccessTitle, Messages.DeleteSuccessDescription, false);

                }
                else
                {
                    return Shared.returnMessageJSON(Messages.DeleteInValidDataTitle, Messages.DeleteInValidDataDescription, true);
                }
            }
            catch (Exception exp)
            {
                var email = EscalateSession.CurrentUser.Email;
                dal.SaveErrorLog(email, exp.Data.ToString(), exp.Message, DateTime.Now);
                return Shared.returnMessageJSON(exp.Data.ToString(), exp.Message.ToString(), true);
            }

        }


        public setting GetCityByID(int id)
        {
            return dal.EditSetting(id);
        }

        public List<setting> GetSettingRecord()
        {
            return dal.GetSettingList();
        }
        public List<setting> GetSettingAlreadyExist(string Key)
        {
            return dal.GetSettingAlreadyExist(Key);
        }
    }
}
        