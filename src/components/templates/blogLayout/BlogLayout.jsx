import ExploreMoreBlogsSection from "@/components/molecules/blogSlugCompo/exploreMoreBlogsSection/ExploreMoreBlogsSection";
import { TourGuidesSection } from "@/components/molecules/blogSlugCompo/tourGuidesSection/TourGuidesSection";
import React from "react";
import BlogLayoutStyles from "./BlogLayout.module.css";

const BlogLayout = ({ children }) => {
  return (
    <div className="mainContainer">
      <div className={BlogLayoutStyles.layout}>
        <main className={BlogLayoutStyles.main}>{children}</main>
        <div className={BlogLayoutStyles.sidebar}>
          <ExploreMoreBlogsSection />
          <TourGuidesSection />
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
