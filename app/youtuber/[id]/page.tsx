import NavbarContainer from "@/app/components/Navbar/NavbarContainer";
import YoutuberDetailHubContainer from "./components/YoutuberDetailHubContainer";

interface PropsType {
    params : {id : string};
}

export default function Youtuber(
    props : PropsType
){
    const channelId = props.params.id;

    return(
        <>
            <NavbarContainer />
            <YoutuberDetailHubContainer channelId={channelId} />
        </>
    )
}