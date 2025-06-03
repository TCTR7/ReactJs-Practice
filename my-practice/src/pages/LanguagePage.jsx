import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function LanguagePage() {
  const { t } = useTranslation();

  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <div className="flex justify-end">
        <LanguageSwitcher />
      </div>

      <div className="mt-10 text-center">
        <h1 className="text-3xl font-bold">{t("common.welcome")}</h1>
        <p className="text-gray-600 mt-2">{t("common.description")}</p>
      </div>
    </div>
  );
}
