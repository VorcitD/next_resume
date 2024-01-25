export default function TextArea(props: {placeholder:string}){
    return(
        <div className=" px-4 py-2 border-b border-zinc-700 bg-transparent w-full">
            <textarea rows={6} className="w-full bg-transparent outline-none caret-secondary text-secondary placeholder:text-secondary placeholder:opacity-70" placeholder={`${props.placeholder}`} />
        </div>
    )
}