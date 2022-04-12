import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {



    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(5000)
    
    const IncrementAge = useCallback(() => {
        setAge(age+1)
    },[age])

    const IncrementSalary = useCallback(() => {
      setSalary(salary + 1000);
    }, [salary]);
    

  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={IncrementAge}>Increment Age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick ={IncrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent