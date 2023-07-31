import { Lyric } from "@/components/Lyric";
import { SongHeader } from "@/components/SongHeader";
import { FetchSongResponse, FetchSongsResponse, Song } from "@/interfaces/songs"
import axios from "axios"
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

interface IProps {
    song: Song
}

function getVideoId(url: string): string | null {
    const urlObj = new URL(url)
    const params = new URLSearchParams(urlObj.search);

    return params.get("v")
}

// youtube size = 16:9
// width / 16 * 9 = height
// 100vw / 16 * 9

export default function SongView({ song }: IProps) {
    const youtubeSongId = getVideoId(song.youtube_link)
    const youtubeLink = `https://youtube.com/embed/${youtubeSongId}`
    const router = useRouter()
    return (
        <>
            <NextSeo
                title="Klyrics"
                description="Sing Korean songs with Korean pronunciation written in english alphabet"
                canonical={`https://klyrics.vercel.app/${song.id}`}
                openGraph={{
                    url: 'https://klyrics.vercel.app',
                    title: song.title,
                    description: song.title,
                    siteName: 'Klyrics',
                }}
            />
            <section className="h-[100vh] overflow-hidden">
                <div>
                    <SongHeader title={song.title} onClick={() => router.back()} />
                    <iframe className="w-full h-[calc((min(640px,100vw)/16)*9)]" src={youtubeLink} title={song.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <Lyric lyric={song.lyrics_data.translation} />
            </section>
        </>

    )
}
// TODO: width, height를 js로 결정해서 iframe에 제공
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