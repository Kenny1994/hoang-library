import React, {useState} from 'react'

export default function ExampleComponent() {
  const [counter, setCounter] = useState(1)
  return (<h1>hoang co counter la: {counter}</h1>)
}
