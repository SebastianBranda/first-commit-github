import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { RepoContext } from "../context/RepoContext"

const RepoCard = ({ data }) => {
    const { repo, setRepo } = useContext(RepoContext);

    const handleClick = () => {
        setRepo(data);
    }

    return (
        <div className='card'>
            <div>RepoCard</div>
            <p>{data.name}</p>
            <p>{data.description}</p>
            <p>{data.homepage}</p>
            <p>{data.html_url}</p>
            <p>{data.stargazers_count}</p>
            <p>{data.updated_at}</p>


            <Link to="/first-commit">
                <button onClick={handleClick}>Select</button>
            </Link>
        </div>
    )
}

export default RepoCard