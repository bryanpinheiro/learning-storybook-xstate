import { z } from 'zod';

const validationSchema = z.object({
  username_email: z.string().nonempty(
    "An email or username is required to log in." +
    "You can also log in with Google."
  ),
  password: z.string().nonempty("A password is required to log in."),
});

export type LoginValidationInput = z.infer<typeof validationSchema>;

export function validateLoginInput(data: LoginValidationInput) {
  return new Promise((resolve, reject) => {
    try {
      const validatedData = validationSchema.parse(data);
      resolve(validatedData);
    } catch (error) {
      reject(error);
    }
  });
}