import { useEffect } from "react";
import Card from "../components/card";
import { useCtx } from "../store";

const Hello = () => {
    const ctx = useCtx()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums`)
            .then((response) => response.json())
            .then((res) => {
                //update value context of state data
                ctx.dispatch({
                    data: res
                })
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [])

    const setTitle = () => {
        //update value context of state title
        ctx.dispatch({
            title: 'Congratulations!',
        })
    }

    useEffect(() => setTitle(), [])

    return (
        <>
            <div className="my-10 text-center">
                <h2 className="text-3xl">{ctx.state.title}</h2>
                <p className="text-lime-400 mt-3">The title is result from context.</p>
                <div className="mt-5 flex flex-wrap">
                    <Card />
                </div>
            </div>
        </>
    )
}

export default Hello;