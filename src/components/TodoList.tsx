import { Table } from '@mantine/core';
import { useState } from 'react';
const TodoList = (props: any) => {
    const { handleChange,
        handleSubmit,
        todoList,
        handleDelete,
        handleDeleteAll,
        userInput,
        handleAll,
        handleTodo,
        setTodoList,
        handleDone,
        handleDeleteDoneTasks,
        // handleEdit,
    } = props

// const [submit, setSubmit] = useState('')
    // console.log("todoList", todoList)
    const rows = (
        <>
            {todoList.length >= 1 ? todoList.map((todo: any, idx: any) => {
                { console.log("todo", todo.show) }
                return (
                    <div key={idx} className='flex  ' >
                        <div className='flex flex-col w-5/6 ml-20 '>
                            <p className={todo?.status ? 'line-through' : '' || todo?.show ? 'invisible' : ''} >{todo.name}</p>
                                {/* //[{}]
                                //[1] {name, status, show}
                                //done.name = e.target.value
                                //setTodolist = [{}] */}
                            {/* <form
                                action=""> */}
                                    <div className={todo?.show ? '' : 'invisible'}>

                                <div className='flex '>
                                    <input
                                        type="text"
                                        value={todo.name}
                                        onChange={(e) => {
                                            e.preventDefault()
                                            const todo = todoList.find((_: { name: string, status: boolean }, index: number) => index === idx)
                                            
                                            const newList = todoList
                                            todo.name = e.target.value
                                        const doneName = todo.name

                                        newList[idx] = { name: doneName, status: todo.status, show: todo.show }

                                        // const doneName = todo.name

                                        setTodoList([... newList])
                                        
                                        
                                        console.log("done" , e.target.value)
                                    }}
                                    />
                                
                                    {/* <button onClick={(e) => {
                                        e.preventDefault()
                                        
                                    }}>go</button> */}
                                    </div>
                                </div>
                            {/* </form> */}

                        </div>

                        <div className='flex flex-row place-items-center mr-20 p-2'>
                            <div>
                                <input type="checkbox"
                                    className="h-4 w-4"
                                    onChange={(e) => {
                                        const todo = todoList.find((_: { name: string, status: boolean }, index: number) => index === idx)

                                        const newList = todoList
                                        newList[idx] = { name: todo.name, status: e.target.checked }

                                        setTodoList([...newList])

                                        console.log('test', e.target.checked)
                                    }}
                                // checked={todo.status}
                                />
                            </div>
                            <div>
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    handleDelete(idx)
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>

                                </button>
                            </div>
                            <div>
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    const todo = todoList.find((_: { name: string, status: boolean, show: boolean }, index: number) => index === idx)

                                    const newList = todoList
                                    newList[idx] = { name: todo.name, status: todo.status, show: !todo.show ? true : false }
                                    console.log("newList", newList)
                                    setTodoList([...newList])

                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }) : <div className='flex justify-center'> Add TodoList </div>
            }

        </>
    )

    return (
        <div className=' flex flex-row justify-center max-h-80 py-20 '>
            <div className="bg-white flex flex-col rounded-lg ring-2 place-items-center w-1/2 h-full drop-shadow-2xl max-w-lg ">
                <div className='flex flex-col place-items-center w-5/6'>
                    <label
                        htmlFor="Todo Input"
                        className='text-2xl p-5'
                    >Todo Input</label>
                    <div className='rounded-lg ring-2 w-full py-8 drop-shadow-2xl'>
                        <form >
                            <div className='flex flex-row p-5'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5} stroke="currentColor"
                                    className="w-8 h-8"

                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                                </svg>
                                <input
                                    type="text"
                                    value={userInput?.name ?? ''}
                                    onChange={handleChange}
                                    className='bg-teal-300 flex justify-center w-full placeholder-black-900 rounded-2xl p-2'
                                    placeholder='Task...'
                                    required />
                            </div>
                            <div className='p-5'>
                                <div className='bg-green-600 text-white rounded-xl'>
                                    <button
                                        onClick={handleSubmit}
                                        className='text-2xl w-full p-1'>Add New Task</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex flex-row justify-evenly py-5'>
                        <button
                            className="px-3 py-2 bg-green-600 text-white rounded-xl"
                            onClick={(e) => {
                                e.preventDefault()
                                handleAll()
                            }
                            }
                        >All</button>
                        <button
                            className="px-3 py-2 bg-green-600 text-white rounded-xl"
                            onClick={(e) => {
                                e.preventDefault()
                                handleDone()
                            }}
                        >Done</button>
                        <button
                            className="px-3 py-2 bg-green-600 text-white rounded-xl"
                            onClick={(e) => {
                                e.preventDefault()
                                handleTodo()
                            }}
                        >Todo</button>
                    </div>
                    <div>
                        {rows}
                    </div>
                    <div className='flex flex-row justify-evenly py-5'>
                        <button
                            className="px-3 py-2 bg-red-600 text-white rounded-xl"
                            onClick={(e) => {
                                e.preventDefault()
                                handleDeleteDoneTasks()
                            }}
                        >Delete Done Tasks</button>
                        <button
                            className="px-3 py-2 bg-red-600 text-white rounded-xl"
                            onClick={(e) => {
                                e.preventDefault()
                                handleDeleteAll()
                            }}
                        >Delete All Tasks</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList