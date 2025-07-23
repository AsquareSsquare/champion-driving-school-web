import { Car } from "lucide-react";
import NavItems from "@/components/common/NavItems";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { getLocale } from "next-intl/server";
import MobileNavItems from "@/components/common/MobileNavItems";

async function NavBar() {
  const locale = await getLocale();
  return (
    <section className="py-4 border-b sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 xl:px-0">
        <div className="flex items-center gap-3">
          <Car className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">
            Champion Driving
          </span>
        </div>
        <NavItems />
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <MobileNavItems />
        </div>
      </div>
    </section>
  );
}

export default NavBar;
