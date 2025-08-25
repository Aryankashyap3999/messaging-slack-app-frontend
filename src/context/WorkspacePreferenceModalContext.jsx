import  { createContext, useState } from 'react';

const WorkspacePreferenceModalContext = createContext();

export const WorkspacePreferenceModalContextProvider = ({ children }) => {

    const [openPreferences, setOpenPreferences] = useState(false);

    const [intialValue, setIntialvalue] = useState(null);

    const [workspace, setWorkspace] = useState(null);

    return (
        <WorkspacePreferenceModalContext.Provider value={{openPreferences, setOpenPreferences, intialValue, setIntialvalue, workspace, setWorkspace}}>
            { children }
        </WorkspacePreferenceModalContext.Provider>
    );
};

export default WorkspacePreferenceModalContext;