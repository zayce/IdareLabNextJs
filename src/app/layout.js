
import { MyProvider } from "../context/UseContext"; //


export const metadata = {
  title: "IdarəLab",
  description: "SMM və saytlar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyProvider>{children}</MyProvider>
      </body>
    </html>
  );
}
