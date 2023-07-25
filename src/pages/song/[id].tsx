import { FetchSongResponse, FetchSongsResponse, Song } from "@/interfaces/songs"
import axios from "axios"

interface IProps {
    song: Song
}

export default function SongView({ song }: IProps) {
    return (
        <section>
            <div>header</div>
            <div>{song.title}</div>
            <div>{song.youtube_link}</div>
        </section>
    )
}

const initialSong = {
    id: 0,
    artist_id: 0,
    title: "",
    youtube_link: "",
    lyrics_data: {
        translation: []
    }
}
export const getServerSideProps = async (context: any) => {
    const apiBaseUrl = process.env.API_BASE_URL
    const { params } = context;

    const res = await axios.get<any, FetchSongResponse>(`${apiBaseUrl}/songs/${params.id}/`)
    const song = res.data

    return { props: { song } }
}