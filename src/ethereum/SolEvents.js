import { web3 } from "./web3"
import SolEventsABI from "./SolEventsABI"

export function createContract() {
    return new web3.eth.Contract(SolEventsABI, '0xa017386180c9e9d0e53e2cb8741da8a7f7d54288')
    
}