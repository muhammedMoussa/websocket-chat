//Setup a connection
const socket = io.connect('http://localhost:4000')

//DOM
const message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback')

btn.addEventListener('click', () => {
    if(handle.value=="" || message.value=="") {
        M.toast({html: 'Type your name and message!'})
    } else {
        socket.emit('chat', {
            message: message.value,
            handle: handle.value
        })
        message.value = ""
    }
})

message.addEventListener('keypress', () => {
    if(handle.value=="") {
        M.toast({html: 'Please enter your name first!'})
    } else {
        socket.emit('typing', handle.value);
    }
})

//Listen for events
socket.on('chat', (data) => {
    feedback.innerHTML = " "
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'
})

socket.on('typing', (data) => {
    feedback.innerHTML =  '<p><em>' + data + ' is typing a message...</em></p>'
})


particlesJS("particles-js", {
    "particles": {
        "number": {
        "value": 380,
        "density": {
            "enable": true,
            "value_area": 800
        }
        },
        "color": {
        "value": "#26a69a"
        },
        "shape": {
        "type": "circle",
        "stroke": {
            "width": 0,
            "color": "#fff"
        },
        "polygon": {
            "nb_sides": 5
        },
        "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
        }
        },
        "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
        }
        },
        "size": {
        "value": 3,
        "random": true,
        "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
        }
        },
        "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#000",
        "opacity": 0.4,
        "width": 1
        },
        "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
        }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
        "onhover": {
            "enable": true,
            "mode": "grab"
        },
        "onclick": {
            "enable": true,
            "mode": "push"
        },
        "resize": true
        },
        "modes": {
        "grab": {
            "distance": 140,
            "line_linked": {
            "opacity": 1
            }
        },
        "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
        },
        "repulse": {
            "distance": 200,
            "duration": 0.4
        },
        "push": {
            "particles_nb": 4
        },
        "remove": {
            "particles_nb": 2
        }
        }
    },
    "retina_detect": true
});