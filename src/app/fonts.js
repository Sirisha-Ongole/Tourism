import { Inter, Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'

 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const whitney = localFont({ src: './fonts/WhitneyCondensed-Book.otf' })