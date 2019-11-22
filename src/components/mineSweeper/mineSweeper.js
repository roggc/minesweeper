import React,{useReducer,useEffect} from 'react'
import s from 'styled-components'
import iState from './state'
import reducer from './reducer'
import {Cell} from './cell/cell'
import {Message} from './message/message'
import {Button} from './button/button'

const MineSweeperBorder=s.div`
font-family:sans-serif;
float:left;
border:1px solid black;
border-radius:3px;
padding:6px;
margin:5px;
`
const CellRow=s.div`
overflow:hidden;
`
const RowCenter=s.div`
display:flex;
justify-content:center;
`
const Div=s.div`
float:left;
margin:5px;
`
const SetLevel=s.div`
float:left;
border-radius:3px;
border:1px solid black;
margin:5px;
margin-left:10px;
padding:5px;
button{
  border-radius:3px;
  padding:5px;
  cursor:pointer;
  outline:none;
  box-shadow:0 0 2px;
  font-size:1.9em;
  color:grey;
  background-color:ghostwhite;
}
div{
  margin:5px;
  margin-bottom:10px;
}
`

export function MineSweeper(){

  const[state0,dispatch0]=useReducer(reducer,iState)

  useEffect(()=>{
    for(var i=0;i<dim;i++){
      for(var j=0;j<dim;j++){
        dispatches[i][j]({type:'CELL_SETMINE',val:mines[i][j]})
        var num=0
        mines[i-1]&&mines[i-1][j-1]&&mines[i-1][j-1]&&num++
        mines[i-1]&&mines[i-1][j]&&mines[i-1][j]&&num++
        mines[i-1]&&mines[i-1][j+1]&&mines[i-1][j+1]&&num++
        mines[i][j-1]&&mines[i][j-1]&&num++
        mines[i][j+1]&&mines[i][j+1]&&num++
        mines[i+1]&&mines[i+1][j-1]&&mines[i+1][j-1]&&num++
        mines[i+1]&&mines[i+1][j]&&mines[i+1][j]&&num++
        mines[i+1]&&mines[i+1][j+1]&&mines[i+1][j+1]&&num++
        dispatches[i][j]({type:'CELL_SETMINES',val:num})
      }
    }
    dispatch0({type:'APP_SETMINES',val:totalMines})
  },[state0.app.restart])

  const dim=state0.app.dim

  const states=new Array(dim)
  for(var i=0;i<dim;i++){
    states[i]=new Array(dim)
  }

  const dispatches=new Array(dim)
  for(var i=0;i<dim;i++){
    dispatches[i]=new Array(dim)
  }

  for(var i=0;i<dim;i++){
    for(var j=0;j<dim;j++){
      const [state,dispatch]=useReducer(reducer,iState)
      states[i][j]=state
      dispatches[i][j]=dispatch
    }
  }

  if(state0.app.level==='easy'){
    for(var i=0;i<dim;i++){
      for(var j=0;j<dim;j++){
        useReducer(reducer,iState)
      }
    }
    for(var i=0;i<dim;i++){
      for(var j=0;j<dim;j++){
        useReducer(reducer,iState)
      }
    }
    for(var i=0;i<dim;i++){
      for(var j=0;j<dim;j++){
        useReducer(reducer,iState)
      }
    }
  }

  const cells=new Array(dim)
  for(var i=0;i<dim;i++){
    cells[i]=new Array(dim)
  }

  const cellsToRender=new Array(dim)
  for(var i=0;i<dim;i++){
    cellsToRender[i]=new Array(dim)
  }

  const mines= new Array(dim)
  for(var i=0;i<dim;i++){
    mines[i]=new Array(dim)
  }

  var totalMines
  const setMines=()=>{
    totalMines=0
    for(var i=0;i<dim;i++){
      for(var j=0;j<dim;j++){
        mines[i][j]=Math.random()>=.85
        if(mines[i][j]){
          totalMines++
        }
      }
    }
  }

  for(var i=0;i<dim;i++){
    for(var j=0;j<dim;j++){
      cellsToRender[i][j]=<Cell key={i+'-'+j+'-'+state0.app.level} states={states}
      dispatches={dispatches} state0={state0} dispatch0={dispatch0} i={i} j={j}/>
    }
  }

  setMines()

  function setEasy(){
    if(state0.app.level!=='easy'){
      state0.app.restartRef.current.click()
      dispatch0({type:'APP_SETLEVEL',dim:10,level:'easy'})
    }
  }

  function setHard(){
    if(state0.app.level==='easy'){
      state0.app.restartRef.current.click()
      dispatch0({type:'APP_SETLEVEL',dim:20,level:'hard'})
    }
  }

  return (
    <Div>
    <MineSweeperBorder>
    {cellsToRender.map((cells,i)=><RowCenter key={i}><CellRow>{cells}</CellRow></RowCenter>)}
    <RowCenter><Message state={state0} dispatch={dispatch0}/></RowCenter>
    <RowCenter><Button dispatches={dispatches} dispatch0={dispatch0}/></RowCenter>
    </MineSweeperBorder>
    <SetLevel>
    <div><button onClick={setEasy}>Easy</button></div>
    <div><button onClick={setHard}>Hard</button></div>
    </SetLevel>
    </Div>
  )
}
