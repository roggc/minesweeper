export default(val={},act)=>{
  switch(act.type){
    case 'MESSAGE_RESTART':
    val={
      ...val,
      end:false,
      win:false,
      loose:false
    }
    return val
    case 'MESSAGE_END':
    val={
      ...val,
      end:true
    }
    return val
    case 'MESSAGE_WIN':
    val={
      ...val,
      win:true
    }
    return val
    case 'MESSAGE_WINOFF':
    val={
      ...val,
      win:false
    }
    return val
    case 'MESSAGE_LOOSE':
    val={
      ...val,
      loose:true
    }
    return val
    default:
    return val
  }
}
