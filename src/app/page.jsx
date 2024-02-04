import Link from 'next/link'

import { Container } from '@/components/Container'

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Creating premium software for notary firms running iOS/macOS.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          </p>

          <ul className="text-base text-zinc-600 dark:text-zinc-400">
            <li>
              <Link target="_blank" href="https://letter-legal-separator.orequals.com/" className="text-white transition hover:text-teal-500 dark:hover:text-teal-400" >
                Letter Legal Separator Pro
              </Link>
              <span>&nbsp;- A fully-offline app to help your staff separate your letter pages from your legal pages.</span>
              <div>
                <iframe
                  src="https://www.loom.com/embed/43261d4f7d544608b4b3636980e53a6a"
                  frameBorder="0"
                  allowFullScreen
                  style={{ width: '640px', height: '360px' }}
                ></iframe>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          We are in early access and looking for notary firms with at least 3 notaries.
          If this looks interesting and this sounds like you, you can contact Joshua Plicque at <strong>josh dot orequals dot com</strong>.
        </div>

        <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          If you aren't a large notary firm, check out our free online version over at <Link target="_blank" href="https://letter-legal-separator.orequals.com/" className="text-white transition hover:text-teal-500 dark:hover:text-teal-400" >letter-legal-separator.orequals.com</Link>.
        </div>
      </Container>
    </>
  )
}
