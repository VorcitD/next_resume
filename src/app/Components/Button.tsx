
export default function Button(props: {text:string}) {
    return (
        <div className="font-thin font-sans text-lg border-secondary border py-4 px-8  text-fontSecondary hover:text-secondary transition duration-300 hover:cursor-pointer ">
            <button className="">
                {props.text}
            </button>
        </div>
    )
  }
  