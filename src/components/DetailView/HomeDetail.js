import { HomeDetailImage } from "./styles";
import background from "../../assets/app/HomeImage.jpeg";

const HomeDetail = () => {

    return (
        <HomeDetailImage style={{ backgroundImage: `url(${background})` }}>
        </HomeDetailImage>
    )

};

export default HomeDetail;