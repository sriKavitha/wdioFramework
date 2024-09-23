import NavComponent from './components/nav-comp';
class HomePage
{
    navigateHome()
    {
        return browser.url("/"); 
    } 
    get getStarted()
    {
        return $('#get-started')
    }
    get logo()
    {
        return $('.custom-logo');
    }
    get headingEle()
    {
        return $('//h1[text()="Think different. Make different."]');
    }

    get NavComponent()
    {
        return NavComponent;
    }
}
export default new HomePage;
