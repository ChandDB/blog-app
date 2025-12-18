import InputCompo from "@/components/atoms/inputCompo/InputCompo";
import { AddCommentValidationSchema } from "./addCommentForm.schema";
import AddCommentStyles from "./AddCommentSection.module.css";
import { useForm } from "react-hook-form";
import TextareaCompo from "@/components/atoms/textareaCompo/TextareaCompo";
import { yupResolver } from "@hookform/resolvers/yup";
import ChatSvg from "@/svg/ChatSvg";
import BedSvg from "@/svg/ratingSvgs/BedSvg";
import AverageSvg from "@/svg/ratingSvgs/AverageSvg";
import NormalSvg from "@/svg/ratingSvgs/NormalSvg";
import NiceSvg from "@/svg/ratingSvgs/NiceSvg";
import GoodSvg from "@/svg/ratingSvgs/GoodSvg";
import BlackDotSvg from "@/svg/BlackDotSvg";
import { comments } from "@/data/comments";

const ratingIconList = [
  {
    icon: <BedSvg fill="currentColor" />,
    rating: 1,
    content: "Bed",
    color: "#FF0412",
  },
  {
    icon: <AverageSvg fill="currentColor" />,
    rating: 2,
    content: "Average",
    color: "#FF6700",
  },
  {
    icon: <NormalSvg fill="currentColor" />,
    rating: 3,
    content: "Normal",
    color: "#FFB416",
  },
  {
    icon: <NiceSvg fill="currentColor" />,
    rating: 4,
    content: "Nice",
    color: "#1C9AF4",
  },
  {
    icon: <GoodSvg fill="currentColor" />,
    rating: 5,
    content: "Good",
    color: "#00BA5C",
  },
];

const AddCommentSection = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(AddCommentValidationSchema),
    mode: "onChange",
    defaultValues: {
      rating: 5,
    },
  });

  const handleSubmitCommentForm = (data) => {
    const tempComment = {
      name: data.name,
      comment: data.comment,
      imagePath: "/assets/landing-page/home-page/gallery/image5_1.png",
      rating: data.rating,
      date: new Date().toISOString(),
    };
    comments.push(tempComment);
    reset();
  };

  return (
    <div className="mainContainer">
      <div className={AddCommentStyles.section}>
        <h2 className={AddCommentStyles.heading}>
          <BlackDotSvg />
          {`  Add A Comment`}
        </h2>

        <form onSubmit={handleSubmit(handleSubmitCommentForm)}>
          <div className={AddCommentStyles.formRow}>
            <div className={AddCommentStyles.leftColumn}>
              <InputCompo
                type="text"
                label="Name"
                {...register("name")}
                className={AddCommentStyles.inputWrapper}
                inputClassName={AddCommentStyles.input}
                supportiveText={errors?.name?.message}
              />

              <InputCompo
                type="text"
                label="E-mail"
                {...register("email")}
                className={AddCommentStyles.inputWrapper}
                inputClassName={AddCommentStyles.input}
                supportiveText={errors?.email?.message}
              />
            </div>

            <TextareaCompo
              label="Comment"
              placeholder="Search anything..."
              rows={5}
              {...register("comment")}
              supportiveText={errors?.comment?.message}
              className={AddCommentStyles.textareaWrapper}
              textareaClassName={AddCommentStyles.textarea}
            />
          </div>

          <div className={AddCommentStyles.bottomRow}>
            <div className={AddCommentStyles.ratingBox}>
              <p className={AddCommentStyles.ratingText}>
                Rate The Usefulness Of The Article
              </p>

              <div className={AddCommentStyles.ratingIcons}>
                {ratingIconList.map((item) => (
                  <button
                    type="button"
                    key={item.rating}
                    onClick={(e) => {
                      e.preventDefault();
                      setValue("rating", item.rating, { shouldValidate: true });
                    }}
                    className={AddCommentStyles.ratingButton}
                  >
                    {getValues("rating") === item.rating ? (
                      <span
                        className={AddCommentStyles.activeRating}
                        style={{
                          backgroundColor: item.color,
                          color: "#fff",
                        }}
                      >
                        {item.icon}
                        <span>{item.content}</span>
                      </span>
                    ) : (
                      <span style={{ color: item.color }}>{item.icon}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className={AddCommentStyles.submitButton}>
              <ChatSvg fill="currentColor" />
              <span className={AddCommentStyles.addCommentMobileOnly}>
                Send Comment
              </span>
              <span className={AddCommentStyles.addCommentDesktopOnly}>
                Send
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCommentSection;
