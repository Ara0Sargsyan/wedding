import { useEffect, useState } from "react";
import "./app.scss";
import mainPhoto from "./Photos/photo1.png";
import lastPhoto from "./Photos/photo3.png";
import logo1 from "./Photos/num1.png";
import logo2 from "./Photos/num2.png";
import logo3 from "./Photos/num3.png";
import churchPhoto from "./Photos/tegheri-vanq.jpg";
import hallPhoto from "./Photos/lianna-hall.jpeg";

function App() {
  let difference;

  if (+new Date(2025, 8, 12) - +new Date() > -1) {
    difference = +new Date(2025, 8, 12) - +new Date();
  } else {
    difference = 0;
  }

  const defaultLeftTime = {
    օր: Math.floor(difference / (1000 * 60 * 60 * 24)),
    ժամ: Math.floor((difference / (1000 * 60 * 60)) % 24),
    րոպե: Math.floor((difference / 1000 / 60) % 60),
    վարկյան: Math.floor((difference / 1000) % 60),
  };

  const [timeLeft, setTimeLeft] = useState(defaultLeftTime);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(defaultLeftTime);
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div className="time" key={interval}>
        <div className="number">{timeLeft[interval]}</div>
        <div>{interval} </div>
      </div>
    );
  });

  return (
    <div>
      <div className="main-photo">
        <img src={mainPhoto} alt="" />
      </div>
      <div className="container">
        <div className="Foreword-date">
          <span className="names">Հովիկ և Լյուդմիլա</span>
          <div className="line" />
          <div className="Foreword">
            <div className="guestes">Հարգելի Հյուրեր</div>
            <div className="welcomantion">
              Սիրով հրավիրում ենք ձեզ մեր կյանքի կարևորագույն և հիշարժան օրը
              մեզ հետ կիսելու և ուրախ կլինենք եթե այս երջանիկ օրը անցկացնեք
              մեզ հետ նվիրելով ձեր ներկայությունը
            </div>
            <div className="date">
              <span>12 սեպտեմբերի 2025</span>
              <span>Հարսանիքին մնացել է</span>
            </div>
            <div className="timeBoard">{timerComponents}</div>
            <div className="dayPlan">
              <div className="dayPlanH1">Օրվա ծրագիր</div>
              <div className="plan">
                <div className="planItem">
                  <div className="time">14:00</div>
                  <img src={logo2} alt="logo" />
                  <div>
                    <div className="text">Պսակադրություն</div>
                    <div className="subTitle"> Տեղերի վանք</div>
                  </div>
                </div>
                <div className="planItem">
                  <div className="time">16:00</div>
                  <img src={logo1} alt="logo" />
                  <div className="text">Փեսայի տուն</div>
                </div>
                <div className="planItem">
                  <div className="time">17:30</div>
                  <img src={logo3} alt="logo" />
                  <div>
                    <div className="text">Հարսանյաց հանդես</div>
                    <div>Lianna Hall</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mapSubtitle">
              Ստորև տեղադրված քարտեզները ձեզ կoգնեն ավելի արագ գտնել մեր
              միջոցառման վայրերը և միանալ մեզ
            </div>
            <div className="pleaces">
              <div className="church">
                <div className="name">Տեղերի Վանք</div>
                <img src={churchPhoto} alt="ekexeci" />
                <a href="https://yandex.com/maps/org/tegher_monastery/204381722709/?ll=44.237644%2C40.334148&z=14">
                  Ինչպես հասնել
                </a>
              </div>
              <div className="hall">
                <div className="name">Lianna Hall</div>
                <img src={hallPhoto} alt="hall" />
                <a href="https://yandex.com/maps/org/lianna_garden_hall/75872747374/?ll=44.391408%2C40.164666&mode=search&sctx=ZAAAAAgBEAAaKAoSCZoLXB5rHkZAEQwDllzFKkRAEhIJDJQUWABTtj8RfjmzXaEPpj8iBgABAgMEBSgKOABAvboGSAFqAnJ1nQHNzMw9oAEAqAEAvQGK1UW5wgEG1bDmsPkFggId0JzQvtC90LDRgdGC0YvRgNGMINCi0LXQs9C10YCKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=44.391408%2C40.164666&sspn=0.013144%2C0.006511&text=%D0%9C%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C%20%D0%A2%D0%B5%D0%B3%D0%B5%D1%80&z=16.73">
                  Ինչպես հասնել
                </a>
              </div>
            </div>
            <div className="endWord">Սիրով սպասում ենք ձեզ</div>
            <img className="lastPhoto" src={lastPhoto} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
