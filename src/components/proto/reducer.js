export default(val={},act)=>{
  switch(act.type){
    case 'PROTO_':
    val={
      ...val,
    }
    return val
    default:
    return val
  }
}
