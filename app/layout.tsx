import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steven Pan | Course Timetable — Fall 2026",
  description: "Personal weekly course timetable for Fall 2026, with course details, instructor links, and classroom photos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
