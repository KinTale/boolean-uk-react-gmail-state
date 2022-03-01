import { useState } from 'react'
import Header from './components/header'

import initialEmails from './data/emails'
import './styles/app.css'

function App() {
  //STATE
  const [emails, setEmails] = useState(initialEmails)


  const toggleRead = (email) => {
    setEmails(emails.map(x => x === email ? { ...email, read: !email.read } : x))
  }

  const toggleStar = (email) => {
    setEmails(emails.map(x => x === email ? { ...email, starred: !email.starred } : x))
  }

  const getReadEmails = (email) => {
    setEmails(emails.filter(x => x.read === false))
  }

  console.log(emails)

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
          // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
          // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              //checked={false}
              onChange={(e) => { getReadEmails(e) }}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul >
          {emails.map((email) =>
            <li key={email.id} className={`email ${email.read ? "read" : "unread"}`}>
              <label><input type='checkbox' onChange={(e) => { toggleRead(email) }}></input></label>
              <label><input type='checkbox' className='star-checkbox' onChange={(e) => { toggleStar(email) }}></input></label>

              <span>{email.sender}</span>
              <span className='title'>{email.title}</span>
            </li>
          )}

        </ul>

      </main>
    </div>
  )
}

export default App
