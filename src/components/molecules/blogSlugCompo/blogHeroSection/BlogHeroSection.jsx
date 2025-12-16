"use client";

import BreadCrumbs from "@/components/atoms/breadCrumbs/BreadCrumbs";
import ImageCompo from "@/components/atoms/imageCompo/ImageCompo";
import React from "react";
import styles from "./BlogHeroSection.module.css";

const BlogHeroSection = ({ post }) => {
  return (
    <>
      <div className={styles.blogHeroHeader}>
        <BreadCrumbs />
        <h1 className={styles.headingLargeSemiBold}>{post.title}</h1>
      </div>
      <ImageCompo
        src={post.heroImg || "/assets/blog/blog-hero1.png"}
        alt="Blog Image"
        unoptimized
        parentClassName={styles.blogHero}
        imageClassName={styles.blogHeroImage}
      />
    </>
  );
};

export default BlogHeroSection;
