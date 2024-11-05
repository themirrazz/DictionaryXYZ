window.DictionaryXyz = (function () {
    // Prepare the dictionary
    var dict = {};
    // Handle all the verbs
    var verbs = [
        {
            verb: 'go',
            def: ['To move around.', 'To proceed or start.', 'To leave.'],
            past: 'went',
            tps: 'goes'
        },
        {
            verb: 'stop',
            def: ['To cease to happen; to end.'],
            past: 'stopped',
            present: 'stopping'
        },
        {
            verb: 'walk',
            def: ['To move at a regular pace on foot.']
        },
        {
            verb: 'run',
            def: ['To move at a fast pace on foot.'],
            past: 'ran',
            present: 'running'
        },
        {
            verb: 'jog',
            def: ['To move on foot at a pace between a walk and a run.'],
            past: 'jogged',
            present: 'jogging'
        },
        {
            verb: 'become',
            def: ['To turn into; to start to be.'],
            past: 'became',
            present: 'becoming'
        },
        {
            verb: 'turn',
            def: ['To rotate.', 'To become.']
        },
        {
            verb: 'wash',
            def: ['To clean, typically with water and soap.'],
            tps: 'washes'
        },
        {
            verb: 'exist',
            def: ['To be in reality; to be alive.']
        },
        {
            verb: 'be',
            def: ['To exist.', 'To have specific attributes.', 'To take place at.'],
            past: 'was',
            tps: 'is',
            fps: 'am',
            sps: 'are',
            past_sps: 'were'
        },
        {
            verb: 'love',
            def: ['To strongly like or feel affection for.'],
            present: 'loving'
        },
        {
            verb: 'hate',
            def: ['To have a strong feeling of dislike or contempt for.'],
            present: 'hating'
        }
    ];
    // let's add the verbs to the dictionary
    verbs.forEach(verb => {
        var words = [
            verb.verb,
            verb.past||(verb.verb+'ed'),
            verb.present||(verb.verb+'ing')
        ];
        // handle third-person singular
        if(verb.tps !== verb.verb) {
            words.push(verb.tps || (verb.verb+'s'));
        }
        // first- and second-person singular
        if(verb.fps) {
            words.push(verb.fps);
        }
        if(verb.sps) {
            words.push(verb.sps);
        }
        // handle those for past tense
        if(verb.past_fps) {
            words.push(verb.past_fps);
        }
        if(verb.past_sps) {
            words.push(verb.past_sps);
        }
        if(verb.past_tps) {
            words.push(verb.past_tps);
        }
        // handle them for present
        if(verb.present_fps) {
            words.push(verb.present_fps);
        }
        if(verb.present_sps) {
            words.push(verb.present_sps);
        }
        if(verb.present_tps) {
            words.push(verb.present_tps);
        }
        // iterate for each value
        words.forEach(keyword => {
            if(!dict[keyword]) {
                dict[keyword] = []; // the entry didn't already exist
            }
            verb.def.forEach(def => {
                dict[keyword].push({
                    word: verb.verb,
                    type: 'verb',
                    definition: def
                });
            });
        });
    });
    // let's prepare all the colors
    var colors = [
        {
            color: 'red',
            def: 'A color at the low end of the spectrum next to orange.'
        },
        {
            color: 'orange',
            def: 'A color on the spectrum between red and yellow.'
        },
        {
            color: 'yellow',
            def: 'A color on the spectrum between orange and green.'
        },
        {
            color: 'green',
            def: 'A color on the spectrum between yellow and blue.'
        },
        {
            color: 'blue',
            def: 'A color on the spectrum between green and indigo.'
        },
        {
            color: 'indigo',
            def: 'A color that is a mix between blue and purple.'
        },
        {
            color: 'purple',
            def: 'A color on the far end of the spectrum next to indigo.'
        },
        {
            color: 'white',
            def: 'A color produced by reflecting all colors of light.'
        },
        {
            color: 'black',
            def: 'A color produced by absorbing all colors of light.'
        },
        {
            color: 'grey',
            def: 'A color between white and black that only reflects some of the light.'
        },
        {
            color: 'pink',
            def: 'A light shade of magenta.'
        },
        {
            color: 'magenta',
            def: 'A color that is a mix between red and light purple.'
        }
    ];
    colors.forEach(color => {
        if(!dict[color.color]) {
            dict[color.color] = [];
        }
        dict[color.color].push({
            type: 'noun',
            definition: color.def
        });
        dict[color.color].push({
            type: 'adj',
            definition: 'Of the color '+color.color
        });
    });
    // finally lets prepare everything else
    var otherWords = [
        // Japanese keishō
        {
            id: '-san',
            def: 'A general-purpose Japanese honorific.',
            word: '-san'
        },
        {
            id: 'san',
            def: 'A general-purpose Japanese honorific.',
            word: '-san'
        },
        {
            id: '-chan',
            def: 'A Japanese honorific language used to convey a sense of cuteness.',
            word: '-chan'
        },
        {
            id: 'chan',
            def: 'A Japanese honorific language used to convey a sense of cuteness.',
            word: '-chan'
        },
        {
            id: '-kun',
            def: 'A Japanese honorific that refers to young men or to one\'s junior.',
            word: '-kun'
        },
        {
            id: 'kun',
            def: 'A Japanese honorific that refers to young men or to one\'s junior.',
            word: '-kun'
        },
        {
            id: '-senpai',
            def: 'A Japanese honorific that refers to one\'s senior.',
            word: 'senpai'
        },
        {
            id: 'senpai',
            def: 'A Japanese honorific that refers to one\'s senior.',
            word: 'senpai'
        },
        {
            id: '-sensei',
            def: 'A Japanese honorific used to refer to teachers, doctors, coaches, instructors, and the like.',
            word: 'sensei'
        },
        {
            id: 'sensei',
            def: 'A Japanese honorific used to refer to teachers, doctors, coaches, instructors, and the like.',
            word: 'sensei'
        },
        // animals
        {
            id: 'dog',
            def: 'A domestic animal that is descended from the wolf.'
        },
        {
            id: 'cat',
            def: 'A domestic animal with soft fur, a short snout, and retractable claws.'
        },
        // other random nouns
        {
            id: 'phone',
            def: 'A device that allows people to communicate by transmitting one\'s voice as an electrical signal.'
        },
        {
            id: 'sentience',
            def: 'The state of being concious or self-aware.'
        },
        // related adjective
        {
            id: 'sentient',
            type: 'adj',
            def: 'Having sentience or self-awareness.'
        },
        // anywho back to nouns, lol
        {
            id: 'enthusiast',
            def: 'A person who is very interested in a particular activity or subject.'
        }
    ];
    otherWords.forEach(word => {
        if(!dict[word.id]) {
            dict[word.id] = [];
        }
        dict[word.id].push({
            type: word.type||'noun',
            definition: word.def,
            word: word.name
        });
    });
    return dict;
})();