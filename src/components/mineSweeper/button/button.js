import React,{useRef,useEffect} from 'react'
import s from 'styled-components'

const Div=s.div`
float:left;
button{
  border-radius:3px;
  padding:10px;
  margin:10px;
  font-size:1.8em;
  color:grey;
  cursor:pointer;
  box-shadow:0 0 2px;
  outline:none;
  background-color:ghostwhite;
}
`

export function Button({dispatches,dispatch0}){
  const restartRef=useRef()

  const restart=()=>{
    dispatches.forEach(dispatches=>{
      dispatches.forEach(d=>{
        d({type:'CELL_RESTART'})
      })
    })
    dispatch0({type:'MESSAGE_RESTART'})
    dispatch0({type:'APP_RESTART'})
  }

  useEffect(()=>{
    dispatch0({type:'APP_SETRESTARTREF',val:restartRef})
  },[])

  return (
    <Div><button ref={restartRef} onClick={restart}>Restart!</button></Div>
  )
}
