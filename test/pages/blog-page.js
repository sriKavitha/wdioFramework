class BlogPage
{

    get openBlog()
    {
        return browser.url('/blog');
    }
    get posts()
    {
        return $$("#zak-secondary ul >li");
    }
}
export default new BlogPage;