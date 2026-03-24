import {type Dispatch, type SetStateAction} from "react";

export interface BlogContextType {
    message: string;
    setMessage: Dispatch<SetStateAction<string>>;
}