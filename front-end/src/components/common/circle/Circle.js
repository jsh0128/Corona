import React from "react"
import AnimatedProgressProvider from "../AnimatedProgressProvider "
import { easeQuadInOut } from "d3-ease"

import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Circle = ({ total }) => {
  return (
    <>
      {total >= 0 && (
        <div className="ShowTotal">
          <div className="ShowTotal-Header">
            {/* <img src={barChart} alt={barChart} /> */}
            <p className="ShowTotal-Header-Title">전체 커밋 수</p>
          </div>
          <div className="ShowTotal-Header-ProgressBar">
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={total}
              duration={1.4}
              easingFunction={easeQuadInOut}
            >
              {(value) => {
                const roundedValue = Math.round(value)
                return (
                  <CircularProgressbar
                    value={roundedValue}
                    maxValue={1000}
                    text={`${roundedValue}`}
                    strokeWidth={6}
                    styles={{
                      root: {
                        height: "6rem",
                        width: "6rem",
                      },
                      path: {
                        stroke: "#191b1d",
                        strokeLinecap: "butt",
                        transition: "none",
                      },
                      trail: {
                        stroke: "#999A9B",
                        strokeLinecap: "butt",
                      },
                      text: {
                        fill: "#191b1d",
                        fontSize: "16px",
                        fontWeight: 500,
                      },
                      background: {
                        fill: "#3e98c7",
                      },
                    }}
                  />
                )
              }}
            </AnimatedProgressProvider>
          </div>
        </div>
      )}
    </>
  )
}

export default Circle
