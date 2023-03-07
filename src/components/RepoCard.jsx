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
            <h3>{data.name}</h3>
            <p>{data.description}</p>
            <p>{data.homepage}</p>
            <p>{data.stargazers_count}</p>

            <Link to="/first-commit">
                <button onClick={handleClick}>Select</button>
            </Link>
        </div>
    )
}

export default RepoCard