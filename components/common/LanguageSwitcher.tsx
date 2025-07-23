"use client";
import React, { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languageCode } from "@/constants/data";
import { usePathname, useRouter } from "@/i18n/navigation";

function LanguageSwitcher({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const setLanguageValue = (locale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: locale });
    });
  };
  return (
    <Select
      disabled={isPending}
      value={locale}
      onValueChange={(value: string) => setLanguageValue(value)}
    >
      <SelectTrigger className="w-[110px] hidden xs:flex">
        <SelectValue placeholder="Select language"></SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languageCode.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default LanguageSwitcher;
