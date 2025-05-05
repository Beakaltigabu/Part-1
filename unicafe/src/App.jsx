import { useState } from "react";



const Statistics=(props)=>{

  const good=props.good
  const neutral=props.neutral
  const bad=props.bad
  const total=props.total
  const average=props.average
  const positive=props.positive

  return(
    <div>
      {total===0?(<p>No Feedback Given!</p>):(
      <table>
        <thead>Statisics</thead>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={`${positive} %`} />
      </tbody>
    </table>
      )}
    </div>
  )
}



const Button=({onClick,text})=>{
  return(
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const StatisticLine=({text,value})=>{
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}





const App = () => {
  const [good, setGood]=useState(0)
  const [neutral, setNeutral]=useState(0)
  const [bad, setBad]=useState(0)

  const handleGood=()=>setGood(good +1);
  const handleBad=()=>setBad(bad +1)
  const handleNeutral=()=>setNeutral(neutral +1)


  const total=good +neutral + bad;
  const average=(good*1 + neutral*0 +bad*-1)/total
  const positive= (good/total)*100

  return(
    <div>
      <h3>Give Feedback</h3>
      <div style={{display:'flex', gap:'10px'}}>
        <Button onClick={handleGood} text='Good'/>
        <Button onClick={handleNeutral} text='Neutral'/>
        <Button onClick={handleBad} text='Bad'/>

      </div>
      <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average} positive={positive}/>



    </div>
  )




}


export default App;
