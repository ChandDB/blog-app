import ImageCompo from "@/components/atoms/imageCompo/ImageCompo";
import TourGuidesStyles from "./TourGuidesSection.module.css";
import Rating from "@/components/atoms/rating/Rating";
import LocationSvg from "@/svg/LocationSvg";
import { Fragment } from "react";

const tourGuidesData = [
  {
    name: "Miranda Rachel",
    location: "Jombang, Jawa timur",
    image: "/assets/tour-guide/tour-guide1.png",
    rating: 4,
  },
  {
    name: "Danielle Marsh",
    location: "Wonosobo, Jawa ten..",
    image: "/assets/tour-guide/tour-guide2.png",
    rating: 4,
  },
  {
    name: "Mohit Singh",
    location: "Manali, Himachal Pradesh",
    image: "/assets/tour-guide/tour-guide3.png",
    rating: 5,
  },
];

export const TourGuidesSection = () => {
  return (
    <div className={TourGuidesStyles.wrapper}>
      <h2 className={`bodyLargeRegular`}>Tour Guides</h2>

      <div className={TourGuidesStyles.innerWrapper}>
        {tourGuidesData.map((tourGuideItem, index) => (
          <Fragment key={index}>
            <div className={TourGuidesStyles.card}>
              <div className={TourGuidesStyles.profileRow}>
                <ImageCompo
                  src={tourGuideItem.image}
                  alt="Profile Photo"
                  parentClassName={TourGuidesStyles.avatar}
                />

                <div className={TourGuidesStyles.info}>
                  <p className={TourGuidesStyles.name}>{tourGuideItem.name}</p>

                  <span className={TourGuidesStyles.location}>
                    <LocationSvg />
                    {tourGuideItem.location}
                  </span>
                </div>
              </div>

              <div className={TourGuidesStyles.rating}>
                <Rating rating={tourGuideItem.rating} />
                <span>{`(${tourGuideItem.rating})`}</span>
              </div>
            </div>
            {index !== tourGuidesData.length - 1 && <hr className={`hr`} />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
