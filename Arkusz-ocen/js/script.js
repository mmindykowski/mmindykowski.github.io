const salaries = (event) => {
  let employess = document.querySelectorAll('[id^="pracownik"]');
  // console.log(employess)
  let best = [];
  for (let index = 0; index < employess.length; index++) {
    const element = employess[index];
    let salary = element.querySelector(".stawka").value;
    let time = element.querySelector(".czas").value;
    let backgroundColor = element.querySelector(".pracownik");
    let payment = 0;
    let overtime = 0;
    let bestEmployees = element.querySelector(".pracownik").innerText;

    payment = salary * time;

    if (time > 160) {
      overtime = time - 160;
      best.push({
        pracownik: bestEmployees,
        time: time,
      });

      payment = 2 * salary * overtime + 160 * salary;
      // ranking.innerText += bestEmployees;
      // bestEmployees.innerText = document.getElementById('najlepsi-pracownicy');
      // console.log(ranking);
      // console.log(bestEmployees);
    } else if (time <= 100) {
      backgroundColor.classList.add("redbg");
    }

    // console.log(payment);
    // console.log(element.querySelector('.czas').value);
    element.querySelector(".wyplata").innerText = payment;
  }

  // for (let index = 0; index < best.length; index++) {
  //   const element = best[index];
  //   console.log(element);
  // }

  best.sort((a, b) => {
    return b.time - a.time;
  });

  let ranking = document.getElementById("najlepsi-pracownicy");
  ranking.innerHTML =
    best[0].pracownik +
    "<br/>" +
    best[1].pracownik +
    "<br/>" +
    best[2].pracownik;
  // console.log(best);
};

let btnSumUp = document.getElementById("oblicz");

btnSumUp.onclick = salaries;
