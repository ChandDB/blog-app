"use client";

import ImageCompo from "@/components/atoms/imageCompo/ImageCompo";
import aboutAutherStyles from "./AboutAutherSection.module.css";
import Link from "next/link";
import ArrowSvg from "@/svg/ArrowSvg";

const AboutAutherSection = ({ auther, autherDescription, profileImg }) => {
  return (
    <div className={aboutAutherStyles.aboutAutherWrapper}>
      <p className={`bodyLargeRegular`}>About {auther}</p>
      <ImageCompo
        src={profileImg || "/assets/blog/alex-carter.png"}
        alt="Profile Photo"
        parentClassName={aboutAutherStyles.imageWrapper}
      />
      <p className={aboutAutherStyles.aboutAutherContent}>
        {autherDescription}
      </p>
    </div>
  );
};

const AutherAndNavigationSection = ({ post }) => {
  return (
    <>
      <AboutAutherSection
        auther={post.auther}
        autherDescription={post.autherDescription}
        profileImg={post.profileImg}
      />
      <div className={aboutAutherStyles.navigationSection}>
        <div className={aboutAutherStyles.navRow}>
          <Link
            href={`/blog/5-tips-for-better-cardio-sessions`}
            prefetch
            className={aboutAutherStyles.navButton}
          >
            <span
              className={`${aboutAutherStyles.arrowCircle} ${aboutAutherStyles.rotate}`}
            >
              <ArrowSvg fill="currentColor" />
            </span>
            Previous
          </Link>

          <Link
            href={`/blog/meal-prep-basics-for-gym-enthusiasts`}
            prefetch
            className={aboutAutherStyles.navButton}
          >
            Next
            <span className={aboutAutherStyles.arrowCircle}>
              <ArrowSvg fill="currentColor" />
            </span>
          </Link>
        </div>
        <div
          className={`${aboutAutherStyles.navRow} ${aboutAutherStyles.nevArticlesName}`}
        >
          <p>5 Tips for Better Cardio Sessions</p>
          <p>Meal Prep Basics for Gym Enthusiasts</p>
        </div>
      </div>
    </>
  );
};

export default AutherAndNavigationSection;
