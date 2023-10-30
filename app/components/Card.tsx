import Link from "next/link";

const Card = ({ name, link }: {
    name: string,
    link: string
}) => {
    return (
        <Link href={link} target="_blank" className="card">
            {name}
        </Link>
    )
}

export default Card;

// bg-gradient-to-br from-[#fff] to-[#adadad]