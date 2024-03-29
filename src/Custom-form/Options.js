import React, { Fragment } from "react";

export default function Options({ field, fieldChanged, value }) {
  return (
    <div>
      <h3>{field.label}</h3>
      {field.options.map((option, index) => {
        return (
          <Fragment key={option.value}>
            <label htmlFor={option.value}>
              <input
                type="radio"
                id={option.value}
                name={field._uid}
                value={option.value}
                checked={value === option.value}
                className="mx-2"
                onChange={(e) => {
                  fieldChanged(field._uid, e.target.value);
                }}
              />
              {option.label}
            </label>
            {index < field.options.length - 1 && <br />}
          </Fragment>
        );
      })}
    </div>
  );
}
