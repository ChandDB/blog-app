"use client";

import TextareaStyles from "./TextareaCompo.module.css";

const TextareaCompo = ({
  className = "",
  label = "",
  supportiveText = "",
  textareaClassName = "",
  showScrollbar = false,
  rows = 2,
  ...rest
}) => {
  return (
    <span className={`${TextareaStyles.wrapper} ${className}`}>
      {label && <span className={TextareaStyles.label}>{`${label}:`}</span>}
      <textarea
        rows={rows}
        className={`${TextareaStyles.textarea} ${
          !showScrollbar ? TextareaStyles.hideScrollbar : ""
        } ${textareaClassName}`}
        {...rest}
      />
      {supportiveText && (
        <p className={TextareaStyles.supportiveText}>{supportiveText}</p>
      )}
    </span>
  );
};

export default TextareaCompo;
