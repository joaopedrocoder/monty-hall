import { useState } from "react";
import Door from "../components/Door/Door";
import Gift from "../components/Gift/Gift";
import DoorModel from "../model/doorModel";

export default function Home() {
  const [door, setDoor] = useState(new DoorModel(1))

  return (
    <div style={{display: 'flex'}}>
      <Door value={door} onChange={(newDoor)=>setDoor(newDoor)}/>
      <h1>{door.isOpen ? 'Aberta' : 'nao aberta'}</h1>
    </div>
  )
}
