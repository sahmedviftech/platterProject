﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class EscalateDbEntities : DbContext
    {
        public EscalateDbEntities()
            : base("name=EscalateDbEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<BusinessUnit> BusinessUnits { get; set; }
        public virtual DbSet<BusinessUnitQuestion> BusinessUnitQuestions { get; set; }
        public virtual DbSet<Client> Clients { get; set; }
        public virtual DbSet<ClientBusinessUnit> ClientBusinessUnits { get; set; }
        public virtual DbSet<DefinitionList> DefinitionLists { get; set; }
        public virtual DbSet<EmailSetting> EmailSettings { get; set; }
        public virtual DbSet<EmailTemplate> EmailTemplates { get; set; }
        public virtual DbSet<ErrorLog> ErrorLogs { get; set; }
        public virtual DbSet<FileAttach> FileAttaches { get; set; }
        public virtual DbSet<GalleryImage> GalleryImages { get; set; }
        public virtual DbSet<ProfileImage> ProfileImages { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<setting> settings { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<User> Users { get; set; }
    
        public virtual int SaveErrorLogs(string email, string description, string exception, Nullable<System.DateTime> createDate)
        {
            var emailParameter = email != null ?
                new ObjectParameter("email", email) :
                new ObjectParameter("email", typeof(string));
    
            var descriptionParameter = description != null ?
                new ObjectParameter("description", description) :
                new ObjectParameter("description", typeof(string));
    
            var exceptionParameter = exception != null ?
                new ObjectParameter("exception", exception) :
                new ObjectParameter("exception", typeof(string));
    
            var createDateParameter = createDate.HasValue ?
                new ObjectParameter("createDate", createDate) :
                new ObjectParameter("createDate", typeof(System.DateTime));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SaveErrorLogs", emailParameter, descriptionParameter, exceptionParameter, createDateParameter);
        }
    }
}
