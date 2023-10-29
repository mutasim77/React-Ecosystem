import Link from "next/link";

const Card = ({
    title,
    size,
    link
}: {
    title: string,
    size: string,
    link?: string
}) => {
    return (
        <Link
            href={`${link ? `${link}` : `#${title}`}`}
            target={`${link ? '_blank' : '_self'}`}
        >
            <li
                className={`${size} border border-[#ccc] 
                    rounded-md text-black font-bold 
                    bg-gradient-to-br from-[#fff] to-[#adadad]
                    flex items-center justify-center
                    text-center
                `}
            >
                {title}
            </li>
        </Link>
    )
}

export default Card;
