"use client";
import { Autoplay } from "swiper/modules";
import ExploreMoreStyles from "./ExploreMoreBlogs.module.css";
import ImageCompo from "@/components/atoms/imageCompo/ImageCompo";
import ArrowSvg from "@/svg/ArrowSvg";
import { dateFormatterSort } from "@/utils/utils";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const exploreMoreBlogsData = [
  {
    tag: "Culinary",
    publishedAt: "2022-01-13T07:52:08.206Z",
    excerpt: "Two women in local stand are chatting during morning..",
    image: "/assets/explore-more/explore-more1.png",
  },
  {
    tag: "Travel",
    publishedAt: "2022-07-22T07:52:08.206Z",
    excerpt: "Enjoying the sunset on Padar island together",
    image: "/assets/explore-more/explore-more1.png",
  },
  {
    tag: "Travel",
    publishedAt: "2022-07-22T07:52:08.206Z",
    excerpt: "The lush green surroundings of the campgrounds create a..",
    image: "/assets/explore-more/explore-more2.png",
  },
];

const ExploreMoreBlogCard = ({ item }) => (
  <div className={ExploreMoreStyles.card}>
    <ImageCompo
      src={item.image}
      alt="Profile Photo"
      parentClassName={ExploreMoreStyles.imageWrapper}
    />

    <div className={ExploreMoreStyles.metaRow}>
      <p className={ExploreMoreStyles.tag}>{item.tag}</p>
      <p className={ExploreMoreStyles.date}>
        {dateFormatterSort.format(new Date(item.publishedAt))}
      </p>
    </div>

    <p className={`${ExploreMoreStyles.excerpt}`}>{item.excerpt}</p>
  </div>
);

const ExploreMoreBlogsSection = () => {
  return (
    <div className={ExploreMoreStyles.section}>
      <h2 className={`bodyLargeRegular`}>Explore more</h2>

      <div className={ExploreMoreStyles.desktopOnly}>
        {exploreMoreBlogsData.map((articalItem, index) => (
          <ExploreMoreBlogCard key={index} item={articalItem} />
        ))}
      </div>

      <div className={ExploreMoreStyles.mobileOnly}>
        <ExploreMoreBlogsSlider />
      </div>
    </div>
  );
};

export const ExploreMoreBlogsSlider = () => {
  const exploreMoreBlogsSwiperRef = useRef(null);

  return (
    <div className={ExploreMoreStyles.container}>
      <Swiper
        // modules={[Autoplay]}
        // loop
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides
        className={ExploreMoreStyles.swiper}
        onSwiper={(swiper) => (exploreMoreBlogsSwiperRef.current = swiper)}
      >
        {exploreMoreBlogsData.map((articalItem, index) => (
          <SwiperSlide key={index}>
            <ExploreMoreBlogCard item={articalItem} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={ExploreMoreStyles.navRow}>
        <button
          onClick={() => exploreMoreBlogsSwiperRef.current?.slidePrev()}
          className={ExploreMoreStyles.navButton}
        >
          <span
            className={`${ExploreMoreStyles.arrowCircle} ${ExploreMoreStyles.rotate}`}
          >
            <ArrowSvg fill="currentColor" />
          </span>
          Previous
        </button>

        <button
          onClick={() => exploreMoreBlogsSwiperRef.current?.slideNext()}
          className={ExploreMoreStyles.navButton}
        >
          Next
          <span className={ExploreMoreStyles.arrowCircle}>
            <ArrowSvg fill="currentColor" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ExploreMoreBlogsSection;
