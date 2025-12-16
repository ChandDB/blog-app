"use client";

import ImageCompo from "@/components/atoms/imageCompo/ImageCompo";
import Rating from "@/components/atoms/rating/Rating";
import commentStyles from "./CommentSection.module.css";
import { dateFormatterSort } from "@/utils/utils";
import BlackDotSvg from "@/svg/BlackDotSvg";
import { Fragment, useEffect, useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch("/api/comments");
        const json = await res.json();

        if (json.success) {
          setComments(json.data);
        }
      } catch (error) {
        console.error("Failed to fetch comments", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  if (loading) return <p>Loading comments...</p>;

  return (
    <div className={commentStyles.section}>
      <h2 className={commentStyles.heading}>
        <BlackDotSvg />
        {`  Comments`}
      </h2>

      <div className={commentStyles.innerWrapper}>
        {comments.map((commentItem, index) => (
          <Fragment key={index}>
            <div className={commentStyles.commentWrapper}>
              <ImageCompo
                src={commentItem.imagePath}
                alt="Profile Photo"
                parentClassName={commentStyles.profileImage}
              />

              <div className={commentStyles.content}>
                <div className={commentStyles.topRow}>
                  <div className={commentStyles.userInfo}>
                    <p className={commentStyles.name}>{commentItem.name}</p>

                    <div className={commentStyles.rating}>
                      <Rating rating={commentItem.rating} />
                      <span>{`(${commentItem.rating})`}</span>
                    </div>
                  </div>

                  <p className={commentStyles.date}>
                    {dateFormatterSort.format(new Date(commentItem.date))}
                  </p>
                </div>

                <p className={commentStyles.commentText}>
                  {commentItem.comment}
                </p>
              </div>
            </div>
            {index !== comments.length - 1 && <hr className={`hr`} />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
