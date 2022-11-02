import { useEffect, useState } from "react"
import TodoList from "../components/TodoList"

export default function Home() {

  const [userInput, setUserInput] = useState<{ name: string, status: boolean, show: boolean } | null>(null)
  const [todoList, setTodoList] = useState<{ name: string, status: boolean, show: boolean }[]>([])
  const [cloneTodoList, setCloneTodoList] = useState(todoList)
  // const [show, setShow] = useState<boolean>(false)


  const handleChange = (e: any) => {
    e.preventDefault()
    setUserInput(e.target.value)

    setUserInput({ name: e.target.value, status: false, show: false })

    // console.log(userInput)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (userInput) {

      setTodoList([
        ...todoList,
        userInput,
        // input
      ])
      setUserInput(null)
    }
  }

  useEffect(() => {
    if (todoList) setCloneTodoList(todoList)
  }, [todoList])

  const handleDelete = (idx: any) => {
    const update = todoList.filter((_: any, index: any) => index !== idx
      // console.log(todoItem, todo, 'jasodjoif')
    )
    setTodoList(update)
  }

  const handleDone = () => {
    const done = todoList.filter((todo: { name: string, status: boolean, show: boolean }) => todo.status)
    setCloneTodoList(done)
    console.log(todoList)
  }
  // todoList.status

  const handleDeleteAll = () => {
    setTodoList([])
  }

  const handleAll = () => {
    // const all = todoList.filter((todo: { name: string, status: boolean }, index: number) => todo )
    setCloneTodoList(todoList)

  }

  const handleTodo = () => {
    const done = todoList.filter((todo: { name: string, status: boolean, show: boolean }, index: number) => !todo.status)
    setCloneTodoList(done)
  }

  const handleDeleteDoneTasks = () => {
    const done = todoList.filter((todo: { name: string, status: boolean, show: boolean }, index: number) => !todo.status)
    setTodoList(done)
  }

  // const handleEdit = (idx: any) => {
  //   const submit = todoList.filter((todo: { name: string, status: boolean, show: boolean }, index: number) => index == idx)

  //   setTodoList([
  //     submit.name,
  //     ...todoList])
  // }



  console.log(todoList)

  return (
    <div className="bg-gray-700 w-full h-screen">
      <TodoList
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        todoList={cloneTodoList}
        userInput={userInput}
        handleDelete={handleDelete}
        handleDeleteAll={handleDeleteAll}
        handleAll={handleAll}
        handleTodo={handleTodo}
        setTodoList={setTodoList}
        handleDone={handleDone}
        handleDeleteDoneTasks={handleDeleteDoneTasks}
        // handleEdit={handleEdit}
      />
    </div>
  )
}
