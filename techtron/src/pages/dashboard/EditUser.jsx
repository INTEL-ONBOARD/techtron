import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function EditUser() {

    const { id } = useParams();
    
  return (
    <div>Editing user for: {id}</div>
  )
}

export default EditUser