import React from 'react'
import "./Users.css"

import { useSelector, useDispatch } from 'react-redux';

import {
  Data,
} from '../../features/counter/counterSlice';

export default function Users() {

  const data = useSelector(Data);

  return (
    <div className="users">

      <div className="tabpanel" role="tabpanel">
        <div className="panel-coloumn mt-3">
          <div className="list-group" id="myList" role="tablist">

            {
              data.map((item, ind) => {
                return <a className="list-group-item list-group-item-action" data-bs-toggle="list" href={"#target" + ind} role="tab">{item.name}</a>
              })
            }

          </div>
        </div>

        <div className="tab-content">

          {
            data.map((item, ind) => {

              return <div className="tab-pane" id={"target" + ind} role="tabpanel" key={ind}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Name: {item.name}</li>
                  <li className="list-group-item">Email: {item.email}</li>
                  <li className="list-group-item">Password: {item.password}</li>
                  <li className="list-group-item">Occupation: {item.occupation}</li>
                </ul>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}
