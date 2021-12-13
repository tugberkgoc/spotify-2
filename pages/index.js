// import Head from 'next/head'
import { getSession } from 'next-auth/react'
import { Center, Player, Sidebar } from '../components'

export default function Home () {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <main className='flex'>
        <Sidebar />
        <Center />
      </main>

      <div className='sticky bottom-0'>
        <Player />
      </div>
    </div>
  )
}

// should do that, if you want to initially render playlist id
export async function getServerSideProps (context) {
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}
