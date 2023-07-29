export interface FetchSongsResponse {
    songs: Song[]
}

export interface FetchSongResponse {
    data: Song
}

export interface Song {
    id: number;
    artist_id: number;
    title: string;
    youtube_link: string;
    lyrics_data: {
        translation: Translation[]
    }
}

export interface Translation {
    korean: string;
    english_pronunciation: string;
}