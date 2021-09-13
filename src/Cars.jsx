// src/Cars.jsx

import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './redux/index'

function Cars() {
  return (
    <MyContext.Consumer >
      {
        ({car:{yellow,outro,red},handleSetValue}) => {
          // console.log(yellow)
          return(
            <>
            <div>
            <img
              className={yellow ? 'car-right' : 'car-left'}
              src={carYellow}
              alt="yellow car"
            />
            <button
              id="yellow"
              onClick={(e) => handleSetValue(e.target)}
              type="button"
            >
              Move
            </button>
          </div>
          <div>
        <img
          className={outro ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          id="outro"
          onClick={(e) => handleSetValue(e.target)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
      <img
          className={red ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          type="button"
          id="red"
          onClick={(e) => handleSetValue(e.target)}
        >
          Move
        </button>
      </div>
          </>
          )
        }
      }
    </MyContext.Consumer>
  );
}

// Cars.propTypes = {
//   moveCar: PropTypes.func.isRequired,
//   blueCar: PropTypes.bool.isRequired,
//   redCar: PropTypes.bool.isRequired,
//   yellowCar: PropTypes.bool.isRequired,
// };

// const mapStateToProps = (state) => ({
//   redCar: state.cars.red,
//   blueCar: state.cars.blue,
//   yellowCar: state.cars.yellow});

// const mapDispatchToProps = { moveCar };
      /* <div>
        <img
          className={redCar ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => moveCar('red', !redCar)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={blueCar ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => moveCar('blue', !blueCar)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={yellowCar ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => moveCar('yellow', !yellowCar)}
          type="button"
        >
          Move
        </button>
      </div> */

export default Cars;
