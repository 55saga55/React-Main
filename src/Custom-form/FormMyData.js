import React, { useState, useEffect } from "react";
import FieldGroup from "./FieldGroup";
import Options from "./Options";
import Field from "./Field";

export default function FormMyData({ formData }) {
  const [page, setPage] = useState(0);

  // state to track the current form data that will be displayed
  const [currentPageData, setCurrentPageData] = useState(formData[page]);

  // track the values of the form fields
  const [values, setValues] = useState({});

  // this effect will run when the `page` changes
  useEffect(() => {
    const upcomingPageData = formData[page];
    setCurrentPageData(upcomingPageData);
    setValues((currentValues) => {
      const newValues = upcomingPageData.fields.reduce((obj, field) => {
        if (field.component === "field_group") {
          for (const subField of field.fields) {
            obj[subField._uid] = "";
          }
        } else {
          obj[field._uid] = "";
        }

        return obj;
      }, {});

      return Object.assign({}, newValues, currentValues);
    });
  }, [page, formData]);

  // callback provided to components to update the main list of form values
  const fieldChanged = (fieldId, value) => {
    // use a callback to find the field in the value list and update it
    setValues((currentValues) => {
      currentValues[fieldId] = value;
      return currentValues;
    });

    // this just fakes that we've updated the `currentPageData` to force a re-render in React
    setCurrentPageData((currentPageData) => {
      return Object.assign({}, currentPageData);
    });
  };

  const navigatePages = (direction) => () => {
    const findNextPage = (page) => {
      const upcomingPageData = formData[page];
      if (upcomingPageData.conditional && upcomingPageData.conditional.field) {
        // we're going to a conditional page, make sure it's the right one
        const segments = upcomingPageData.conditional.field.split("_");
        const fieldId = segments[segments.length - 1];

        const fieldToMatchValue = values[fieldId];

        if (fieldToMatchValue !== upcomingPageData.conditional.value) {
          // if we didn't find a match, try the next page
          return findNextPage(direction === "next" ? page + 1 : page - 1);
        }
      }
      // all tests for the page we want to go to pass, so go to it
      return page;
    };

    setPage(findNextPage(direction === "next" ? page + 1 : page - 1));
  };

  const nextPage = navigatePages("next");
  const prevPage = navigatePages("prev");

  const onSubmit = (e) => {
    e.preventDefault();
    // todo - send data somewhere
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h2>{currentPageData.label}</h2>
        {currentPageData.fields.map((field) => {
          switch (field.component) {
            case "field_group":
              return (
                <div>
                  <FieldGroup
                    key={field._uid}
                    field={field}
                    fieldChanged={fieldChanged}
                    // should probably only slice out the required values, but ¯\_(ツ)_/¯
                    values={values}
                  />
                </div>
              );
            case "options":
              return (
                <Options
                  key={field._uid}
                  field={field}
                  fieldChanged={fieldChanged}
                  value={values[field._uid]}
                />
              );
            default:
              return (
                <Field
                  key={field._uid}
                  field={field}
                  fieldChanged={fieldChanged}
                  value={values[field._uid]}
                />
              );
          }
        })}
        {page > 0 && <button onClick={prevPage}>Back</button>}&nbsp;
        {page < formData.length - 1 && <button onClick={nextPage}>Next</button>}
        <hr />
        <button onClick={() => console.log(values)}>Dump form data</button>
      </form>
    </div>
  );
}
