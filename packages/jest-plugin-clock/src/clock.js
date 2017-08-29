// Libraries
import MockDate from 'mockdate';


const clock = {

  /**
   * Gives us the ability to modify time. Accepts any object / string that
   * can be passed to the Date constructor including another javascript
   * Date object.
   */
  set: (date) => {
    beforeEach(() => {
      MockDate.set(new Date(date));
    });

    afterEach(() => {
      MockDate.reset();
    });
  },

};


export default clock;
