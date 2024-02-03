import Image from "next/image";
import nextImage from "@/assest/01.jpg"

const AlbumPage = () => {
    return (
        <div>
            <h1>This is image</h1>
            <Image src="https://avatars.githubusercontent.com/u/89591395?v=4" width={500} height={500} alt="image"></Image>
            <h2>Local images</h2>
            <Image src={nextImage} width={500} height={500} alt="image"></Image>
        </div>
    );
};

export default AlbumPage;