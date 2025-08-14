// import { useState } from 'react'
import { useSelector } from 'react-redux';
import Counter from './components/Counter'
import Stats from './components/Stats'
import { useDispatch } from 'react-redux';
import { decrement, increment } from './features/Counters/CounterSlice';

//  const initilalcounters =[
//   {
//     id: 1,
//     value: 0,
//   },
//   {
//     id: 2,
//     value: 0,
//   }
//  ]


function App() {
  const counters = useSelector((state) =>state.counters);
  const dispatch = useDispatch()
  // const [counters, setCounters] = useState(initilalcounters)
  const totalCount = counters.reduce((sum,current)=>sum+current.value,0)

  const handleIncrement= (counterId) =>{
    //   const upadatedCounters = counters.map(counter=>{
    //   if(counter.id === counterId){
    //     return{
    //       ...counter,
    //       value:counter.value +1
    //     }
    //   }
    //   return counter
    // })
    // setCounters(upadatedCounters)
    dispatch(increment(counterId))
  }
  const handleDecrement=(counterId)=>{
    // const updatedCounters = counters.map(counter=>{
    //   if(counter.id === counterId){
    //     return{
    //       ...counter,
    //       value:counter.value -1
    //     }
    //   }
    //   return counter
    // })
    //  setCounters(updatedCounters)
    dispatch(decrement(counterId));
    
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
