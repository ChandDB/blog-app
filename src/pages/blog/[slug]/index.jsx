import BlogContent from "@/components/molecules/blogSlugCompo/blogContent/BlogContent";
import BlogHeroSection from "@/components/molecules/blogSlugCompo/blogHeroSection/BlogHeroSection";
import BlogLayout from "@/components/templates/blogLayout/BlogLayout";
import { blogPosts } from "@/data/blogPosts";
import RelatedArticalsSection from "@/components/molecules/blogSlugCompo/relatedArticalsSection/RelatedArticalsSection";
import AutherAndNavigationSection from "@/components/molecules/blogSlugCompo/aboutAutherSection/AboutAutherSection";
import AddCommentSection from "@/components/molecules/blogSlugCompo/addCommentSection/AddCommentSection";
import CommentSection from "@/components/molecules/blogSlugCompo/commentSection/CommentSection";
import SlugStyles from "@/styles/Slug.module.css";

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
      <div className={`${SlugStyles.authorNavWrapper} mainContainer`}>
        <div className="mobileTabletView">
          <AutherAndNavigationSection post={post} />
        </div>
        <CommentSection />
      </div>
      <AddCommentSection />
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
