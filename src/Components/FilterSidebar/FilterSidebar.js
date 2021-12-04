import React from "react";
import "./FilterSidebar.css";
import { Form, Button } from "react-bootstrap";
import UseCustomContext from "../../Hooks/UseCustomContext";
const FilterSidebar = () => {
  const {
    sortByInclude,
    sortByPrice,
    sortBySize,
    sortByBrand,
    DispatchFilteredState,
  } = UseCustomContext();
  console.log("CURRENT STATE", sortByInclude);
  console.log("CURRENT SIZE ", sortBySize);
  console.log("CURRENT BRAND ", sortByBrand);
  return (
    <div className="fiterSidebar__section">
      <h1 className="filterSidebar__title">Filter Products</h1>
      <hr />
      <div className="filter filtered__byPrice">
        <label name="group1" style={{ padding: "0", fontWeight: "700" }}>
          Price -{" "}
        </label>
        <span>
          <Form.Check
            inline
            label="Low To High"
            name="group1"
            type="radio"
            id={`inline-1`}
            onChange={(event) => {
              DispatchFilteredState({
                type: "SORT_BY_PRICE",
                payload: "LowToHigh",
              });
            }}
            checked={sortByPrice === "LowToHigh" ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="High To Low"
            name="group1"
            type="radio"
            id={`inline-2`}
            onChange={(event) => {
              DispatchFilteredState({
                type: "SORT_BY_PRICE",
                payload: "HighToLow",
              });
            }}
            checked={sortByPrice === "HighToLow" ? true : false}
          />
        </span>
      </div>

      <div className="filter filtered_byInclude">
        <label name="group2" style={{ padding: "0", fontWeight: "700" }}>
          Include -{" "}
        </label>
        <span>
          <Form.Check
            inline
            label="Men"
            name="group2"
            type="checkbox"
            id={`inline-1`}
            onChange={(event) => {
              // console.log("CHECKED...", event.target.checked);
              if (!event.target.checked) {
                DispatchFilteredState({
                  type: "REMOVE_SORT_BY_INCLUDE",
                  payload: "Men",
                });
                return;
              }
              // console.log(event.target.label);
              DispatchFilteredState({
                type: "SORT_BY_INCLUDE",
                payload: `Men`,
              });
            }}
            checked={sortByInclude.includes("Men") ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Women"
            name="group2"
            type="checkbox"
            id={`inline-2`}
            onChange={(event) => {
              // console.log("CHECKED...", event.target.checked);
              if (!event.target.checked) {
                DispatchFilteredState({
                  type: "REMOVE_SORT_BY_INCLUDE",
                  payload: "Women",
                });
              } else {
                DispatchFilteredState({
                  type: "SORT_BY_INCLUDE",
                  payload: "Women",
                });
              }
            }}
            checked={sortByInclude.includes("Women") ? true : false}
          />
        </span>
      </div>
      <div className="filter filtered__bySize">
        <label name="group3" style={{ padding: "0", fontWeight: "700" }}>
          Sizes -{" "}
        </label>
        <span>
          <Form.Check
            inline
            label="S"
            name="group3"
            type="checkbox"
            id={`inline-3`}
            onChange={(event) => {
              if (!event.target.checked) {
                DispatchFilteredState({
                  type: "REMOVE_SORT_BY_SIZE",
                  payload: "S",
                });
              } else {
                DispatchFilteredState({
                  type: "SORT_BY_SIZE",
                  payload: "S",
                });
              }
            }}
            checked={sortBySize.includes("S") ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="M"
            name="group3"
            type="checkbox"
            id={`inline-4`}
            onChange={(event) => {
              if (!event.target.checked) {
                DispatchFilteredState({
                  type: "REMOVE_SORT_BY_SIZE",
                  payload: "M",
                });
              } else {
                DispatchFilteredState({
                  type: "SORT_BY_SIZE",
                  payload: "M",
                });
              }
            }}
            checked={sortBySize.includes("M") ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="XL"
            name="group3"
            type="checkbox"
            id={`inline-3`}
            onChange={(event) => {
              if (!event.target.checked) {
                DispatchFilteredState({
                  type: "REMOVE_SORT_BY_SIZE",
                  payload: "XL",
                });
              } else {
                DispatchFilteredState({
                  type: "SORT_BY_SIZE",
                  payload: "XL",
                });
              }
            }}
            checked={sortBySize.includes("XL") ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="XXL"
            name="group3"
            type="checkbox"
            id={`inline-4`}
            onChange={(event) => {
              if (!event.target.checked) {
                DispatchFilteredState({
                  type: "REMOVE_SORT_BY_SIZE",
                  payload: "XXL",
                });
              } else {
                DispatchFilteredState({
                  type: "SORT_BY_SIZE",
                  payload: "XXL",
                });
              }
            }}
            checked={sortBySize.includes("XXL") ? true : false}
          />
        </span>
      </div>

      <div className="filter filtered__brand">
        <label name="group3" style={{ padding: "0", fontWeight: "700" }}>
          Brands -{" "}
        </label>
        <span>
          <Form.Check
            inline
            label="Bata"
            name="group3"
            type="checkbox"
            id={`inline-3`}
            onChange={(event) => {
              if (!event.target.checked) {
                DispatchFilteredState({
                  type: "REMOVE_SORT_BY_BRAND",
                  payload: "Bata",
                });
              } else {
                DispatchFilteredState({
                  type: "SORT_BY_BRAND",
                  payload: "Bata",
                });
              }
            }}
            checked={sortByBrand.includes("Bata") ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="FlyMachine"
            name="group3"
            type="checkbox"
            id={`inline-4`}
            onChange={(event) => {
              if (!event.target.checked) {
                DispatchFilteredState({
                  type: "REMOVE_SORT_BY_BRAND",
                  payload: "FlyMachine",
                });
              } else {
                DispatchFilteredState({
                  type: "SORT_BY_BRAND",
                  payload: "FlyMachine",
                });
              }
            }}
            checked={sortByBrand.includes("FlyMachine") ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Nike"
            name="group3"
            type="checkbox"
            id={`inline-3`}
            onChange={(event) => {
              if (!event.target.checked) {
                DispatchFilteredState({
                  type: "REMOVE_SORT_BY_BRAND",
                  payload: "Nike",
                });
              } else {
                DispatchFilteredState({
                  type: "SORT_BY_BRAND",
                  payload: "Nike",
                });
              }
            }}
            checked={sortByBrand.includes("Nike") ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Sony"
            name="group3"
            type="checkbox"
            id={`inline-3`}
            onChange={(event) => {
              if (!event.target.checked) {
                DispatchFilteredState({
                  type: "REMOVE_SORT_BY_BRAND",
                  payload: "Sony",
                });
              } else {
                DispatchFilteredState({
                  type: "SORT_BY_BRAND",
                  payload: "Sony",
                });
              }
            }}
            checked={sortByBrand.includes("Sony") ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Zara"
            name="group3"
            type="checkbox"
            id={`inline-4`}
            onChange={(event) => {
              if (!event.target.checked) {
                DispatchFilteredState({
                  type: "REMOVE_SORT_BY_BRAND",
                  payload: "Zara",
                });
              } else {
                DispatchFilteredState({
                  type: "SORT_BY_BRAND",
                  payload: "Zara",
                });
              }
            }}
            checked={sortByBrand.includes("Zara") ? true : false}
          />
        </span>
      </div>

      {/* <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          style={{ cursor: "pointer" }}
          onClick={(idx, event) => {
            //console.log("SIDEBAR => ", event);
            // setRating(idx + 1);
            dispatchFilter({
              type: "FILTER_BY_RATING",
              payload: idx + 1,
            });
          }}
        />
      </span> */}
      <Button
        variant="light"
        onClick={() =>
          DispatchFilteredState({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default FilterSidebar;
