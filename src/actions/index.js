import { ADD_BOOKMARK, DELETE_BOOKMARK } from "./types";

import { v4 as uuidv4 } from "uuid";

export const addBookmark = ({ title, url }) => ({
    type: ADD_BOOKMARK,
    payload: {
        id: uuidv4(),
        title,
        url,
    },
});

export const deleteBookmark = (id) => ({
    type: DELETE_BOOKMARK,
    payload: {
        id,
    },
});
