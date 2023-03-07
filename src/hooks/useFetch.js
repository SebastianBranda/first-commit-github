import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        headerLink: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const headerLink = resp.headers.get("link")
        const data = await resp.json();

        setState({
            data,
            headerLink,
            isLoading: false,
            hasError: null,
        });
    }

    useEffect(() => {
        if (url !== "")
            getFetch();
    }, [url])

    return {
        data: state.data,
        headerLink: state.headerLink,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}