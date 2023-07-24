import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import { List } from '@/components/List'
import { Title } from '@/components/Title'
import axios from 'axios'
import { Artist, FetchArtistsResponse } from '../interfaces/artists'
import { useEffect, useLayoutEffect } from 'react'


interface IProps {
  artists: Artist[]
  apiBaseUrl: string;
}


export default function Home({ artists, apiBaseUrl }: IProps) {


  return (
    <main className='w-full h-full py-6'>
      <Header />
      <div className='w-full h-3' />
      <Card />
      <Title text="Playlist" />
      <List artists={artists} apiBaseUrl={apiBaseUrl} />
    </main>
  )
}

export const getServerSideProps = async () => {
  const apiBaseUrl = process.env.API_BASE_URL
  const res = await axios.get<any, FetchArtistsResponse>(`${apiBaseUrl}/artists`)
  const { artists } = res.data

  return { props: { artists, apiBaseUrl } }
}

