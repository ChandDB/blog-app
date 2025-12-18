"use client";

import ImageCompo from "@/components/atoms/imageCompo/ImageCompo";
import styles from "./BlogContent.module.css";
import { dateFormatter } from "@/utils/utils";
import { useState } from "react";
import "react-quill-new/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

const BlogContent = ({ post }) => {
  const [editorContent, setEditorContent] = useState("");

  return (
    <>
      <div className={styles.profileSection}>
        <div className={styles.autherProfile}>
          <ImageCompo
            src={post.profileImg || "/assets/blog/alex-carter.png"}
            alt="profileImage"
            unoptimized
            parentClassName={styles.profileImage}
          />
          <p className={`${styles.autherName} bodySemiBoldUppercase`}>
            {post.auther}
          </p>
        </div>
        <p className={`bodySemiBoldUppercase`}>
          {dateFormatter.format(new Date(post.date))}
        </p>
      </div>
      <div className={styles.editButtonWrapper}>
        <button
          onClick={() => setEditorContent((prev) => (prev ? "" : post.body))}
          className={styles.editButton}
        >
          {editorContent ? "Cancel Edit" : "Edit Blog"}
        </button>
      </div>

      {editorContent ? (
        <ReactQuill
          theme="snow"
          className={styles.textEditor}
          value={editorContent}
          onChange={setEditorContent}
        />
      ) : (
        <div
          className={styles.blogContent}
          dangerouslySetInnerHTML={{ __html: post.body || "" }}
        />
      )}
    </>
  );
};

export default BlogContent;
