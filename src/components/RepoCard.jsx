import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { RepoContext } from "../context/RepoContext"
import { IconStar } from '../utils/IconStar';

const RepoCard = ({ data }) => {
    const { repo, setRepo } = useContext(RepoContext);

    const handleClick = () => {
        setRepo(data);
    }

    return (
        <section className='card'>
            <header>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
            </header>
            <p>
                <a href={data.homepage} target="_blank" rel="noopener noreferrer">{data.homepage}</a>
            </p>
            <p><IconStar /> Stars: {data.stargazers_count}</p>

            <Link to="/first-commit">
                <button onClick={handleClick}>Select</button>
            </Link>
        </section >
    )
}

export default RepoCard