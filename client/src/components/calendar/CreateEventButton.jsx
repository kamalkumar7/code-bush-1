import React from 'react'
import plusImg from "../../assets/plus.svg";
export default function CreateEventButton() {
  return (
    <button>
      <img src={plusImg} alt="create_event" />
      <span>
        Create
      </span>
    </button>
  )
}
