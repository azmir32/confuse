import { Markazi_Text } from 'next/font/google'

// Load Markazi Text from Google Fonts
export const markaziText = Markazi_Text({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-markazi',
})