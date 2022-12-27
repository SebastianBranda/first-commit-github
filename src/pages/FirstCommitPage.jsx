import React, { useContext } from 'react'
import { RepoContext } from '../context/RepoContext'

const FirstCommit = () => {
    const { repo } = useContext(RepoContext)
    return (
        <>
            <div>FirstCommit Page</div>
            <p>{repo.name}</p>
            <p>{repo.description}</p>
            <p>{repo.homepage}</p>
            <p>{repo.html_url}</p>
            <p>{repo.stargazers_count}</p>
            <p>{repo.updated_at}</p>


        </>
    )
}

export default FirstCommit