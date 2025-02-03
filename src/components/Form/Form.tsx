import React from 'react'

export const Form = () => {
  return (
    <div>
        <div className="mb-3"><label htmlFor="name" className="form-label">Name</label>
            <input id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label"></label>
            <input type="number" className="form-control" />
            </div>
    </div>
  )
}
