import { RootLayout } from '@/components/RootLayout'
import { Mulish } from 'next/font/google';

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: 'Snezhi Veskova',
    default: 'Snezhi Veskova\'s Portfolio',
  },
}

const mulish = Mulish({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <html lang="en" className={`h-full bg-neutral-950 text-base antialiased ${mulish.className}`}>
      <body className={`flex min-h-full flex-col ${mulish.className}`}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
