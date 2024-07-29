import { PageType } from "pages/pageType"

const Home = ({ router, state, dispatch }: PageType) => {
    return (
        <div className="w-full h-full flex-flex-row font-bold flex flex-col items-center justify-center">
            <span>Home</span>
        </div>
    )
}

export default Home