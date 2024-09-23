class NavComponent{
    get navMenuLinks()
    {
        return $$('#zak-primary-menu li[id*=menu]');
    }

    get NavMenuFirstLink()
    {
        return $('#zak-primary-menu li')
    }
}
export default new NavComponent;