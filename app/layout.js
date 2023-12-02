import "./globals.css";
import Theming from "@/components/providers/Theme";

import HeaderPage from "./(Header)/Header/Page";
import Footer from "./components/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theming>
          <HeaderPage />
          {children}
          <Footer />
        </Theming>
      </body>
    </html>
  );
}
