AFRAME.registerComponent('deletecomponent', {
    schema: {},
    init : function() {
        const Context_AF = this;

        

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!
            Context_AF.deleteMyself();

        
        });
    },
    deleteMyself : function() {
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el); 
        //note memmory may stay aroudn until "garbage collected" so consider pooling instead of deleting. See note in create-cow element
    }
});