"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Locale, locales } from "@/config";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import SearchParamsLoader, {
  useSearchParamsLoader,
} from "./search-params-loader";

const flags: Record<string, string> = {
  vi: "🇻🇳",
  en: "🇺🇸",
};

function Language() {
  const t = useTranslations("OptionLanguage");
  const locale = useLocale();
  const { searchParams, setSearchParams } = useSearchParamsLoader();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <SearchParamsLoader onParamsReceived={setSearchParams} />
      <Select
        value={locale}
        onValueChange={(value) => {
          const queryString = searchParams?.toString();
          const url = queryString ? `${pathname}?${queryString}` : pathname;
          router.replace(url, { locale: value as Locale });
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Chọn ngôn ngữ" />
        </SelectTrigger>
        <SelectContent
          position="popper"
          side="bottom"
          sideOffset={8}
          avoidCollisions={false}
        >
          <SelectGroup>
            <SelectLabel>Ngôn ngữ phổ biến</SelectLabel>
            {locales.map((locale) => (
              <SelectItem key={locale} value={locale}>
                <span className="mr-2">{flags[locale]}</span>
                {t(locale)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

export default Language;
