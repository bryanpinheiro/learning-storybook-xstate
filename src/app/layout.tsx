import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Learning Storybook XState',
  description: 'Let\'s become the most efficient developers we can be!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
