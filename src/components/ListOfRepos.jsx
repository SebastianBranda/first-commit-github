import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import RepoCard from './RepoCard'

const BASE_URL = "https://api.github.com/search/repositories?q="
// const url = "https://jsonplaceholder.typicode.com/todos"

const ListOfRepos = ({ searchInput }) => {
    const [repos, setRepos] = useState([])
    const { data, isLoading, hasError } = useFetch(`${BASE_URL}${searchInput}`)

    useEffect(() => {
        setRepos(data?.items)
    }, [data])

    const listOfRepos = repos?.map(repo => <RepoCard data={repo} key={repo.id} />)

    return (
        <>
            <div className="list-of-cards">
                {isLoading ?
                    <div>Loading</div> :
                    listOfRepos
                }

                {/* TODO: ADD PAGINATION */}
            </div>
        </>
    )
}

export default ListOfRepos