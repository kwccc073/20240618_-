particlesJS('particles-js', {
	particles: {
		number: {
			value: 96,
			density: {
				enable: true,
				value_area: 2886.1417095579413
			}
		},
		color: {
			value: '#ffffff'
		},
		shape: {
			type: 'image',
			stroke: {
				width: 0,
				color: '#ffffff'
			},
			polygon: {
				nb_sides: 5
			},
			image: {
				src: './slamdunk.png',
				width: 100,
				height: 100
			}
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 74.96902595506592,
			random: true,
			anim: {
				enable: true,
				speed: 71.92807192807193,
				size_min: 0.1,
				sync: false
			}
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: '#ffffff',
			opacity: 0.4,
			width: 2.0844356791251797
		},
		move: {
			enable: true,
			speed: 6.413648243462092,
			direction: 'bottom',
			random: true,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: {
				enable: false,
				mode: 'repulse'
			},
			onclick: {
				enable: false,
				mode: 'repulse'
			},
			resize: true
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1
				}
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3
			},
			repulse: {
				distance: 200,
				duration: 0.4
			},
			push: {
				particles_nb: 4
			},
			remove: {
				particles_nb: 2
			}
		}
	},
	retina_detect: true
})
