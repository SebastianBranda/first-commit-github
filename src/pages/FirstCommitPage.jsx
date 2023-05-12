import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RepoContext } from '../context/RepoContext'
import { useFetch } from '../hooks/useFetch'
import { IconGithub } from '../utils/IconGithub'
import { IconLink } from '../utils/IconLink'
import { IconStar } from '../utils/IconStar'

const FirstCommit = () => {
    const [firstCommit, setFirstCommit] = useState({})
    const [isFirstCommitLoading, setIsFirstCommitLoading] = useState(true)
    // const [headerLink, setHeaderLink] = useState(null)
    // const [data, setData] = useState()
    const { repo } = useContext(RepoContext)

    const { data, headerLink, isLoading, hasError } = useFetch(repo.commits_url.split("{")[0])

    // useEffect(() => {
    //     console.log("data 1");
    //     console.log(data);
    //     fetch(repo.commits_url.split("{")[0])
    //         .then(resp => {
    //             setHeaderLink(resp.headers.get("link"))
    //             return resp.json()
    //         })
    //         .then(myData => {
    //             setData(myData)
    //         })
    // }, [])

    useEffect(() => {
        const lastPageOfCommits = headerLink?.match(/[0-9]+/g).pop();
        if (lastPageOfCommits != null) {
            fetch(`https://api.github.com/repositories/${repo.id}/commits?page=${lastPageOfCommits}`)
                .then(resp => resp.json())
                .then(myData => {
                    setFirstCommit(myData.pop())
                    setIsFirstCommitLoading(false)
                })
        } else if (data != null) {
            let lastOne = data.pop()
            while (lastOne.author == null) {
                lastOne = data.pop()
            }
            setFirstCommit(lastOne)
            setIsFirstCommitLoading(false)
        }
    }, [data])

    const renderFirstCommit = (
        isFirstCommitLoading ?
            "loading" :
            (
                <>
                    <p className='info-first-commit-author'>
                        <span>Made by: </span>
                        <img src={firstCommit.author?.avatar_url}></img>
                        <a href={firstCommit.author?.html_url} target="_blank" rel="noopener noreferrer">{firstCommit.author?.login}</a>
                    </p>
                    <p><span>Message:  </span> {firstCommit.commit.message}</p>

                    <div className='d-flex-row more-info'>
                        <span className='d-flex-row'>
                            <IconStar />
                            {repo.stargazers_count}
                        </span>
                        {/* {repo.watchers_count} */}
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer"><IconLink /></a>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer"><IconGithub /></a>
                        <a href={firstCommit.html_url} target="_blank" rel="noopener noreferrer">
                            <button>
                                Go to first commit
                            </button>
                        </a>
                        <Link to="/">
                            <button >Go back</button>
                        </Link>
                    </div>
                </>
            )
    )

    return (
        <main className='container'>
            <article className='info-repo'>
                <header>
                    <h2>{repo.name}</h2>
                    <p className='text-muted'>{repo.description}</p>
                </header>
                <p><span>Fullname: </span>{repo.full_name}</p>
                <p><span>Language: </span>{repo.language}</p>
                <p><span>License: </span>{repo.license?.name || `Unknown`}</p>
                <p><span>Date of creation: </span>{repo.created_at.split("T").shift()}</p>
                <p><span>Last update: </span>{repo.updated_at.split("T").shift()}</p>
            </article>

            <article className='info-first-commit'>
                <header>
                    <h3>First Commit</h3>
                </header>
                {renderFirstCommit}
            </article>
        </main>
    )
}

export default FirstCommit