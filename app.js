// Cards array of objects used a placeholder data
const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,
  
    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
  ]; 

  // Display our data
    // v-for used to loop through card in cards

  // On click: flip cards back and forth
    // v-if and v-else (rather than v-show) used with v-on:click to display selected side of card

  // Get info for new cards from the user
    //Create data properties for front and back of new card (newFront and newBack)
    // Bind those properties to the form inputs using v-model

  // Add new card when user hits enter or click button
    // v-on:click and v-on:keypress.enter used to call addNewCard method

    // Create a new card
      // Creates a new card object containing new card information
      // Pushes that card object into the array of cards
      // addNewCard pushes new data from input fields to array from which the app generate a new card

  // Delete cards
    // v-on:click="cards.splice(index, 1) used in template, or method called from methods below. 

  // Animate card flip
    // Transition component and keys used to interact with css transtion properties

  // Display an error message if form fields are blank
    // v-show="error" and conditional statement used to test if either input field is empty. If so, an error meessage is displayed; if not, a new card is displayed.  


  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      newFront: '',
      newBack: '',
      error: false
    },
    methods: {
      toggleCard: function(card) {
        card.flipped = !card.flipped;
      },
      addNewCard: function() {
        if ( !this.newFront || !this.newBack ) {
          this.error = true;
        } else {
          this.cards.push({
            front: this.newFront,
            back: this.newBack,
            flipped: false
          });
          this.newFront = '';
          this.newBack = '';
          this.error = false;
        }
        
      },
      deleteCard: function(index) {
        cards.splice(index, 1)
      }
    }
  });