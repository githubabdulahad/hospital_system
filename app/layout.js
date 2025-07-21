import './globals.css'
import Providers from "../components/Context/Providers";
import { InvoiceProvider } from '../components/Context/invoice-context';

export const metadata = {
  title: 'Hospital Management System',
  description: 'Complete hospital management solution',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <InvoiceProvider>
          <Providers>
            {children}
          </Providers>
        </InvoiceProvider>
      </body>
    </html>
  )
}