import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

async function loadMessages(locale: string) {
  try {
    console.log("Locale:", locale); // Debugging: Log the locale
    const messages = (await import(`../../messages/${locale}.json`)).default;
    return messages;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    return null; // Return null to indicate failure
  }
}

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const locale = params.locale || "en";
  console.log("Locale: ", locale); // Debugging: Log the locale

  const messages = await loadMessages(locale);

  if (!messages) {
    notFound();
  }

  return (
    <body>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </body>
  );
}
