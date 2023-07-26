import { SongHeader } from "@/components/SongHeader";
import { FetchSongResponse, FetchSongsResponse, Song } from "@/interfaces/songs"
import axios from "axios"
import { useRouter } from "next/router";

interface IProps {
    song: Song
}

function getVideoId(url: string): string | null {
    const urlObj = new URL(url)
    const params = new URLSearchParams(urlObj.search);

    return params.get("v")
}

export default function SongView({ song }: IProps) {
    const youtubeSongId = getVideoId(song.youtube_link)
    const youtubeLink = `https://youtube.com/embed/${youtubeSongId}`
    const router = useRouter()
    return (
        <section>
            <SongHeader title={song.title} onClick={() => router.back()} />
            <div>
                <iframe width="640" height="360" src={youtubeLink} title={song.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
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