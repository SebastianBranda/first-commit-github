import React from 'react'
import { useForm } from '../hooks/useForm'

const SearchRepo = ({ setSearchInput }) => {
    const { formState, onInputChange } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchInput(formState.repo)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="repo">Search: </label>
                <input onChange={onInputChange} type="text" name="repo" id="repo" />
                <button type="submit">Search</button>
            </form>
            <p>Take a look at the first commits of repos like: react or nextjs</p>
        </>
    )
}

export default SearchRepo