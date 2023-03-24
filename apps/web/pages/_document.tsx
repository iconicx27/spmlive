import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Zishop store developed with Next.js/TypeScript/TailwindCSS and ... as Zahra Mirzaei's portfolio"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" />
      </Head>
      <body className="px-5 xl:px-16">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
