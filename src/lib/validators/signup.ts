import { z } from "zod";

export const SignupValidator = z.object({
  name: z
    .string()
    .min(3, { message: "Too Short" })
    .max(50, { message: "Too Large" }),
  username: z
    .string()
    .min(3, { message: "Too Short" })
    .max(50, { message: "Too Large" }),
  email: z.string().email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 character long" }),
});

export type SignupRequest = z.infer<typeof SignupValidator>;
