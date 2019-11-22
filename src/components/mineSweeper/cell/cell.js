import React,{useRef,useEffect} from 'react'
import s from 'styled-components'

const Covered=s.div`
width:16px;
height:16px;
background-color:grey;
border-radius:3px;
cursor:pointer;
float:left;
margin:3px;
`

const Uncovered=s.div`
width:16px;
height:16px;
background-color:white;
border-radius:3px;
cursor:pointer;
float:left;
margin:3px;
color:red;
`

const Mine=s.div`
float:left;
`

export function Cell({states,dispatches,state0,dispatch0,i,j}){

  const state=states[i][j]
  const dispatch=dispatches[i][j]

  const uncoverRef=useRef()

  function uncover(){
    if(!state0.message.end&& state.cell.covered){
      dispatch({type:'CELL_UNCOVER'})

      if(state.cell.mine){
        dispatch0({type:'MESSAGE_LOOSE'})
        dispatch0({type:'MESSAGE_END'})
      }

    }
  }

  useEffect(()=>{
    dispatch0({type:'APP_SETCELLREF',val:uncoverRef,i:i,j:j})
  },[])

  useEffect(()=>{
    const refs=state0.app.refs
    if(state.cell.mines===0&&!state.cell.mine&&!state.cell.covered){
      states[i-1]&&states[i-1][j-1]&&states[i-1][j-1].cell.covered&&refs[i-1]&&refs[i-1][j-1]&&refs[i-1][j-1].current&&refs[i-1][j-1].current.click()
      states[i-1]&&states[i-1][j]&&states[i-1][j].cell.covered&&refs[i-1]&&refs[i-1][j]&&refs[i-1][j].current&&refs[i-1][j].current.click()
      states[i-1]&&states[i-1][j+1]&&states[i-1][j+1].cell.covered&&refs[i-1]&&refs[i-1][j+1]&&refs[i-1][j+1].current&&refs[i-1][j+1].current.click()
      states[i][j-1]&&states[i][j-1].cell.covered&&refs[i][j-1]&&refs[i][j-1].current&&refs[i][j-1].current.click()
      states[i][j+1]&&states[i][j+1].cell.covered&&refs[i][j+1]&&refs[i][j+1].current&&refs[i][j+1].current.click()
      states[i+1]&&states[i+1][j-1]&&states[i+1][j-1].cell.covered&&refs[i+1]&&refs[i+1][j-1]&&refs[i+1][j-1].current&&refs[i+1][j-1].current.click()
      states[i+1]&&states[i+1][j]&&states[i+1][j].cell.covered&&refs[i+1]&&refs[i+1][j]&&refs[i+1][j].current&&refs[i+1][j].current.click()
      states[i+1]&&states[i+1][j+1]&&states[i+1][j+1].cell.covered&&refs[i+1]&&refs[i+1][j+1]&&refs[i+1][j+1].current&&refs[i+1][j+1].current.click()
    }
  },[state.cell.covered])

  useEffect(()=>{
    if(!state.cell.covered)
    {
      dispatch0({type:'APP_INCREMENTCELLS'})
    }
  },[state.cell.covered])

  useEffect(()=>{
    if(state0.app.mines===state0.app.dim*state0.app.dim-state0.app.cells){
      dispatch0({type:'MESSAGE_WIN'})
      dispatch0({type:'MESSAGE_END'})
    }
  },[state0.app.cells])

  return (
    state.cell.covered?
    <Covered onClick={uncover} ref={uncoverRef}></Covered>:
    (state.cell.mine?<Mine>😢</Mine>:
      <Uncovered>{state.cell.mines===0?'':state.cell.mines}</Uncovered>)
  )
}
