import { useRouter } from "next/router";

interface IProps {
    label: string;
    link: string;
}

export const ListItem = ({ label, link }: IProps) => {
    const router = useRouter()
    return (
        <div className="w-full py-6 cursor-pointer flex flex-row justify-between items-center" onClick={() => router.push(link)}>
            <p className="text-[16px] font-semibold text-[#17171B]">{label}</p>
            <a className="w-6 h-6">
                <img src="/arrow_right.svg" alt="click to view detail" width="24px" height="24px" />
            </a>
        </div>
    )
}