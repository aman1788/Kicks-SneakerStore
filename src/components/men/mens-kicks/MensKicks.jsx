import "./MensKicks.css";
import KicksGrid from "../../home/kicks-grid/KicksGrid";
import KicksCard from "../../home/kicks-grid/kicks-card/KicksCard";

import { mensShoes, sportsShoes, blackWhiteShoes } from "../../../KicksData";
import { useState } from "react";

const MensKicks = () => {
  const [filtered, setFiltered] = useState(false);

  const [price, setPrice] = useState("");

  const [gender, setGender] = useState("");

  const sizes = [
    3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
  ];

  const [selectedSize, setSelectedSize] = useState(0);

  const kicks = [...mensShoes, ...sportsShoes, ...blackWhiteShoes];

  let filteredKicks = [];

  const handlePriceChange = (price) => {
    setPrice(price);
    setFiltered(true);
  };

  const handleGenderChange = (gender) => {
    setGender(gender);
    setFiltered(true);
  };

  const filterPrice = () => {
    let priceFilteredKicks = [];

    if (price === "100-119") {
      for (let i = 0; i < kicks.length; i++) {
        if (kicks[i].price >= 100 && kicks[i].price <= 119) {
          priceFilteredKicks.push(kicks[i]);
        }
      }
      // console.log(priceFilteredKicks)
    } else if (price === "120-139") {
      for (let i = 0; i < kicks.length; i++) {
        if (kicks[i].price >= 120 && kicks[i].price <= 139) {
          priceFilteredKicks.push(kicks[i]);
        }
      }
    } else if (price === "140-159") {
      for (let i = 0; i < kicks.length; i++) {
        if (kicks[i].price >= 140 && kicks[i].price <= 159) {
          priceFilteredKicks.push(kicks[i]);
        }
      }
    } else {
      for (let i = 0; i < kicks.length; i++) {
        if (kicks[i].price >= 160) {
          priceFilteredKicks.push(kicks[i]);
        }
      }
    }

    if (priceFilteredKicks.length !== 0) {
      filteredKicks = [...priceFilteredKicks];
    }
    // console.log(filteredKicks)
  };

  const filterGender = (gender) => {
    if (gender === "") {
      return;
    } else if (gender === "male") {
      filteredKicks = [...mensShoes];
      // console.log("male")
      // console.log(filteredKicks)
    } else {
      filteredKicks = [...sportsShoes];
      // console.log("female")
      // console.log(filteredKicks)
    }
  };

  const filterSize = () => {
    // let sizeFilteredKicks = []

    if (selectedSize === 0) {
      return;
    }

    // if (filteredKicks.length === 0) {
    //   {
    //     kicks.map((kick) => {
    //       if (kick.size === selectedSize) {
    //         filteredKicks.push(kick)
    //       }
    //       return null
    //     })
    //   }
    // } else {
    //   {
    //     filteredKicks.map((kick) => {
    //       if (kick.size === selectedSize) {
    //         sizeFilteredKicks.push(kick)
    //       }
    //       return null
    //     })
    //     filteredKicks = [...sizeFilteredKicks]
    //   }
    // }

    kicks.map((kick) => {
      if (kick.size === selectedSize) {
        filteredKicks.push(kick);
      }
      return null;
    });
  };

  const filterProducts = () => {
    filterPrice();
    filterGender(gender);
    filterSize();
  };

  const clearFilters = () => {
    setPrice("");
    setGender("");
    setSelectedSize(0);
    setFiltered(false);
  };

  return (
    <div className="shoes-grid">
      <div className="filter">
        <h2>Filter</h2>
        <hr />

        {/* price */}
        <div className="filters">
          <h3>Price</h3>

          <div>
            <input
              type="checkbox"
              name=""
              id=""
              className="checkbox"
              checked={price === "100-119"}
              onChange={() => handlePriceChange("100-119")}
            />
            <h4>100 - 119</h4>
          </div>
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              className="checkbox"
              checked={price === "120-139"}
              onChange={() => handlePriceChange("120-139")}
            />
            <h4>120 - 139</h4>
          </div>
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              className="checkbox"
              checked={price === "140-159"}
              onChange={() => handlePriceChange("140-159")}
            />
            <h4>140 - 159</h4>
          </div>
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              className="checkbox"
              checked={price === "160-200"}
              onChange={() => handlePriceChange("160-200")}
            />
            <h4>160 - 200</h4>
          </div>
        </div>

        {/* gender */}
        <div className="filters">
          <h3>Gender</h3>

          <div>
            <input
              type="checkbox"
              name="maleCheckbox"
              id="maleCheckbox"
              className="checkbox"
              checked={gender === "male"}
              onChange={() => handleGenderChange("male")}
            />
            <h4>Male</h4>
          </div>
          <div>
            <input
              type="checkbox"
              name="femaleCheckbox"
              id="femaleCheckbox"
              className="checkbox"
              checked={gender === "female"}
              onChange={() => handleGenderChange("female")}
            />
            <h4>Female</h4>
          </div>
        </div>

        {/* sizes */}
        <div className="filters">
          <h3>Sizes</h3>

          <div className="sizes">
            {sizes.map((size) => {
              return (
                <h6
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    setFiltered(true);
                  }}
                  className={size === selectedSize ? "selected-size" : ""}
                >
                  {size}
                </h6>
              );
            })}
          </div>
        </div>

        {/* filter clear button */}
        <button className="clear-filters-btn" onClick={() => clearFilters()}>
          {" "}
          CLEAR FILTERS{" "}
        </button>
      </div>

      {/* <div className="grid">
        {selectedSize === 0 ? (
          <KicksGrid kicks={mensShoes} />

        ) : (
          <div className="kicks-cards">
            {kicks.map((kick) => {
              if (kick.size === selectedSize) {
                return < KicksCard key={kick.id} {...kick} />
              }
              return null
            })}
          </div>
        )}
      </div> */}

      <div className="grid">
        {filtered ? (
          <>
            {filterProducts()}
            <div className="kicks-cards">
              {filteredKicks.map((kick) => {
                return <KicksCard key={kick.id} {...kick} />;
              })}
            </div>
          </>
        ) : (
          <KicksGrid kicks={mensShoes} />
        )}
      </div>
    </div>
  );
};

export default MensKicks;
