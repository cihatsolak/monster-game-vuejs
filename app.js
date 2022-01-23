new Vue({
  el: "#app",
  data: {
    player_heal: 100,
    monster_heal: 100,
    game_is_on: false,
  },
  methods: {
    start_game: function () {
      this.game_is_on = true;
    },
    attack: function () {
        let point = Math.ceil(Math.random() * 10);
        this.monster_heal -= point;
        this.monster_attack();

        console.log(`You heal: ${this.player_heal}`);
        console.log(`Monster heal: ${this.monster_heal}`);
    },
    special_attack: function () {
        let point = Math.ceil(Math.random() * 25);
        this.monster_heal -= point;
        this.monster_attack();

        console.log(`You heal: ${this.player_heal}`);
        console.log(`Monster heal: ${this.monster_heal}`);
    },
    heal_up: function () {
        let point = Math.ceil(Math.random() * 20);
        this.player_heal += point;
        this.monster_attack();

        console.log(`You heal: ${this.player_heal}`);
        console.log(`Monster heal: ${this.monster_heal}`);
    },
    give_up: function () {
        this.player_heal = 0;

        console.log(`You heal: ${this.player_heal}`);
        console.log(`Monster heal: ${this.monster_heal}`);
    },
    monster_attack: function(){
        let point = Math.ceil(Math.random() * 15);
        this.player_heal -= point;
    }
  },
});
