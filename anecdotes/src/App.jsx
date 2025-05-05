import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)


  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))
  const [mostVotes, setMostVotes] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)



  const handleVote = () => {
    voteAnecdote()
  }


  const voteAnecdote = () => {
    const copy=[...vote]
    copy[selected] += 1
    setVote(copy)
    if (copy[selected] > mostVotes) {
      setMostVotes(copy[selected])
      setMostVoted(anecdotes[selected])
    }
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>

      {anecdotes[selected]} <br />
      <button onClick={handleVote}>Vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>
        Next anecdote
      </button>
      <h2>Anecdote with most votes</h2>
      {mostVotes === 0 ? (
        <div>No votes yet</div>
      ) : (
        <div>
          {mostVoted} <br />
          has {mostVotes} votes
        </div>
      )}

    </div>
  )
}

export default App
