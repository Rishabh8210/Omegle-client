export function Button({ title }: { title: string }) {
    return (
        <button className="text-lg cursor-pointer font-semibold">
            {title}
        </button>
    )
}