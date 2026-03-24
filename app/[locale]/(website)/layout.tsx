



import Footer from "@/components/Footer";
import Header from "@/components/Header";
import initI18next from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import ClientLayout from "@/components/ClientLayout";



export default async function WebsiteLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const i18nInstance = await initI18next(locale, "common");
  const resources = i18nInstance.services.resourceStore.data;

  return (
    <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <TranslationsProvider locale={locale} resources={resources} namespaces={["common"]}>
        <ClientLayout>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientLayout>
      </TranslationsProvider>
    </div>
  );
}