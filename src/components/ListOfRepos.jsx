import React from 'react'
import RepoCard from './RepoCard'

const ListOfRepos = ({ searchInput, list = null, isLoading = true }) => {
    const listOfRepos = list?.map(repo => <RepoCard data={repo} key={repo.id} />)

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