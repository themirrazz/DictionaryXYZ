window.DictionaryXyz = (function () {
    // Prepare the dictionary
    var dict = {};
    // We want to do nouns and honorifics first
    var nouns = [
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
        {
            id: 'kouhai',
            def: 'One\'s junior or subordinate.',
            word: 'kōhai'
        },
        {
            id: 'kōhai',
            def: 'One\'s junior or subordinate.',
            word: 'kōhai'
        },
        {
            id: 'kohai',
            def: 'One\'s junior or subordinate.',
            word: 'kōhai'
        },
        // Spanish honorifics
        {
            id: 'señor',
            def: 'A Spanish honorific used to refer to a man.'
        },
        {
            id: 'señorita',
            def: 'A Spanish honorific used to refer to a young and unmarried woman.'
        },
        {
            id: 'señora',
            def: 'A Spanish honorific used to refer to an older or married woman.'
        },
        // other foriegn words
        {
            id: "tsunami",
            def: "A series of large waves caused by a displacement of water from a body."
        },
        {
            id: "baguette",
            def: "A long loaf of French bread."
        },
        {
            id: 'baguette',
            def: "A wand, baton, or rod."
        },
        // animals
        {
            id: 'dog',
            def: 'A domestic mammal that is descended from the wolf.'
        },
        {
            id: 'cat',
            def: 'A domestic mammal with soft fur, a short snout, and retractable claws.'
        },
        {
            id: 'horse',
            def: 'A domestic mammal with hoofs, a mane, and a tail, used for riding and racing.'
        },
        {
            id: 'cow',
            def: 'A domestic breed of ox that is used to obtain milk from.'
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
        },
        {
            id: 'nerd',
            def: 'A person who is highly interested in a subject; an enthusiast (informal).'
        },
        // intangible things
        {
            id: 'worry',
            def: 'A state of anxiety or being concerned about something.'
        },
        {
            id: 'feeling',
            def: 'An emotion state or reaction.'
        },
        {
            id: 'desire',
            def: 'A strong want for something.'
        },
        {
            id: 'want',
            def: 'A wish for something.'
        },
        {
            id: 'love',
            def: 'A strong feeling of affection towards something.'
        },
        {
            id: 'love',
            def: 'A high interest and pleasure in something.'
        },
        {
            id: 'love',
            def: 'A person or thing that is loved by someone.'
        },
        {
            id: 'life',
            def: 'The existence of a human or animal.'
        },
        // leisure activities
        {
            id: 'walk',
            def: 'The act of travelling on an excursion by foot; a stroll.'
        },
        {
            id: 'run',
            def: 'An act of running.'
        },
        {
            id: 'jog',
            def: 'An act of jogging, or slow-running.'
        },
        // crimes
        {
            id: 'arson',
            def: 'The action of intentionally lighting a piece of land or property on fire.'
        },
        {
            id: 'theft',
            def: 'The action of stealing something from another person.'
        },
        {
            id: 'murder',
            def: 'The act of killing another person.'
        },
        {
            id: 'robbery',
            def: 'The action of comitting theft by using force or threats.'
        },
        {
            id: 'burglary',
            def: 'The action of comitting theft by trespassing onto another\'s property.'
        },
        // slang words
        {
            id: 'earrape',
            def: 'A sound that is obnoxiously loud or frightening.'
        },
        {
            id: 'ear rape',
            word: 'earrape',
            def: 'A sound that is obnoxiously loud or frightening.'
        },
        {
            id: 'ear-rape',
            word: 'earrape',
            def: 'A sound that is obnoxiously loud or frightening.'
        },
        {
            id: 'aura',
            def: 'How cool a certain person, thing, or group of people is (informal).'
        },
        {
            // has to go here for sorting reasons
            id: 'sigma',
            word: 'sigma (∑)',
            def: 'The 18th letter of the greek alphabet.'
        },
        {
            id: 'sigma',
            def: 'A person who prefers to operate independently from others; a lone wolf (informal).'
        },
        {
            id: 'rizz',
            def: 'Charisma (informal).'
        },
        {
            id: 'rizzler',
            def: 'A person who is very charismatic or attractive, even without trying to be (informal).'
        },
        // let's talk about computers
        {
            id: 'computer',
            def: 'An electronic device that can store and process data digitally.'
        },
        {
            id: 'hard disk',
            def: 'A part of a computer that stores digital information.'
        },
        {
            id: 'ram',
            word: 'RAM',
            def: 'A part of a computer that stores digital information until the power to it is turned off.'
        },
        // again, this has to be here
        {
            id: 'ram',
            def: 'A male sheep that has not been uncastrated.'
        },
        {
            id: 'cpu',
            word: 'CPU',
            def: 'The main part of a computer that handles the processing of the information.'
        },
        // tv shows and movies
        {
            id: 'movie',
            def: 'A video designed for viewing on television or at theaters.'
        },
        {
            id: 'cartoon',
            def: 'A video that is animated digitally or by hand.'
        },
        {
            id: 'shōnen',
            def: 'A movie or tv series, usually anime, that is aimed at teen boys between the age of 12 and 17.'
        },
        {
            id: 'shonen',
            word: 'shōnen',
            def: 'A movie or tv series, usually anime, that is aimed at teen boys between the age of 12 and 17.'
        },
        {
            id: 'shounen',
            word: 'shōnen',
            def: 'A movie or tv series, usually anime, that is aimed at teen boys between the age of 12 and 17.'
        },
        {
            id: 'shōjo',
            def: 'A movie or tv series, usually anime, that is aimed at teen girls between the age of 12 and 17.'
        },
        {
            id: 'shoujo',
            word: 'shōjo',
            def: 'A movie or tv series, usually anime, that is aimed at teen girls between the age of 12 and 17.'
        },
        {
            id: 'shojo',
            word: 'shōjo',
            def: 'A movie or tv series, usually anime, that is aimed at teen girls between the age of 12 and 17.'
        },
        {
            id: 'drama',
            def: 'A movie or tv show that is dramaticized.'
        },
        {
            id: 'comedy',
            def: 'A movie or tv show designed to appeal to viewers\' senses of humor.'
        },
        {
            id: 'romcom',
            def: 'A movie or tv show that is a combination of the romance and comedy genres.'
        },
        {
            id: 'rom-com',
            word: 'romcom',
            def: 'A movie or tv show that is a combination of the romance and comedy genres.'
        },
        {
            id: 'rom com',
            word: 'romcom',
            def: 'A movie or tv show that is a combination of the romance and comedy genres.'
        },
        {
            id: 'sitcom',
            def: 'A subgenre of comedy that involves recurring characters navigating a series of humorous situations.'
        },
        // this has to be here bc it fits nowhere else
        {
            id: 'harem',
            def: 'The state of being surrounded by girls which are all romantically interested in you.'
        },
        {
            id: 'harem',
            def: 'A tv show or movie, usually anime, where the protagonist is surrounded by multiple girls who are all romantically interested int hem.'
        },
        // verbs that are really nouns
        {
            id: 'help',
            def: 'Aid or assistance.'
        },
        {
            id: 'ding',
            def: 'A beeping or ringing noise, commonly associated with notification sounds.'
        },
        {
            id: 'text',
            def: 'A book or other form of written work.'
        },
        {
            id: 'text',
            def: 'Information represented by using characters in a specified alphabet or alphabets.'
        },
        {
            id: 'text',
            def: 'A text message.'
        },
        // other random nouns
        {
            id: 'speech',
            def: 'The expression of thoughts via vocal sounds; talking.'
        },
        {
            id: 'speech',
            def: 'A formal address delivered to an audience.'
        },
        {
            id: 'name',
            def: 'A proper noun used to distinguish a specific item from other similar items.'
        },
        // random body parts
        {
            id: 'face',
            def: 'The front section of a person or animal\'s head.'
        },
        {
            id: 'tongue',
            def: 'A body part inside the mouth used for tasting food.'
        },
        {
            id: 'heart',
            def: 'A crucial organ for humans and animals that pumps blood to the rest of the body.'
        }
    ];
    nouns.forEach(word => {
        if(!dict[word.id]) {
            dict[word.id] = [];
        }
        dict[word.id].push({
            type: word.type||'noun',
            definition: word.def,
            word: word.word
        });
    });
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
            verb: 'escape',
            def: ['To move away from something in fear; to flee'],
            present: 'escaping'
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
            verb: 'phone',
            def: ['To call someone using a telephone device.'],
            present: 'phoning'
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
            verb: 'weeb out',
            def: ['To act or be weeby'],
            past: 'weebed out',
            present: 'weebing out',
            tps: 'weebs out'
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
    // Prepare everything else - adjectives, adverbs, etc
    var otherWords = [
        {
            id: 'artificial',
            def: 'Not real or genuine; fake.'
        },
        {
            id: 'yes',
            type: 'excl',
            def: 'An exclamation used to indicate acknowledgement or agreement.'
        },
        {
            id: 'no',
            type: 'excl',
            def: 'An exclamation used to indicate disagreement.'
        },
        {
            id: 'interested',
            def: 'To have an interest in something.'
        },
        {
            id: 'when',
            type: 'conj',
            def: 'At or during a certain time.'
        },
        {
            id: 'why',
            type: 'adverb',
            def: 'Which reason.'
        }
    ];
    otherWords.forEach(word => {
        if(!dict[word.id]) {
            dict[word.id] = [];
        }
        dict[word.id].push({
            type: word.type||'adj',
            definition: word.def,
            word: word.word
        });
    });
    return dict;
})();