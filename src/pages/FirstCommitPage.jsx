import React, { useContext, useEffect, useState } from 'react'
import { RepoContext } from '../context/RepoContext'
import { useFetch } from '../hooks/useFetch'

/*
repo.commits_url.split("{")[0]
headerLink.match(/http.*?[\d]+/g)[1]
*/

const FirstCommit = () => {
    const { repo } = useContext(RepoContext)
    const { data, headerLink, isLoading, hasError } = useFetch(repo.commits_url.split("{")[0])
    const [firstCommit, setFirstCommit] = useState({})
    const [isFirstCommitLoading, setIsFirstCommitLoading] = useState(true)


    useEffect(() => {
        const lastPageOfCommits = headerLink?.match(/[0-9]+/g).pop();
        fetch(`https://api.github.com/repositories/${repo.id}/commits?page=${lastPageOfCommits}`)
            .then(resp => resp.json())
            .then(myData => {
                setFirstCommit(myData.pop())
                setIsFirstCommitLoading(false)
            })
    }, [data])

    const renderFirstCommit = (
        isFirstCommitLoading ?
            "loading" :
            (
                <>
                    <p>{firstCommit.author.login}</p>
                    <p>{firstCommit.author.html_url}</p>
                    <p>{firstCommit.commit.message}</p>
                    <p>{firstCommit.html_url}</p>
                </>
            )
    )

    return (
        <>
            <div>FirstCommit Page</div>

            <div>
                <h3>{repo.name}</h3>
                <p><span>Description: </span>{repo.description}</p>
                <p><span>Fullname: </span>{repo.full_name}</p>
                <p><span>Language: </span>{repo.language}</p>
                <p><span>License: </span>{repo.license?.name || `Unknown`}</p>
                <p><span>Date of creation: </span>{repo.created_at}</p>
                <p><span>Last update: </span>{repo.updated_at}</p>
            </div>

            <div>
                {/* TODO: ADD ICONS FOR THESE */}
                {repo.stargazers_count}
                {repo.watchers_count}
                {repo.homepage}
                {repo.html_url}
            </div>

            <div>
                {renderFirstCommit}
            </div>
        </>
    )
}

export default FirstCommit