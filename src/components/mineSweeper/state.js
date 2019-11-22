import cell from './cell/state'
import message from './message/state'

const app={
  mines:0,
  cells:0,
  dim:10,
  restart:0,
  level:'easy',
  refs:[[],[],[],[],[],[],[],[],[],[]]
}

export default{
  app,
  cell,
  message
}
