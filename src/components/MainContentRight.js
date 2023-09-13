import React from 'react'
import "./MainContentRight.css"

export default function MainContentRight() {
  return (
      <div className="main-content-right">
                <div className="code-editor-window"></div>
                <div className="button">
                    <button id="button1">Run</button>
                    <button id="button2">Submit</button>
                </div>
      </div>
  )
}