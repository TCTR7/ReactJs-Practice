import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { features } from "../data/features";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <header className="py-16 px-4 text-white text-center bg-gradient-to-r from-blue-800 to-purple-700">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl duration-500">
          🚀 {t("home.title")}
        </h1>
        <p className="text-base sm:text-xl md:text-2xl duration-500 mt-3 md:mt-6">
          {t("home.description")}
        </p>
      </header>

      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-lg p-6">
          {features.map((feature) => (
            <div
              key={feature.path}
              className="rounded-2xl bg-white px-6 py-4 shadow-md hover:shadow-lg hover:scale-[1.02] transition-shadow duration-300 border border-slate-200"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                {t(`features.${feature.path}.title`)}
              </h3>
              <p className="whitespace-nowrap truncate text-slate-600 mb-3 text-sm">
                {t(`features.${feature.path}.description`)}
              </p>
              <p className="whitespace-nowrap truncate text-slate-600 mb-3 text-sm">
                Level: {feature.level}
              </p>
              <Link
                to={feature.path}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                {t("home.viewDetail")} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xl sm:text-2xl md:text-3xl duration-500 bg-gradient-to-r from-blue-800 to-purple-700 text-white py-8 px-6">
        {t("home.footer")}
      </footer>
    </div>
  );
}
