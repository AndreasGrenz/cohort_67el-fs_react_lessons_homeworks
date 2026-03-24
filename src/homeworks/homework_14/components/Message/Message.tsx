// ШАГ 4: Импортируем хук useContext из библиотеки react
import {useContext} from "react";
// ШАГ 5: Импортируем созданный контекст BlogContext
import { BlogContext } from "../BlogManagement/BlogManagement"; 

import { MessageText } from "./styles";

function Message() {
    // ШАГ 6: Получаем доступ к данным из контекста
    const {message} = useContext(BlogContext);
    return (
        <MessageText>
            {message}
        </MessageText>
    );
}

export default Message;