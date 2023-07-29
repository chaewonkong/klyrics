import { Translation } from "@/interfaces/songs"
import { v4 as uuidv4 } from "uuid"

interface IProps {
    lyric: Translation[]
}

interface IText {
    text: string
}

const Paragraph = ({
    korean, english_pronunciation
}: Translation) => {
    return (
        <div className="w-full mb-6">
            <MainText text={english_pronunciation} />
            <SubText text={korean} />
        </div>
    )
}

const MainText = ({ text }: IText) => <h3 className="font-semibold text-[18px] text-[#17171B] mb-3">{text}</h3>
const SubText = ({ text }: IText) => <p className="text-[14px] text-[#6B7180]">{text}</p>

export const Lyric = ({ lyric }: IProps) => {
    return (
        <section className={`mt-6 h-full overflow-y-scroll`}>
            {lyric.map(({ korean, english_pronunciation }) => {
                const key = uuidv4()
                return <Paragraph key={key} korean={korean} english_pronunciation={english_pronunciation} />
            })}
        </section>)
}