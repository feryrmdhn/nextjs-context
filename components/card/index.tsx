import { FC } from "react";
import { useCtx } from "../../store";

const Card: FC = () => {
    //call the state of data
    const ctx = useCtx()
    const list = ctx.state.data

    return (
        <>
            {list?.map(item => (
                <div key={item.id} className="w-56 m-4 p-3 border border-current rounded-md">
                    <p>User Id : {item.userId}</p>
                    <p className="text-pink-500">{item.title}</p>
                </div>
            ))}
        </>
    )
}

export default Card;