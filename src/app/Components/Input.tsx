export default function Input(props: {type:string, placeholder:string}){
    return(
        <div className=" px-4 py-2 border-b border-zinc-700 bg-transparent">
            <input className=" bg-transparent outline-none caret-secondary text-secondary placeholder:text-secondary placeholder:opacity-70" type={`${props.type}`} placeholder={`${props.placeholder}`} />
        </div>
    )
}