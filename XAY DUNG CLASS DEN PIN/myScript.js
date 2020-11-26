function Battery() {
      let energy = 0;
      this.setEnergy = function(value) {
            energy = value;
      };
      this.getEnergy = function() {
            return energy;
      };
      this.decreaseEnergy = function() {
            if (energy > 0) {
                  energy--;
            }
      }
}

function FlashLamp() {
      this.status = false;
      this.battery = {};
      this.setBattery = function(battery) {
            this.battery = battery;
      };
      this.getBatteryInfo = function() {
            return this.battery.getEnergy();
      };
      this.light = function() {
            if (this.status && this.battery.getEnergy() > 0) {
                  alert("Đèn đã sáng");
                  battery.decreaseEnergy();
            } else if (!this.status) {
                  alert("Bạn chưa mở đèn");
            } else if (this.battery.getEnergy() === 0 && this.status) {
                  alert("Đèn đã tắt do hết pin");
                  turnOnOfLamp();
            }
      };
      this.turnOn = function() {
            if(this.getBatteryInfo() > 0) {
                  this.status = true;
            } else {
                  alert("Bạn cần sạc pin, pin hiện tại = 0");
            }
      };
      this.turnOff = function() {
            this.status = false;
      };
}

function turnOnOfLamp() {
      let getBtn = document.getElementsByTagName("button")[0];
      if (getBtn.innerHTML === "Mở đèn pin") {
            flashLamp.turnOn();
            if (flashLamp.status) {
                  getBtn.innerHTML = "Tắt đèn pin";
            };
      } else if (getBtn.innerHTML === "Tắt đèn pin") {
            getBtn.innerHTML = "Mở đèn pin";
            flashLamp.turnOff();
      }
}

function getBatteryInfo() {
      console.log(`Phần trăm pin hiện tại là ${flashLamp.getBatteryInfo()}%`);
}

let battery = new Battery();
let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);