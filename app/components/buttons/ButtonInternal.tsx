import Link from 'next/link'

type Props = {
    href: string,
    title: string
}

const ButtonInternal = ({ href, title }: Props) => {
    return (
        <div className="flex justify-center md:items-start md:justify-start">
            <button
                className='bg-limeGreen
                px-8 py-4 rounded-full text-jungleGreen
                hover:scale-105 hover:ease-in-out hover:duration-200 lg:px-12 lg:py-6'
            >
                <Link href={`${href}`}>
                    {title}
                </Link>
            </button>
        </div>
    )
}

export default ButtonInternal