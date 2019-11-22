import React,{useEffect} from 'react'
import s from 'styled-components'

const Loose=s.div`
color:#45de45;
font-size:2.1em;
padding:10px;
margin:10px;
`
const Win=s.div`
color:red;
font-size:2.1em;
padding:10px;
margin:10px;
`
const Invisible=s.div`
font-size:2.1em;
padding:10px;
margin:10px;
visibility:hidden;
`
const Div=s.div`
`

export function Message({state,dispatch}){

  useEffect(()=>{
    if(state.message.end&&state.message.loose&&state.message.win){
      dispatch({type:'MESSAGE_WINOFF'})
    }
  },[state.message.win])

  return (
    <Div>
    {
      state.message.end?
      (state.message.win?
      <Win>You win!!!</Win>:
      <Loose>You loose!!!</Loose>):
      <Invisible>Foo</Invisible>
    }
    </Div>
  )
}
