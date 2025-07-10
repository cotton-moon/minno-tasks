define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'Old', //Will appear in the data.
			title : {
				media : {word : 'Old'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {image: 'old1.bmp'},
            {image: 'old2.bmp'},
            {image: 'old3.bmp'},
            {image: 'old4.bmp'},
            {image: 'old5.bmp'},
            {image: 'old6.bmp'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Young', //Will appear in the data.
			title : {
				media : {word : 'Young'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {image: 'young1.bmp'},
            {image: 'young2.bmp'},
            {image: 'young3.bmp'},
            {image: 'young4.bmp'},
            {image: 'young5.bmp'},
            {image: 'young6.bmp'},
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'Inactive',
			title : {
				media : {word : 'Inactive'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {word: 'forgetful'},
            {word: 'lethargic'},
            {word: 'slow'},
            {word: 'tired'},
            {word: 'weak'},
            {word: 'weary'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Active',
			title : {
				media : {word : 'Active'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {word: 'dynamic'},
            {word: 'energetic'},
            {word: 'fast'},
            {word: 'lively'},
            {word: 'quick'},
            {word: 'strong'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://github.com/cotton-moon/minno-tasks/IAT/qualtrics/OneDrive_1_10-07-2025'
		} 
	});
});
