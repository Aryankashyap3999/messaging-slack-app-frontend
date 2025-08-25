import  { createContext, useState } from 'react';

const WorkspacePreferenceModalContext = createContext();

export const WorkspacePreferenceModalContextProvider = ({ children }) => {

    const [openPreferences, setOpenPreferences] = useState(false);

    const [intialValue, setIntialvalue] = useState(null);

    return (
        <WorkspacePreferenceModalContext.Provider value={{openPreferences, setOpenPreferences, intialValue, setIntialvalue}}>
            { children }
        </WorkspacePreferenceModalContext.Provider>
    );
};

export default WorkspacePreferenceModalContext;