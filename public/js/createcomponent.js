AFRAME.registerComponent('createcomponent', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#createSound');
      
        Context_AF.el.addEventListener('mousedown', function(event) {
            console.log("mousedown");
            //object clicked - lets create a cow!
            Context_AF.createComp();

            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            Context_AF.soundElem.components['sound'].playSound();
            
        });
    },
    createComp : function() {
        const Context_AF = this;

        //create element, than add attributes you want. If you are creating many =you want to 
        //consider "pooling" elements (i.e. not creating/deleting a bunch but just hiding/showing a certain MAX amount with visibility="true" or "false" )
        //see here: https://www.html5rocks.com/en/tutorials/speed/static-mem-pools/ 
        //see here: https://aframe.io/docs/0.8.0/components/pool.html
        let DSElem = document.createElement('a-entity');
        DSElem.setAttribute('obj-model', {obj:'/assets/models/DeathStar.obj'});

        // death star texture https://tommyfield.myportfolio.com/portfolio
        DSElem.setAttribute('material', {src:'/assets/images/deathStartxt.jpg'});
        DSElem.setAttribute('deletecomponent', {}); 
        DSElem.setAttribute('rotation', {x:0, y:60, z:0});
        DSElem.setAttribute('position', {x:-10, y:-1, z:-10});
        DSElem.setAttribute('scale', {x:2, y:2, z:2});
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(DSElem);
    }
});