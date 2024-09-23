import BlogPage from "../pages/blog-page";
describe('Blog', () => {
    it('Get all the recent posts and assert each post length is greater than 10 & posts greater than 4', async() => {
        // open blog page
        await BlogPage.openBlog;

        // const recentPosts = await $$("#zak-secondary ul >li");
        const recentPosts = await BlogPage.posts;

        for(const recentPost of recentPosts)
            {
                const txt = await recentPost.getText();
                await expect(txt.length).toBeGreaterThan(10);
            }        
        await expect(recentPosts.length).toBeGreaterThan(4); 
    });
});