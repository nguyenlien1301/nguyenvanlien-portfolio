export type Locale = (typeof locales)[number];
export const locales = ["en", "vi"] as const;
export const defaultLocale: Locale = "vi";

// const configSchema = z.object({
//   NEXT_PUBLIC_URL: z.string(),
// });

// const configObject = configSchema.safeParse({
//   NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
// });

// if (!configObject.success) {
//   console.error(configObject.error.issues);
//   throw new Error("Các giá trị khai báo trong file .env không hợp lệ");
// }

// const envConfig = configObject.data;
// export default envConfig;
