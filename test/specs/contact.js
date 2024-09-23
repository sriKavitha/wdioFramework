import ContactPage from "../pages/contact-page";
import { faker } from '@faker-js/faker';


describe('Contact', () => {
    it('Fill in the fields in the Contact form and submit the form', async() => {
        await ContactPage.openContact;
        // we can use addValue or setValue to input fields (equivalent to sendKeys in Java)
        // addValue - simply adds to the input field without clearing the prev content
        // setValue - clears and then add the value to input field
        // const txt=await ContactPage.submitForm('Tim','mail@gmail.com','123-121-1234','sample test message');
        const txt=await ContactPage.submitForm(faker.person.fullName(), faker.internet.email(),faker.phone.number(),faker.lorem.paragraph());
        await expect(txt).toEqual(expect.stringContaining('Thanks for contacting'));

        // await browser.pause(4000)        
    });
});