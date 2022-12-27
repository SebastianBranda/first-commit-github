import React, { useState } from 'react'
import ListOfRepos from '../components/ListOfRepos'
import SearchRepo from '../components/SearchRepo'
import { useFetch } from '../hooks/useFetch'

const FirstCommitSearchPage = () => {
    const [searchInput, setSearchInput] = useState("")

    return (
        <>
            <div>FirstCommitSearchPage</div>
            <SearchRepo setSearchInput={setSearchInput} />

            {searchInput === "" ?
                <div>Seach somthing!</div>
                :
                <ListOfRepos searchInput={searchInput} />
            }

        </>
    )
}

export default FirstCommitSearchPage