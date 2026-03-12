import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "ShortsAI - 画像を並べるだけでショート動画が完成",
  description: "AIがナレーション・字幕・動画を自動生成。TikTok・YouTube Shorts・Instagram Reelsにそのまま投稿できる動画を、画像をアップするだけで作成。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}<Analytics /></body>
    </html>
  );
}
