import React from 'react'
import Upgrade from './Upgrade'
function UpgradeList() {
    let plan=[{
        plantype:'BASIC PLAN',
        money:'Rs 99',
        noOfTests:5,
        dataAvailable:'02 months',
        mes:'Automatic Email to student'

    },{
        plantype:'EXTENDED PLAN',
        money:'Rs 199',
        noOfTests:15,
        dataAvailable:'06 months',
        mes:'Automatic Email to student'
    },{
        plantype:'SUPER SAVER PLAN',
        money:'Rs 299',
        noOfTests:'Unlimited',
        dataAvailable:'1 year',
        mes:'Automatic Email to student'
    }]
  return (
    <div>
        <h1 className='text-center text-light bg-primary border'>Yearly Plan</h1>
        <div className='d-flex justify-content-around'>
        <Upgrade planobj={plan[0]}/>
        <Upgrade planobj={plan[1]}/>
        <Upgrade planobj={plan[2]}/>
        </div>
    </div>
  )
}

export default UpgradeList