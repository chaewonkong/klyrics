export interface FetchArtistsResponse {
    data: {
        artists: Artist[]
    }
}


export interface Artist {
    id: number;
    name: string;
}