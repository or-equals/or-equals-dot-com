import Link from 'next/link'

import { Container } from '@/components/Container'

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Creating great software products to solve the world&apos;s problems.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Or Equals is transitioning from a software development services company over to a <strong>software product</strong> company.
            <br />
            <br />
            Here&apos;s what we&apos;re currently building:
            <br />
            <br />
          </p>

          <ul className="text-base text-zinc-600 dark:text-zinc-400">
            <li>
              <Link target="_blank" href="https://letter-legal-separator.orequals.com/" className="text-white transition hover:text-teal-500 dark:hover:text-teal-400" >
                Letter Legal Separator
              </Link>
              <span>&nbsp;- A tool to help you separate your letter pages from your legal pages.</span>
            </li>
            <li>
              <Link target="_blank" href="https://www.youtube.com/@liveviewmastery" className="text-white transition hover:text-teal-500 dark:hover:text-teal-400" >
                Liveview Mastery
              </Link>
              &nbsp;- A set of tutorials and screencasts to help Elixir developers.
            </li>
            <li>
              <Link target="_blank" href="https://www.linkedin.com/in/joshuaplicque/" className="text-white transition hover:text-teal-500 dark:hover:text-teal-400" >
                Highly Selective Client Work
              </Link>
              <span>&nbsp;- Doing highly selective client work. Elixir/Ruby/Flutter. IYKYK.</span>
            </li>
          </ul>

        </div>

        <br />
        ---
        <br />

        <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          <Link target="_blank" href="mailto:josh@orequals.com" className="text-white transition hover:text-teal-500 dark:hover:text-teal-400" >
            Contact Josh 
          </Link>
          nbsp;if you want.
        </div>
      </Container>
    </>
  )
}
