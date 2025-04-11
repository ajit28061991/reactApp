const  heading= React.createElement('h1',
    {id:'heading', className:"heading" },   
     React.createElement('h2',{id:'child'}, 
  
     [React.createElement('h2',{id:'child1'}, 'Child 111111'), React.createElement('h2',{id:'child2' }, 'Child 22222')]
  )  
  )
    const root= ReactDOM.createRoot(document.getElementById('root'))
    root.render(heading)
    console.log(heading)