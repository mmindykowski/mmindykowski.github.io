const averrage = (event) => {
    let students = document.querySelectorAll('[id^="uczen"]');
    // console.log(students);
  
    for (let index = 0; index < students.length; index++) {
      const element = students[index];
      // let backgroundColor = element.querySelector(".uczen");
      let math = element.querySelector(".matematyka").value;
      // console.log(math);
      let polish = element.querySelector(".polski").value;
      let bio = element.querySelector(".biologia").value;
      let geo = element.querySelector(".geografia").value;
      let science = element.querySelector(".fizyka").value;
      let chem = element.querySelector(".chemia").value;
      let cs = element.querySelector(".informatyka").value;
      let extra = element.getElementsByClassName("zajecia-dodatkowe");
  
      let backgroundColor = element.querySelector(".uczen");
  
      // console.log(extra);
  
      math = parseFloat(math);
      polish = parseFloat(polish);
      bio = parseFloat(bio);
      geo = parseFloat(geo);
      science = parseFloat(science);
      chem = parseFloat(chem);
      cs = parseFloat(cs);
  
      let subjects = element.querySelectorAll('[type="number"]');
  
      console.log(subjects);
  
      let extraArray = extra[0].value.split(",").filter((params) => {
        return params != "";
      });
  
      // console.log(extraArray);
  
      let sumUp = 0;
  
      for (const subject of subjects) {
        sumUp += +subject.value;
        // console.log(subject.value);
  
        extraArray.forEach((element) => {
          // console.log(element);
          if (subject.className === element && subject.value != 6) {
            sumUp += 0.5;
          }
        });
        if (subject.value <= 1) {
          backgroundColor.classList.add("redbg");
        }
        console.log(subject.value);
      }
      // console.log(sumUp);
      // console.log(sumUp / 7);
  
      let notesAverrage = 0;
      notesAverrage = (polish + math + bio + geo + science + chem + cs) / 7;
      // console.log(notesAverrage);
  
      element.querySelector(".srednia").innerText = (sumUp / 7).toFixed(2);
  
      if ((sumUp / 7).toFixed(2) >= 4.75) {
        backgroundColor.classList.add("greenbg");
      }
    }
  };
  
  let btnSumUp = document.getElementById("oblicz");
  
  btnSumUp.onclick = averrage;
  