import "@/styles/globals.css";
export const metadata = {
  title: "NXT AI",
  description: "NXT AI is an artificial intelligence and product development company",
};

const RootLayout = ({ children, params }: { children: React.ReactNode; params: any }) => {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
