class ContactPage {

    get openContact()
    {
        return browser.url('/contact');
    }
    get fName()
    {
        return $('//*[contains(@class,"first-name")]/input');
    }
    get email()
    {
        return $('//*[@type="email"]')
    }
    get contactPhone()
    {
        return $('//*[contains(@class,"contact-phone")]/input');
    }
    get contactMessage() 
    {
        return $('//*[contains(@class,"contact-message")]/textarea');
    }
    get submitBtn()
    {
        return $('//button[@type="submit"]');
    }
    get verifyStatus()
    {
        return $('//*[normalize-space(text())="Thanks for contacting us! We will be in touch with you shortly"]');
    }

    async submitForm(name,eMail,ph,msg)
    {
        await this.fName.setValue(name);
        await this.email.setValue(eMail);
        await this.contactPhone.setValue(ph);
        await this.contactMessage.setValue(msg);
        await this.submitBtn.click();
        const conf=await this.verifyStatus.getText();
        console.log("Confirmation msg:",conf)
        return conf;
    }

    // async submitForm(name, eMail, ph, msg) {
    //     await this.fName.setValue(name);
    //     await this.email.setValue(eMail);
    //     await this.contactPhone.setValue(ph);
    //     await this.contactMessage.setValue(msg);
    //     await this.submitForm.click();  // Use 'await' for clicking the submit button
    //     return await this.verifyStatus.getText();  // Await the text extraction
    // }
}
export default new ContactPage;