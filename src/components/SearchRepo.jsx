import React from 'react'
import { useForm } from '../hooks/useForm'

const SearchRepo = ({ setSearchInput }) => {
    const { formState, onInputChange } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchInput(formState.repo)
    }

    return (
        <div className='main-repo-search'>
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="repo">Search: </label> */}
                <input onChange={onInputChange} type="text" name="repo" id="repo" placeholder='Search on Github' />
                <button type="submit">Search</button>
            </form>
            <p className='search-description'>Take a look at the first commit of repos like: react or nextjs</p>
        </div>
    )
}

export default SearchRepo