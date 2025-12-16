import * as yup from "yup";

export const AddCommentValidationSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  name: yup.string().required("Name is required"),

  comment: yup
    .string()
    .required("Comment is required")
    .min(50, "Comment must be at least 50 characters long"),

  rating: yup
    .number()
    .required("Rating is required")
    .min(1, "Please select a rating")
    .max(5),
});
