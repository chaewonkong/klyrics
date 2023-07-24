export interface FetchSongsResponse {
    data: {
        songs: Song[]
    }
}

export interface Song {
    id: number;
    artist_id: number;
    title: string;
}