type agentRegister = {
  fullname: string,
  email: string,
  password: string,
  department?: string
  };


type agentLogin = {
  email: string,
  password: string,
}

type conversation = {
  client_id : string,
  agent_id : string,
  duration: string,
  is_closed: boolean

}

  export {agentRegister, agentLogin, conversation}