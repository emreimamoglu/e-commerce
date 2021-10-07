import { createSelector } from "reselect";
import directoryReducer from "./directory.ruducer";

const selectDirectory = state => state.directory;
export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory=> directory.sections
)

