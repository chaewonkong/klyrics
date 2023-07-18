import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import { List } from '@/components/List'
import { Title } from '@/components/Title'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full h-full py-6'>
      <Header />
      <div className='w-full h-3' />
      <Card />
      <Title text="Playlist" />
      <List />
    </main>
  )
}
