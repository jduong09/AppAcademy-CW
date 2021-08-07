/*
* Use setInterval to build a small clock in your terminal. 
* It should display the current time every second. 
* However, you can only query the system time once. 
* Your clock must store that time, increment it, and display it in HH:MM:SS 
* (use 24hr format).
*/
class Clock {
  constructor() {
    const current_date = new Date();
    this.hour = current_date.getHours(),
    this.minute = current_date.getMinutes(),
    this.second = current_date.getSeconds()

    this.printTime();
    // iterate every 1 second
    const interval = 1000;

    setInterval(this._tick.bind(this), interval);
  }

  printTime() {
    console.log(`${this.hour}:${this.minute}:${this.second}`);
  }

  _tick() {
    //Increment the time by one second
    //Call printTime
    this.incrementSecond();
    this.printTime();
  }

  incrementSecond() {
    this.second += 1;
    if (this.second === 60) {
      this.second = 0;
      this.incrementMinute();
    }
  }

  incrementMinute() {
    this.minute += 1;
    if (this.minute === 60) {
      this.minute = 0;
      this.incrementHour();
    }
  }

  incrementHour() {
    this.hour += 1;
  }

}

const time = new Clock();