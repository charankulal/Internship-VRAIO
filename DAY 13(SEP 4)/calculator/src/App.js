import { useReducer } from "react"
import DigitButton from "./Components/DigitButton"
import OperationButton from "./Components/OperationButton"


export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        }
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        }
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      }
    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        }
      }
      if (state.currentOperand == null) return state
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null }
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      }
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      }
      default:
        return state;
  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(prev) || isNaN(current)) return ""
  let computation = ""
  switch (operation) {
    case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "*":
      computation = prev * current
      break
    case "/":
      computation = prev / current
      break
      default:
        return "";
  }

  return computation.toString()
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
})
function formatOperand(operand) {
  if (operand == null) return
  const [integer, decimal] = operand.split(".")
  if (decimal == null) return INTEGER_FORMATTER.format(integer)
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  )

  return (
    <div
      className="container w-25 h-25 bg-light my-5"
      style={{ fontSize: "2.5rem" }}
    >
      <h3 className="text-center"> My Calculator</h3>

     
    <table className="table ">
      <tr>
        <td colSpan="4">
          <div className="col-12 m-2">
            {/* <input
              type="number"
              className="form-control"
              placeholder="Enter numbers"
              value={`${formatOperand(previousOperand)}${operation}${formatOperand(currentOperand)}`}
              readOnly
            /> */}


        <label>
          {formatOperand(previousOperand)} {operation}{formatOperand(currentOperand)}
        </label>
        
     
          </div>
        </td>
      </tr>

      <tr className="py-2">
        <td className="col-3">
        <button
        className="btn btn-outline-danger col-12 m-2"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>
        </td>
        <td className="col-3">
        <button 
        className="btn btn-outline-warning col-12 m-2"
        onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
        DEL
      </button>
        </td>

        <td className="col-3">
          {/* <button
            type="button"
            className="btn btn-outline-secondary col-12 mx-2 my-2"
            id="divide"
            name="/"
            onClick={handleButtonClick}
          >
            /
          </button> */}
          <OperationButton operation="/" dispatch={dispatch} />
            
        </td >
        <td className="col-3">
        <OperationButton operation="*" dispatch={dispatch} />
        </td>
      </tr>

      <tr>
        <td>
        {/* <button
            type="button"
            className="btn btn-outline-secondary col-12 mx-2 my-2"
            id="seven"
            name="7"
            onClick={handleButtonClick}
          >
            7
          </button> */}
          <DigitButton digit="7" dispatch={dispatch} />
        </td>
        <td>
        {/* <button
            type="button"
            className="btn btn-outline-secondary col-12 mx-2 my-2"
            id="eight"
            name="8"
            onClick={handleButtonClick}
          >
            8
          </button> */}
          <DigitButton digit="8" dispatch={dispatch} />
        </td>
        <td>
        <DigitButton digit="9" dispatch={dispatch} />
        </td>
        <td>
        <OperationButton operation="-" dispatch={dispatch} />

        </td>
      </tr>

      <tr>
        <td>
        <DigitButton digit="4" dispatch={dispatch} />

        </td>
        <td>
        <DigitButton digit="5" dispatch={dispatch} />

        </td>
        <td>
        <DigitButton digit="6" dispatch={dispatch} />

        </td>
        <td>
        <OperationButton operation="+" dispatch={dispatch} />

        </td>
      </tr>

      <tr>
        <td>
        <DigitButton digit="1" dispatch={dispatch} />

        </td>
        <td>
        <DigitButton digit="2" dispatch={dispatch} />

        </td>
        <td>
        <DigitButton digit="3" dispatch={dispatch} />

        </td>

        <td rowSpan="2">
        <button
        className="btn btn-outline-success col-12 m-2"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        style={{height:"120px"}}
      >
        =
      </button>
        </td>
      </tr>

      <tr>
        <td colSpan="2">
        <DigitButton digit="0" dispatch={dispatch} />
        </td>
        <td>
        <DigitButton digit="." dispatch={dispatch} />
        </td>
      </tr>
    </table>



    </div>




    
  )
}

export default App