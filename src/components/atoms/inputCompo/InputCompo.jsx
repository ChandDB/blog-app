import InputCompoStyles from "./InputCompo.module.css";

const InputCompo = ({
  type = "text",
  className = "",
  label = "",
  supportiveText = "",
  inputClassName = "",
  readOnly = false,
  ...rest
}) => {
  return (
    <span className={`${InputCompoStyles.wrapper} ${className}`}>
      {label && <span className={InputCompoStyles.label}>{label}</span>}

      <input
        type={type}
        readOnly={readOnly}
        autoComplete="on"
        className={`${InputCompoStyles.input} ${inputClassName}`}
        {...rest}
      />

      {supportiveText && (
        <p className={InputCompoStyles.supportiveText}>{supportiveText}</p>
      )}
    </span>
  );
};

export default InputCompo;
