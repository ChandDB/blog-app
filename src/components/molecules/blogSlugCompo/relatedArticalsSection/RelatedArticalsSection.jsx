import ImageCompo from "@/components/atoms/imageCompo/ImageCompo";
import RelatedArticalsStyles from "./RelatedArticalsSection.module.css";

const relatedArticalsData = [
  {
    title: "The Ultimate Guide to Full-Body Workouts",
    author: "Alex Carter",
    content:
      "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
    src: "/assets/related-articles/artical1.png",
  },
  {
    title: "5 Tips for Better Cardio Sessions",
    author: "Maya Lee",
    content:
      "Improve your cardio performance with these simple yet effective techniques to maximize stamina and get the most from each workout.",
    src: "/assets/related-articles/artical2.png",
  },
  {
    title: "Meal Prep Basics for Gym Enthusiasts",
    author: "Jordan Smith",
    content:
      "Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consistent with nutrition.",
    src: "/assets/related-articles/artical3.png",
  },
  {
    title: "Building Core Strength: Exercises and Benefits",
    author: "Emma Rodriguez",
    content:
      "A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your core power.",
    src: "/assets/related-articles/artical4.png",
  },
];

const RelatedArticalsSection = () => {
  return (
    <div className={RelatedArticalsStyles.wrapper}>
      <div className={`${RelatedArticalsStyles.innerWrapper} mainContainer`}>
        <h1 className={RelatedArticalsStyles.heading}>Related Articals</h1>

        <div className={RelatedArticalsStyles.grid}>
          {relatedArticalsData.map((articalItem, index) => (
            <div key={index} className={RelatedArticalsStyles.card}>
              <ImageCompo
                src={articalItem.src}
                alt="Profile Photo"
                parentClassName={RelatedArticalsStyles.imageWrapper}
              />

              <p className={RelatedArticalsStyles.title}>{articalItem.title}</p>
              <p className={RelatedArticalsStyles.content}>
                {articalItem.content}
              </p>
              <p className={RelatedArticalsStyles.author}>
                {`By ${articalItem.author}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedArticalsSection;
