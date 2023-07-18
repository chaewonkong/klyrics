import { Dispatch, SetStateAction } from "react";

export interface IProps {
    artists: string[];
    activeArtist: string;
    setActive: Dispatch<SetStateAction<string>>
}

interface ItemProps {
    artist: string;
    active: boolean;
    setActive: () => void
}

const Item = ({ artist, active, setActive }: ItemProps) => {
    const thickness = active ? "border-b-2" : "border-b-0"
    const color = active ? "text-[#3D4350]" : "text-[#848B9C]"
    const borderColor = active ? "border-[#0A0A0C]" : "border-[#E8EAEE]"
    return (
        <div onClick={setActive} className={`cursor-pointer px-4 inline grow-0 shrink-0 h-12 ${borderColor} ${thickness}`}>
            <h3 className={`inline text-[16px] ${color} font-semibold`}>{artist}</h3>
        </div>
    )
}

export const Category = ({ artists, activeArtist, setActive }: IProps) => {
    return (
        <div className="w-full overflow-x-scroll flex items-start flex-nowrap border-b border-[#E8EAEE]">
            {artists.map(artist => <Item setActive={() => setActive(artist)} key={artist} artist={artist} active={artist === activeArtist} />)}
        </div>
    )
}