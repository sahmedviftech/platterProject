using CCI_Escalate;
using CCI_Escalate.Models.DAL;
using Sentry;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;

namespace CCI_Escalate
{
    public class MvcApplication : System.Web.HttpApplication
    {
        private IDisposable _sentry;

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            //WebApiConfig.Register(GlobalConfiguration.Configuration);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            

            //GlobalConfiguration.Configuration.MapHttpAttributeRoutes();
            //GlobalConfiguration.Configuration.EnsureInitialized();
            _sentry = SentrySdk.Init(o =>
            {
                // We store the DSN inside Web.config; make sure to use your own DSN!
                o.Dsn = new Dsn(ConfigurationManager.AppSettings["SentryDsn"]);

                // Get Entity Framework integration
                o.AddEntityFramework();
            });
        }
        protected void Application_Error(object sender, EventArgs e)
        {
            Exception exception = Server.GetLastError();
            Response.Clear();

            EscalateDbEntities db = new EscalateDbEntities();
            //// agar save karwana hai tw yahan insert karwa dena thk hai ? 
            HttpException httpException = exception as HttpException;

            if (exception.Message != null)
            {
                var userid=0;
                var email="";

                var user = EscalateSession.CurrentUser;
                if (user == null)
                {
                    userid = 0;
                    email = "befor login"
;
                }
                else {

                    userid = user.Id;
                    email = user.Email;
                }
                db.ErrorLogs.Add(new ErrorLog
                {
                    exceptionString = exception.Message,
                    Description = exception.StackTrace,

                    UserEmail = email,
                    ID = userid,
                    CreatedDate = DateTime.Now,
                });
                db.SaveChanges();
                //clear error on server
                Server.ClearError();

                Response.Redirect(string.Format("~/Error/Index/"));
            }

            // Capture unhandled exceptions
            SentrySdk.CaptureException(exception);

        }
    }
}
