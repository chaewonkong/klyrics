import { useEffect, useState } from "react"
import { ListItem } from "./ListItem"
import { Category } from "./Category"
import { Artist } from "@/interfaces/artists"
import { FetchSongsResponse, Song } from "@/interfaces/songs"
import axios from "axios"
import useSWR from 'swr'
// import { fetcher } from "@/common/fetcher"

interface IProps {
    artists: Artist[]
    apiBaseUrl: string;
}

export const List = ({ artists, apiBaseUrl }: IProps) => {
    const [activeArtist, setActiveArtist] = useState(artists[0])
    const fetcher = (url: string) => fetch(url).then(r => r.json())

    const { data, error, isLoading } = useSWR(`${apiBaseUrl}/artists/${activeArtist.id}/song/`, fetcher)

    if (isLoading) {
        return <div>Loading</div>
    }

    console.log(data)

    return (
        <section className="w-full">
            <div className="w-full">
                <Category setActive={setActiveArtist} artists={artists} activeArtist={activeArtist} />
            </div>
            <div className="w-full px-4">
                <ListItem label="label" link="/" />
                <ListItem label="label" link="/" />
            </div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const res = await axios.get<any, FetchSongsResponse>(`${process.env.API_BASE_URL}/artists`)
    const { songs } = res.data

    return { props: { songs } }
}