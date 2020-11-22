import React from "react"
import AnimatedProgressProvider from "../AnimatedProgressProvider "
import "../../../util/util.scss"
import { easeQuadInOut } from "d3-ease"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Circle = ({
  total,
  maxValue,
  name,
  pathColor,
  trailColor,
  textColor,
}) => {
  return (
    <>
      {total >= 0 && (
        <div className="ShowTotal">
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={total}
            duration={0.2}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value)
              return (
                <CircularProgressbar
                  value={roundedValue}
                  maxValue={maxValue}
                  text={`${roundedValue}` + "%"}
                  strokeWidth={6}
                  styles={{
                    root: {
                      height: "6rem",
                      width: "6rem",
                    },
                    path: {
                      stroke: pathColor,
                      strokeLinecap: "butt",
                      transition: "none",
                    },
                    trail: {
                      stroke: trailColor,
                      strokeLinecap: "butt",
                    },
                    text: {
                      fill: textColor,
                      fontSize: "16px",
                      fontWeight: 700,
                    },
                    background: {
                      fill: "#3e98c7",
                    },
                  }}
                />
              )
            }}
          </AnimatedProgressProvider>
          <span
            style={{
              color: textColor,
              fontWeight: "300",
            }}
          >
            {name}
          </span>
        </div>
        // </div>
      )}
    </>
  )
}

export default Circle
