interface IProps {
    label: string;
    link: string;
}

export const ListItem = ({ label, link }: IProps) => {
    return (
        <div className="w-full py-6 flex flex-row justify-between items-center">
            <p className="text-[16px] font-semibold text-[#17171B]">{label}</p>
            <a href={link} className="w-6 h-6">
                <img src="/arrow_right.svg" alt="click to view detail" width="24px" height="24px" />
            </a>
        </div>
    )
}