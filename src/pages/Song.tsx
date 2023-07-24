import { FetchSongResponse, FetchSongsResponse, Song } from "@/interfaces/songs"
import axios from "axios"

interface IProps {
    song: Song
}

export default function Song({ song }: IProps) {
    return (
        <section>
            <div>header</div>
            <div>{song.title}</div>
            <div>{song.youtube_link}</div>
        </section>
    )
}

export const getServerSideProps = async () => {
    const apiBaseUrl = process.env.API_BASE_URL
    const { data } = await axios.get<any, FetchSongResponse>(`${apiBaseUrl}/artists`)

    return { props: { song: data.song } }
}