using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CCI_Escalate.Models.PartialClasses
{
    public class SignupUser
    {
        public int Id { get; set; }
        public int RoleId { get; set; }
        public string FirstName { get; set; }
        public string Title { get; set; }
        public string LastName { get; set; }
        public string Description { get; set; }
        public string UserName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string VerificationCode { get; set; }
        public string Password { get; set; }
        public bool IsActive { get; set; }
        public string SessionID { get; set; }
        public int CityId { get; set; }
        public string CompanyName { get; set; }
        public string BusinessPhoneNumber { get; set; }
        public string BusinessAddress { get; set; }
        public string PostalCode { get; set; }
        public int NumberOfEmployee { get; set; }
        public string LegalStructure { get; set; }

        public string InBusinessSince { get; set; }
        public string CreatedDate { get; set; }
        public string ModifiedDate { get; set; }
        public string IncentiveCode { get; set; }
        public int ReferralId { get; set; }
        public int UserId { get; set; }
        public bool IsPaymentDone { get; set; }
        public int EmailExists { get; set; }
        public string Licenses { get; set; }
        public string Certificates { get; set; }
        public string Awards { get; set; }
        public bool CommercialServices { get; set; }
        public bool IndustrialServices { get; set; }
        public bool Financing { get; set; }
        public bool EmergencyService { get; set; }
        public string CompanyOverview { get; set; }
        public string Products { get; set; }
        public string Brands { get; set; }
        public string Styles { get; set; }
        public string Specialties { get; set; }
        public string PaymentMethods { get; set; }
        public bool LiabilityInsurance { get; set; }
        public string Diplomas { get; set; }
        public bool WrittenContract { get; set; }
        public string ProjectMinimum { get; set; }
        public string Warranty { get; set; }
        public string AdminName { get; set; }
        public string AdminEmail { get; set; }
        public string UserFirstName { get; set; }
        public string UserLastName { get; set; }

        public string WebsiteUrl { get; set; }
        public string InstagramUrl { get; set; }
        public string FacebookUrl { get; set; }
        public string TwitterUrl { get; set; }
        public string YoutubeUrl { get; set; }
        public int ReviewId { get; set; }
        public string Subject { get; set; }
        public int CreatedBy { get; set; }
        public DateTime ReviewDate { get; set; }
        //public DateTime CreatedDate { get; set; }

        public string Interval { get; set; }
        public string ContactInfo { get; set; }
        public int ContractorId { get; set; }
        public string url { get; set; }
    }

}