import Link from 'next/link'
import { Container } from '@/components/Container'

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Creating the Letter Legal Separator for notaries running iOS.
          </h1>

          <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Check out our free online version over at <Link target="_blank" href="https://letter-legal-separator.orequals.com/" className="text-white transition hover:text-teal-500 dark:hover:text-teal-400" >letter-legal-separator.orequals.com</Link>.
          </div>

          <br />

          {/* Responsive Video Container */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/Rzsk1ncrpXs"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            We are in closed beta for the <strong>Letter Legal Separator iOS app</strong>. Check out the demo above!
          </div>
        </div>
      </Container>
    </>
  )
}

