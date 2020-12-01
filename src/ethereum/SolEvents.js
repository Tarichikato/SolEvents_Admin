import { web3 } from "./web3"
import SolEventsABI from "./SolEventsABI"

export function createContract() {
    return new web3.eth.Contract(SolEventsABI, '0x4bb13c38f97a709cb5c4536c931c4c9a4a9ee85d')
    
}