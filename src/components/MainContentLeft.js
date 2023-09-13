import React from 'react'
import "./MainContentLeft.css"

export default function MainContentLeft() {
  return (
    <>
    <div className="main-content-left">
                <div className="question-header">
                    <span>1. Palindrome Number</span>
                    <span>Easy</span>
                </div>

                <div className="question-body">
                    <div className="question-description">
                        <p>Given an integer <code>x</code>, return <code>true</code> <em>if</em> <code>x</code> <em>is a
                            </em> <strong>palindrome</strong>, <em>and</em> <code>false</code> <em>otherwise</em>.</p>
                        <p>&nbsp;</p>
                        <p>
                            <strong>Example 1:</strong>
                            <br/><br/>
                        </p>

                        <p>
                        <p><strong>Input:</strong>x=121</p>
                        <p><strong>Output:</strong>true</p>
                        <p><strong>Explanation:</strong>121 reads as 121 from left to right and from right to left.</p>
                        </p>
                        <br/><br/>
                        <p>
                            <strong>Example 2:</strong>
                            <br/><br/>
                        </p>

                        <p>
                        <p><strong>Input:</strong>x=-121</p>
                        <p><strong>Output:</strong>false</p>
                        <p><strong>Explanation:</strong>From left to right, it reads -121. From right to left, it
                            becomes 121-. Therefore it is not a palindrome.</p>
                        </p>
                        <br/><br/>
                        <p>
                            <strong>Example 3:</strong>
                            <br/><br/>
                        </p>

                        <p>
                        <p><strong>Input:</strong>x=10</p>
                        <p><strong>Output:</strong>false</p>
                        <p><strong>Explanation:</strong>Reads 01 from right to left. Therefore it is not a palindrome.
                        </p>
                        </p>
                        <br/><br/>
                        <p>
                            <strong>Constraints:</strong>
                        <ul>
                            <code>-2 <sup>31</sup>&nbsp; &lt = x &lt = 2 <sup>31</sup>&nbsp; -1</code>
                        </ul>
                        </p>

                    </div>
                </div>
            </div>
    </>
  )
}