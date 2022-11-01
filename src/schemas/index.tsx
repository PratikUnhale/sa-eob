import * as Yup from 'yup';

export const loginSchema = Yup.object({
    username: Yup.string().min(2).max(20).required("Please enter your username"),
    password: Yup.string().required("Please enter your password")
})
