import { Roboto_Condensed } from 'next/font/google'
const roboto = Roboto_Condensed({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={roboto.className}>
        <h1 className="text-center text-3xl">BAGHCHAL</h1>
      </div>
    </main>
  );
}
