
import React from "react";
import skills from './data1.json';

class Example1 extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <>
            {skills.Skills.map(sets => {
                return(
                    <>
                    <h1>{sets.Area}</h1>
                    {
                        sets.SkillSet.map(here => {
                            console.log(here)
                            return(
                                <>
                                <h5>{here.Name}</h5>
                                </>
                            )
                        })

                        
                    }
                    </>
                )
            })}
            </>
        )
    }
}

export default Example1