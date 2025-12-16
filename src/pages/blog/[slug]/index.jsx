import BlogContent from "@/components/molecules/blogSlugCompo/blogContent/BlogContent";
import BlogHeroSection from "@/components/molecules/blogSlugCompo/blogHeroSection/BlogHeroSection";
import BlogLayout from "@/components/templates/blogLayout/BlogLayout";
import { blogPosts } from "@/data/blogPosts";
import RelatedArticalsSection from "@/components/molecules/blogSlugCompo/relatedArticalsSection/RelatedArticalsSection";
import AutherAndNavigationSection from "@/components/molecules/blogSlugCompo/aboutAutherSection/AboutAutherSection";

const BlogSlugPage = ({ post }) => {
  return (
    <>
      <BlogHeroSection post={post} />
      <BlogLayout>
        <BlogContent post={post} />
        <div className="desktopOnly">
          <AutherAndNavigationSection post={post} />
        </div>
      </BlogLayout>
      <div className="mobileOnly mainContainer">
        <AutherAndNavigationSection post={post} />
      </div>
      <RelatedArticalsSection />
    </>
  );
};

export default BlogSlugPage;

export async function getStaticPaths() {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  return {
    props: {
      post,
    },
  };
}
