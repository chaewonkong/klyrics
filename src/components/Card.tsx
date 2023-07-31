import Image from "next/image"

export const Card = () => {
    return (
        <section className="px-4">
            <a className="w-full" href="https://forms.gle/gm6pEy9YmfA2uFPd7">
                <div className="w-full px-4 py-6 bg-[#FDE9FD] rounded-[12px] flex items-center">
                    <img src="/plus.svg" alt="plus" className="w-6 h-6" />
                    <div className="w-full ml-4">
                        <h3 className="text-[16px] font-semibold text-[#3E1A6A]">ADD A K-POP SONG</h3>
                        <p className="text-[14px] font-normal text-[#9F63BE]">Let me know what song you want</p>
                    </div>
                </div>
            </a>
        </section>
    )
}