import React, {useState} from 'react'

function About() {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [estimation, setEstimation] = useState("");
  return (
    <>
      <section className="about">
        <h1 className="heading">Welcome User </h1>
        Task: <input className="input" type="text" value={task} onChange={t => setTask(t.target.value)}/>
        <br></br>
        Time: <input className="input" type="text" value={time} onChange={t => setTime(t.target.value)}/>
        <br></br>
        <input type="submit" className="submit" onClick={t => setEstimation(task +" - "+ time)}/>
        <h4>Entered Data<br></br>{estimation} </h4>
      </section>
    </>
  )
}


export default About;