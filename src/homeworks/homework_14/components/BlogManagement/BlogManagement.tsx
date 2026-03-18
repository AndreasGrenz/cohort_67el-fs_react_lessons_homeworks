// ШАГ 1: Импортируем функцию createContext из библиотеки react
import { createContext, useState } from "react";
import Button from "components/Button/Button";

import Card from "../Card/Card";

import {
  BlogManagementWrapper,
  TextArea,
  Title,
} from "./styles";

import { type BlogContextType } from "./types";

// ШАГ 2: Создаем контекст — глобальное хранилище данных, которое мы хотим передать вниз по дереву
export const BlogContext = createContext<BlogContextType>({
  message: "",
  setMessage: () => {},
});

function BlogManagement() {
  const [inputValue, setInputValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const postMessage = () => {
    setMessage(inputValue);
    setInputValue("");
  };

  return (
 // ШАГ 3: Оборачиваем все в BlogContext.Provider и передаем value (данные, которые хотим передать вниз)
    <BlogContext.Provider value={{ message, setMessage }}>
      <BlogManagementWrapper>
        <Title>Blog Management</Title>
        <TextArea
          placeholder="Введите сообщение"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Button name="Запостить" onClick={postMessage} />
        <Card />
      </BlogManagementWrapper>
    </BlogContext.Provider>
  );
}

export default BlogManagement;