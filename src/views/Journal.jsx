import React from 'react'
import Table from './Journal/tree/Table'
import AddJournal from './Journal/addJournal/AddJournal'
import './css/Journal.css'
import JournalCard from './Journal/cards/JournalCard'

const Journal = () => {
  return (
    <div className="Journal">
      <h1>Journal</h1>
      <JournalCard />
      <AddJournal />
      <Table />
    </div>
  )
}

export default Journal