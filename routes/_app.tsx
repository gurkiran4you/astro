import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Accurate Astrology, Tarot & Numerology Readings | Meetu Proothi - Meerut, India</title>
        <meta
          name="description"
          content="Get personalized astrology, tarot, and numerology readings from an experienced astrologer in Meerut, India. Unlock insights into love, career, and life’s path with expert guidance. Book your session today!"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
