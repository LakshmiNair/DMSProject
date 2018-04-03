class Contact {

    constructor(Salutation, FirstName, LastName, MiddleInitials, Suffix, BirthDate, AddressLine1, AddressLine2, AddressLine3, City, State, PostalCode, DayPhone, EveningPhone, Email, MobilePhone, Company, Fax, Country) {
        this.Salutation = Salutation;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.MiddleInitials = MiddleInitials;
        this.Suffix = Suffix;
        this.BirthDate = BirthDate;
        this.AddressLine1 = AddressLine1;
        this.AddressLine2 = AddressLine2;
        this.AddressLine3 = AddressLine3;
        this.City = City;
        this.State = State;
        this.PostalCode = PostalCode;
        this.DayPhone = DayPhone;
        this.EveningPhone = EveningPhone;
        this.Email = Email;
        this.MobilePhone = MobilePhone;
        this.Company = Company;
        this.Fax = Fax;
        this.Country = Country;
    }
}

module.exports = Contact;