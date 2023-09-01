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
                <h2>{data.name}</h2>
                <p className='text-muted'>{data.description}</p>
            </header>

            <p>
                <a href={data.homepage} target="_blank" rel="noopener noreferrer">{data.homepage}</a>
            </p>

            <div className='more-info'>
                <p><IconStar /> Stars: {data.stargazers_count}</p>

                <Link to="/first-commit">
                    <button onClick={handleClick}>Seach first commit</button>
                </Link>
            </div>
        </section >
    )
}

export default RepoCard