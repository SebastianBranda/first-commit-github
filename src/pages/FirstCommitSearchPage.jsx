import React, { useState } from 'react'
import ListOfRepos from '../components/ListOfRepos'
import SearchRepo from '../components/SearchRepo'
import { useFetch } from '../hooks/useFetch'

const FirstCommitSearchPage = () => {
    const [searchInput, setSearchInput] = useState("")

    return (
        <>
            <SearchRepo setSearchInput={setSearchInput} />

            {searchInput === "" ?
                <p>Seach something!</p>
                :
                <ListOfRepos searchInput={searchInput} />
            }
        </>
    )
}

export default FirstCommitSearchPage