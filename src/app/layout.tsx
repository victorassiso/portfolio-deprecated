import './global.css'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

export const metadata = {
  title: 'Victor Assis | Portfólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="m-auto flex min-h-screen max-w-screen-xs flex-col">
          <Header />
          <main className="mx-4 flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
