import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Antoine Tondu | Portfolio',
  description: 'Web Designer - Développeur - Data Scientist',
  keywords: ["Photosphere", "BG", "Hello Bong", "Haricot rouge"],
  openGraph: {
    images: '/carte.png',
  },
  icon: '/icon.ico',
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