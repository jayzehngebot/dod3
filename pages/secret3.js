import React, { Component } from 'react';
import MDReactComponent from 'markdown-react-js';


export default class extends Component {

	render() {
	  	return (
	  		<div>

			   <MDReactComponent text='# The Dod is a Wizard Switch' />
			   <MDReactComponent text='# The Dod is guided by : ' />
			   <MDReactComponent text='• Mystery' />
   			   <MDReactComponent text='• Simplicty' />
   			   <MDReactComponent text='• Wizardry' />

			   <MDReactComponent text='# A Switch for the Now' />
			   <MDReactComponent text='Using your phone to change your lights sucks.' />

			   <MDReactComponent text='What about geoloc case? speech case?' />
   			   <MDReactComponent text="it doesn't end when the lights come on" />
			   <MDReactComponent text='Relate to other Internet Enabled Devices. Control Stereo, ' />


   			   <MDReactComponent text='## Who would buy it' />
   			   <MDReactComponent text='Comic Culture is Mainstream Culture' />


			   <MDReactComponent text=" I want to write a long paragraph and just have it show up.
			   So i'll try this. I'll do what I wanted to do. Whatever I'm writing. I'm continuing to write. just
			   going on and on and on. The Dod is going to be a lot of fun. its going to change the world.
			   " />


	  		</div>

		);
	}


}