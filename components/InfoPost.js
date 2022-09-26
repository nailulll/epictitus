import Image from "next/image";

const InfoPost = ({
    category,
    date,
    title,
    shortDescription,
    authorAvatar,
    authorJob,
    authorName
}) => {
    return (
        <>
            <div className="flex items-center text-white/60 space-x-4">
                <div className="uppercase">{category}</div>
                <span>&bull;</span>
                <div>{date}</div>
            </div>
            <h2 className="text-2xl mt-6">{title}</h2>
            <p className="text-white/60 mt-4 w-10/12">{shortDescription}</p>
            <div className="flex items-center mt-4">
                <Image src={authorAvatar} alt="people" width={50} height={50} className="rounded-full object-cover" />
                <div className="ml-6">
                    <h3>{authorName}</h3>
                    <p className="text-white/60 text-sm">{authorJob}</p>
                </div>
            </div>
        </>
    )
}
export default InfoPost