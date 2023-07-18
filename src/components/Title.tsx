interface IProps {
    text: string;
}

export const Title = ({ text }: IProps) => {
    return <div className="px-4 py-6"><h2 className="text-[#17171B] text-[20px] font-bold">{text}</h2></div>
}