function getCar(honda) {
    axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json`)
    .then(results => {
        const car = Results.data;

          
          const carModel = document.getElementById('carModel');
          // looping through object keys
          // Object.keys(car.Model_Name).forEach(car => {
          //   console.log(car.carModel);
          //   carModel.appendChild("");
          //   }
          // )
        return car
        //console.log(car);

      // const list = document.getElementById('appendMusic');
      // results.data.forEach(song => {
      //   let listItem = document.createElement('li');
      //   listItem.classList.add('list-group-item');
      //   listItem.innerHTML = song.title
      //   list.appendChild(listItem);
      // });
    })
    .catch(err => {
      console.error("Coding in Progress", err.message);
    })
    }
    
    /**
     * This handles the onsubmit on the form.
     *
     * @param {Object} event 
     */
    function handleSubmit(event) {
      // prevents form from submitting
      event.preventDefault();
      // grabs the pokemonId from the field
      const carName = document.getElementById('carName').value;
      // grabs the pokemon images list
      const carModel = document.getElementById('carModel');
      // clears out pokemon images by setting the innerHtml to nothign
      carModel.innerHTML = "";
      // calls the getPokemon function with the new value
      getCar(carName);
    }
 