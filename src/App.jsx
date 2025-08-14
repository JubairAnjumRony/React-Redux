import { useState } from 'react'
import Counter from './components/Counter'
import Stats from './components/Stats'

 const initilalcounters =[
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  }
 ]
function App() {
  const [counters, setCounters] = useState(initilalcounters)
  const totalCount = counters.reduce((sum,current)=>sum+current.value,0)

  const handleIncrement= (counterId) =>{
      const upadatedCounters = counters.map(counter=>{
      if(counter.id === counterId){
        return{
          ...counter,
          value:counter.value +1
        }
      }
      return counter
    })
    setCounters(upadatedCounters)
  }
  const handleDecrement=(counterId)=>{
    const updatedCounters = counters.map(counter=>{
      if(counter.id === counterId){
        return{
          ...counter,
          value:counter.value -1
        }
      }
      return counter
    })
     setCounters(updatedCounters)
    
  }

  return (
    <>
   {
    counters.map((counter)=>(<Counter key={counter.id}
    onIncrement ={()=> handleIncrement(counter.id)}
    onDecrement = {()=>handleDecrement(counter.id)}
    counters ={counter.value}/>))}

     <Stats totalCount={totalCount}></Stats>
    </>
  )
}

export default App
