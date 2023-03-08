import React, { useContext, useEffect, useState } from 'react'
import { RepoContext } from '../context/RepoContext'
import { useFetch } from '../hooks/useFetch'
import { IconGithub } from '../utils/IconGithub'
import { IconLink } from '../utils/IconLink'
import { IconStar } from '../utils/IconStar'

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
                    <p>
                        Made by: <img src={firstCommit.author.avatar_url}></img>
                        <a href={firstCommit.author.html_url} target="_blank" rel="noopener noreferrer"> {firstCommit.author.login}</a>
                    </p>
                    <p>Message: {firstCommit.commit.message}</p>
                    <p>
                        <a href={firstCommit.html_url} target="_blank" rel="noopener noreferrer">Go to first commit</a>
                    </p>
                </>
            )
    )

    return (
        <main>
            <article>
                <header>
                    <h2>{repo.name}</h2>
                    <p><span>Description: </span>{repo.description}</p>
                </header>
                <p><span>Fullname: </span>{repo.full_name}</p>
                <p><span>Language: </span>{repo.language}</p>
                <p><span>License: </span>{repo.license?.name || `Unknown`}</p>
                <p><span>Date of creation: </span>{repo.created_at.split("T").shift()}</p>
                <p><span>Last update: </span>{repo.updated_at.split("T").shift()}</p>

                <div>
                    {/* TODO: ADD ICONS FOR THESE */}
                    <IconStar />
                    {repo.stargazers_count}
                    {/* {repo.watchers_count} */}
                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer"><IconLink /></a>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer"><IconGithub /></a>
                </div>
            </article>

            <article>
                <header>
                    <h3>First Commit</h3>
                </header>
                {renderFirstCommit}
            </article>
        </main>
    )
}

export default FirstCommit