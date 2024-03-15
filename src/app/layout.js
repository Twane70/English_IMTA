import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Antoine Tondu | Portfolio',
  description: 'Web Designer - Développeur - Data Scientist',
}

export const metadata = {
  title: 'Antoine Tondu | Portfolio',
  description: 'Web Designer - Développeur - Data Scientist',
  keywords: ["Photosphere", "BG", "Hello Bong", "Haricot rouge"],
  openGraph: {
    images: 'https://www.eff.org/files/banner_library/patent-troll-3b.png',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}