import React from 'react'
import s from 'styled-components'
import {MineSweeper} from '../mineSweeper/mineSweeper'

const AppBorder=s.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100%;
`

export function App(){
  return (
    <AppBorder>
    <MineSweeper/>
    </AppBorder>
  )
}
