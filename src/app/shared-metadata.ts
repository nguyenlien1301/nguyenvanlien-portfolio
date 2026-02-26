export const baseOpenGraph = (locale: string) => ({
  locale: locale === "vi" ? "vi_VN" : "en_US",
  type: "website" as const,
});
