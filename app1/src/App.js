import React from "react"


const Button = React.lazy(()=>import('app2/Button'))
 const App = () => {
  return (
    <div>
      <h1>Basic Host-remote</h1>
      <h2>App 1</h2>
  
      <React.Suspense fallback="loading button">
        <Button></Button>
      </React.Suspense>
    </div>
  )
}
export default App