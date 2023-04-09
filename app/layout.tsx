import Header from './Components/Header';
import './globals.css'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Itay Haim',
  description: 'Full Stack Developer',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
   
      <body className={roboto.className}>

      <Header/>
      <main className="container">{children}</main>
      </body>
    </html>
  )
}
