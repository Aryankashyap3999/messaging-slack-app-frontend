import { createContext, useState} from 'react';

const WorkspaceContext = createContext();



export const WorkspaceContextProvider = ({ children }) => {

    const [workspaceIdContext, setWorkspaceIdContext] = useState(null);

    return (
        <WorkspaceContext.Provider value={{workspaceIdContext, setWorkspaceIdContext}}>
            {children}
        </WorkspaceContext.Provider>
    );
};

export default WorkspaceContext;