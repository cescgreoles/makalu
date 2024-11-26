import "../styles/globals.css";

export const metadata = {
  title: "MAKALU",
  description: "Gym",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
