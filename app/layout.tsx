import "./globals.css";
import localFont from "next/font/local";
export const metadata = {
  title: "MartiniSolis - Real Estate & Architecture",
  description: "Martini Solis offers the best integrated engineering, architectural, and real estate solutions, including high-quality design, development, and project management.",
};




const CaviarDreams = localFont({
  src: './fonts/CaviarDreams.ttf', 
  variable: '--font-CaviarDreams', 
});


const computerist = localFont({
  src: './fonts/Computerist.ttf', 
  variable: '--font-computerist', 
});




const Sanseriffic = localFont({
  src: './fonts/Sanseriffic.otf', 
  variable: '--font-Sanseriffic', 
});

//arabic font
const OMAR = localFont({
  src: './fonts/arabic/OMAR.ttf', 
  variable: '--font-OMAR', 
});

const MyLotusB = localFont({
  src: './fonts/arabic/MyLotusB.ttf', 
  variable: '--font-MyLotusB', 
});


const Alharoni= localFont({
  src: './fonts/arabic/Alharoni.ttf', 
  variable: '--font-Alharoni', 
});


const mohb = localFont({
  src: './fonts/arabic/mohb.ttf', 
  variable: '--font-mohb', 
});

const Camel = localFont({
  src: './fonts/arabic/Camel.otf', 
  variable: '--font-Camel', 
});

const CamelR = localFont({
  src: './fonts/arabic/CamelR.otf', 
  variable: '--font-CamelR', 
});
 
const Lady = localFont({  
  src: './fonts/arabic/Lady.otf',
  variable: '--font-Lady',
});

const Alhura = localFont({
  src: './fonts/arabic/Alhura.ttf',
  variable: '--font-Alhura',
});




const Oman = localFont({
  src: './fonts/arabic/Oman.ttf',
  variable: '--font-Oman',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${computerist.variable}  ${CaviarDreams.variable} ${OMAR.variable} ${MyLotusB.variable} ${Alharoni.variable} ${mohb.variable} ${Camel.variable} ${CamelR.variable} ${Lady.variable} ${Alhura.variable} ${Oman.variable} ${Sanseriffic.variable}`}>
     
   
      <body className="">{children}</body>
    </html>
  );
}
  