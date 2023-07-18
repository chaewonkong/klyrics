import { useState } from "react"
import { ListItem } from "./ListItem"
import { Category } from "./Category"

export const List = () => {
    const [activeArtist, setActiveArtist] = useState("BTS")
    const artists = ["BTS", "BLACK PINK", "ENHYPEN", "EXO", "NEW JEANS"]


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