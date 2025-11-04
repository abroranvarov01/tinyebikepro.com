import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "blitzu-bike-lights",
  "seatylock-foldylock-compact",
  "lamicall-bike-phone-holder",
  "rockbros-bike-panniers",
  "adjustable-handlebar-mirror",
  "rockbros-release-luggage-rack",
  "bike-turn-signals",
  "aventon-suspension-seat-post",
  "wittkop-bike-grips",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://customgiftbox.store")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/reviews/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("box", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/pro"],
};
