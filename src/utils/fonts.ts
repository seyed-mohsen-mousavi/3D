import localFont from "next/font/local";

export const Shabnam = localFont({
    variable: "--font-shabnam",
    src: [
        {
            path: "../../public/fonts/Shabnam-Thin.woff2",
            weight: "100",
            style: "normal",
        },
        {
            path: "../../public/fonts/Shabnam-Light.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Shabnam-Medium.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/Shabnam-Bold.woff2",
            weight: "900",
            style: "normal",
        },
    ],
});
export const Hekayat = localFont({
    variable: "--font-hekayat",
    src: [
        {
            path: "../../public/fonts/Hekayat-Font-Family.ttf",
            style: "normal",
        },
    ],
});


