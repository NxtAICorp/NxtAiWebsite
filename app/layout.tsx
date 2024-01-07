import "@/styles/globals.css";
export const metadata = {
  title: "NXT AI",
  description: "NXT AI is an artificial intelligence and product development company",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
