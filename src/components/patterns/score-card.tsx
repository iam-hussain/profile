
const ScoreCard = ({ hed, dek }: { hed: string, dek: string }) => {
    return (
        <div className="flex items-center justify-center gap-2 py-4 align-middle">
            <span className="text-3xl xl:text-4xl 4xl:text-5xl">{hed}</span>
            <p className="text-sm 4xl:text-base text-foreground/80 max-w-[100px]">{dek}</p>
        </div>
    )
}

export default ScoreCard