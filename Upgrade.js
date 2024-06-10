import React from 'react'

function Upgrade(props) {
  return (
    <div className='container'>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="col " style={{marginTop:'120px', marginLeft:'100px'}}>
                <div className="card rounded-5 bg-primary" style={{width:'25rem' , height:'35rem'}}>
                    <div className="card-body p-5 text-center text-light">
                        <h1 className=''>{props.planobj.plantype}</h1>
                        <p className='lead'>{props.planobj.money}</p>
                        <h1 className='p-2'>No of Test Monthly : {props.planobj.noOfTests}</h1>
                        <h3 className='p-4'>Test Data Available : {props.planobj.dataAvailable}</h3>
                        <p className='lead'>{props.planobj.mes}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Upgrade