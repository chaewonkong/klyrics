import { useEffect, useState } from "react"
import { ListItem } from "./ListItem"
import { Category } from "./Category"
import { Artist } from "@/interfaces/artists"
import { FetchSongsResponse, Song } from "@/interfaces/songs"
import axios from "axios"
import useSWR from 'swr'
import { fetcher } from "@/common/fetcher"

interface IProps {
    artists: Artist[]
    apiBaseUrl: string;
}


export const List = ({ artists, apiBaseUrl }: IProps) => {
    const [activeArtist, setActiveArtist] = useState(artists[0])

    const { data, error, isLoading } = useSWR<FetchSongsResponse>(`${apiBaseUrl}/artists/${activeArtist.id}/song/`, fetcher)


    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        <section className="w-full">
            <div className="w-full">
                <Category setActive={setActiveArtist} artists={artists} activeArtist={activeArtist} />
            </div>
            <div className="w-full px-4">
                {data ? data.songs.map(({ title, id }) => <ListItem key={id} label={title} link={`/song/${id}`} />) : null}
            </div>
        </section>
    )
}
