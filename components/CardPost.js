import Image from "next/image"
import InfoPost from "../components/InfoPost"

const CardPost = ({ thumbnail, ...infoPost }) => {
    return (
        <>
            <article className="my-5">
                <Image
                    src={thumbnail}
                    className="rounded object-cover"
                    alt="Landscape picture"
                    width={1000}
                    height={450} />
                <InfoPost {...infoPost} />
            </article>
        </>
    )
}
export default CardPost