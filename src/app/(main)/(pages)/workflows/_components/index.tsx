import React from 'react'
import Workflow from './workflow'

type Props = {}

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">

    <Workflow description='test workflow' id = '2424f' name ="test" publish = {false}/>

    </section>

    </div>
  )
}

export default Workflows