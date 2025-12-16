import ExploreMoreBlogsSection from "@/components/molecules/blogSlugCompo/exploreMoreBlogsSection/ExploreMoreBlogsSection";
import { TourGuidesSection } from "@/components/molecules/blogSlugCompo/tourGuidesSection/TourGuidesSection";
import React from "react";
import BlogLayoutStyles from "./BlogLayout.module.css";
import CommentSection from "@/components/molecules/blogSlugCompo/commentSection/CommentSection";
import AddCommentSection from "@/components/molecules/blogSlugCompo/addCommentSection/AddCommentSection";

const BlogLayout = ({ children }) => {
  return (
    <div className="mainContainer">
      <div className={BlogLayoutStyles.layout}>
        <main>{children}</main>
        <div className={BlogLayoutStyles.sidebar}>
          <ExploreMoreBlogsSection />
          <TourGuidesSection />
        </div>
      </div>
      <CommentSection />
      <AddCommentSection />
    </div>
  );
};

export default BlogLayout;
