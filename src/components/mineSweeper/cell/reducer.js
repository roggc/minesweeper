export default(val={},act)=>{
  switch(act.type){
    case 'CELL_UNCOVER':
    val={
      ...val,
      covered:false
    }
    return val
    case 'CELL_SETMINE':
    val={
      ...val,
      mine:act.val
    }
    return val
    case 'CELL_SETMINES':
    val={
      ...val,
      mines:act.val
    }
    return val
    case 'CELL_RESTART':
    val={
      ...val,
      covered:true,
      mine:false,
      mines:0
    }
    return val
    default:
    return val
  }
}
