import React from 'react'
import CodeSnippet from './code-snippet'

function CodeContainer() {
    const reactCode = `
    const WelcomeUser = ({username}) => {
        return(<h1>Welcome, {username} to the React World.</h1>)
    }
    `
    const jsCode = `
    const getUserList = async (req,res) => {
        try{
            // get users from the DB
            //send the userList
            res.status(200).json({
                    success: true
                    data:{ users }
            })
        }catch(e){
            res.status(400).json({
                    error: true,
                    message: e.message 
                    ? e.message : 'Something went wrong'
                })
        }
    }`
    return (
        <section>
            <code className='text-primary-foreground text-sm'>// code snippet showcase</code>
            <CodeSnippet snippet={reactCode} />
            <CodeSnippet snippet={jsCode} />
        </section>
    )
}

export default CodeContainer