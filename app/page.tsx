import Portfolio from "./portfolio"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'manudev - Backend Developer',
  description: 'Building scalable backend systems with TypeScript, Docker, and TDD.',
}

export default function HomePage() {
  return <Portfolio />
}
