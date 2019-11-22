import combine from '../../redux/combineReducers'
import cell from './cell/reducer'
import message from './message/reducer'

const app=(val={},act)=>{
  var refs
  switch(act.type){
    case'APP_RESTART':
    val={
      ...val,
      restart:val.restart+1,
      cells:0,
      mines:0
    }
    return val
    case'APP_INCREMENTCELLS':
    val={
      ...val,
      cells:val.cells+1
    }
    return val
    case'APP_SETMINES':
    val={
      ...val,
      mines:act.val
    }
    return val
    case'APP_SETLEVEL':
    refs=[]
    for(var i=0;i<act.dim;i++){
      refs.push([])
    }
    val={
      ...val,
      dim:act.dim,
      level:act.level,
      refs
    }
    return val
    case'APP_SETRESTARTREF':
    val={
      ...val,
      restartRef:act.val
    }
    return val
    case'APP_SETCELLREF':
    refs=val.refs.filter(refs=>true)
    refs[act.i][act.j]=act.val
    val={
      ...val,
      refs
    }
    return val
    default:
    return val
  }
}

export default combine({
  app,
  cell,
  message
})
