import './globals.css'

export const metadata = {
  title: 'Pocketsub',
  description: 'Manage yout payments with ease.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}