import StarSvg from "@/svg/StarSvg";
import ratingStyles from "./Rating.module.css";

const Rating = ({ rating, max = 5 }) => {
  return (
    <div className={ratingStyles.rating}>
      {Array.from({ length: max }, (_, i) => {
        const starValue = i + 1;

        if (rating >= starValue) {
          // full star
          return <StarSvg key={i} fill="#F3BB2E" />;
        } else if (rating >= starValue - 0.5) {
          // half star
          return <StarSvg key={i} fill="url(#halfGradient)" />;
        } else {
          // empty star
          return <StarSvg key={i} fill="#5B5B5B" />;
        }
      })}
    </div>
  );
};

export default Rating;
