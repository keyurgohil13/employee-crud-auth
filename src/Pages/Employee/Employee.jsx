import React from 'react'
import CreateEmp from '../../components/CreateEmployee/CreateEmp'
import EditEmp from '../../components/EditEmployee/EditEmployee'
import ViewEmployee from '../../components/ViewEmployee/ViewEmployee'

function Employee() {
  return (
    <>
        <CreateEmp />
        <ViewEmployee />
        <EditEmp />
    </>
  )
}

export default Employee