import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [headerLink, setHeaderLink] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(null)

    const getFetch = async () => {
        setIsLoading(true)
        const resp = await fetch(url);
        setHeaderLink(resp.headers.get("link"))
        const dataResp = await resp.json();
        setData(dataResp)
        setIsLoading(false)
    }

    useEffect(() => {
        if (url !== "")
            getFetch();
    }, [url])

    return {
        data,
        headerLink,
        isLoading,
        hasError,
    };
}