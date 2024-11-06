import { useQuery } from "@tanstack/react-query";
import PopularCarouselContainer from "./PopularCarouselContainer";
import useProcessError from "@/@util/hooks/useprocessError";
import fetchDBPopularVideo from "@/@util/functions/fetch/fetchDBPopularVideo";
import PopularContainerLoadingSpinner from "./PopularContainerLoadingSpinner";
import CardHeaderContainer from "./CardHeaderContainer";
import ErrorContainer from "../../ErrorContainer";

export default function PopularYoutuberHubContainer(){

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey : ['videoPopularity'],
        queryFn : () => fetchDBPopularVideo(),
        refetchOnWindowFocus : false,
        // 캐시타임 1시간(3600000ms)
        gcTime : 3600000,
        staleTime : 3600000,
    })

    const errorMessage = useProcessError(isError, error, "null");

    if(errorMessage) return <ErrorContainer errorMessage={errorMessage} />;
    
    return (
        <>
            <CardHeaderContainer refetch={refetch} type="video" />
            {
                !data || isLoading ?
                <PopularContainerLoadingSpinner />:
                <PopularCarouselContainer carouselData={data} type="video" />
            }
            <div style={{clear : 'both'}} />
        </>
    )
}