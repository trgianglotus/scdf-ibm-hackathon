import React from "react";

// reqPF (require pass fail messages/hints)
// validity (is the input valid or invalid)
export const InputBox = (props) => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control has-icons-left has-icons-right">
        <input
          className={`input 
          ${
            props.value &&
            props.reqPF &&
            (props.validity ? "is-success" : "is-danger")
          }
        `}
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.inputHandler}
          value={props.value}
          required
        />
        <span className="icon is-small is-left">
          <i className={`fas fa-${props.icon}`}></i>
        </span>
        {props.validity && props.reqPF && (
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        )}
        {!props.validity && props.reqPF && (
          <React.Fragment>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
            {props.dangerTexts.map((txt, i) => (
              <p key={i} className="help is-danger">
                {txt}
              </p>
            ))}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
