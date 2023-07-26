interface IProps {
    title: string,
    onClick: () => void
}

export const SongHeader = ({ title, onClick }: IProps) => (
    <section className="w-full h-12 flex flex-row justify-between items-center">
        <a onClick={onClick} className="shrink-0 cursor-pointer">
            <img src="/arrow_left.svg" width={48} height={48} />
        </a>
        <h1 className="w-full shrink-1 text-[18px] text-[#3D4350] font-semibold">{title}</h1>
        <div className="w-12 h-12 shrink-0" />
    </section>
)