export const metadata = {
  title: 'APEX Gaming Laptop - Unleash Your Power',
  description: 'Experience gaming redefined with the APEX gaming laptop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>{children}</body>
    </html>
  )
}
