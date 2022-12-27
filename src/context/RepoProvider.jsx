import React, { useState } from 'react'
import { RepoContext } from './RepoContext'

const RepoProvider = ({ children }) => {
    const [repo, setRepo] = useState({ ok: "chau" })

    return (
        <RepoContext.Provider value={{ repo, setRepo }}>
            {children}
        </RepoContext.Provider>
    )
}

export default RepoProvider