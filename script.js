import "./styles.css";

// const rive = require("@rive-app/canvas");


    const r = 
    
    
    
    new rive.Rive({
        // src: "https://cdn.rive.app/animations/vehicles.riv",
        // OR the path to a discoverable and public Rive asset
        src: './panic.riv',
        canvas: document.getElementById("canvas"),
        autoplay: true,
        stateMachines: "button",
        onLoad: () => {
          r.resizeDrawingSurfaceToCanvas();
      
        },
    });