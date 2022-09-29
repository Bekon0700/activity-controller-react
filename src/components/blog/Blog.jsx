import React from 'react'

const Blog = () => {
    const blogPost = [
        {
            id: 1,
            question: 'How does React works?',
            answer: `ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.`
        },
        {
            id: 2,
            question: 'Difference between props and state',
            answer: `Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.`
        },
        {
            id: 3,
            question: 'Usage of useEffect without calling api',
            answer: `The useEffect hook allows you to perform side effects in a functional component. There is a dependency array to control when the effect should run. It runs when the component is mounted and when it is re-rendered while a dependency of the useEffect has changed.`
        },
    ]
  return (
    <div className='py-8 w-11/12 mx-auto flex flex-col gap-5'>
        {
            blogPost.map(el => {
                return (
                    <div key={el.id} className='border rounded-md py-4 px-2'>
                        <p className='text-xl font-semibold pb-4'>{el.question}</p>
                        <p className='text-lg '>{el.answer}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Blog