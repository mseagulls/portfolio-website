import "../../styles/tailwind.css";

export const metadata = {
  title: "Admin Panel",
  description: "Admin area",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
