import { urlFor } from "sanity"

const Image = ({ image }) => {
    return(
        <div>
        <img src={urlFor(image)}/>
        </div>
    )
}

export default Image