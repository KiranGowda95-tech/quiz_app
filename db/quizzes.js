const { v4: uuid } = require("uuid");

const quizzes = {
  data: [
    //1st quiz card --> will have title ,description,category,quiz
    {
        id:uuid(),
        category:"marvel",
        image:"https://in.images.search.yahoo.com/search/images;_ylt=AwrKDmgu94pn8gEA.VW7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=marvel+images&fr2=piv-web&type=E210IN714G0&fr=mcafee#id=33&iurl=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2Fimages5%2F4K-Marvel-Desktop-Background.jpg&action=click",
        title:"Marvel",
        description:"loren ipsum",
        //Questions and Options
        quiz:[
            {
                id:uuid(),
                question:"Black panther is set in which functional country?",
                options:[
                    {id:uuid(),option:"Wakanda",isCorrect:true},
                    {id:uuid(),option:"Takanda",isCorrect:false},
                    {id:uuid(),option:"Jakanda",isCorrect:false},
                    {id:uuid(),option:"Makanda",isCorrect:false},
                ]
            },
            {
                id:uuid(),
                question:"Who rescued Tony Starck and Nebula from space?",
                options:[
                    {id:uuid(),option:"Hulk",isCorrect:true},
                    {id:uuid(),option:"Thor",isCorrect:false},
                    {id:uuid(),option:"Caption Marvel",isCorrect:true},
                    {id:uuid(),option:"Caption America",isCorrect:false},
                ]
            },
            {
                id:uuid(),
                question:"What is the National bird of India",
                options:[
                    {id:uuid(),option:"pickock",isCorrect:true},
                    {id:uuid(),option:"crow",isCorrect:false},
                    {id:uuid(),option:"parrot",isCorrect:true},
                    {id:uuid(),option:"Hen ",isCorrect:false},
                ]
            },
            {
                id:uuid(),
                question:"What did Thor say about Jan's fostres catchPrase?",
                options:[
                    {id:uuid(),option:"It's Crap",isCorrect:true},
                    {id:uuid(),option:"That's Bullshit",isCorrect:false},
                    {id:uuid(),option:"What ever",isCorrect:false},
                    {id:uuid(),option:"It's perfect",isCorrect:true},
                ]
            },
        ]
    },
    {
        id:uuid(),
        category:"dc",
        image:"https://in.images.search.yahoo.com/search/images;_ylt=AwrKDmgu94pn8gEA.VW7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=marvel+images&fr2=piv-web&type=E210IN714G0&fr=mcafee#id=77&iurl=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7174374.jpg&action=click",
        title:"DC",
        description:"loren ipsum dorel sit amet,consectetur adipiscing elit.",
        //Questions and Options
        quiz:[
            {
                id:uuid(),
                question:"What was wonder women originally named?",
                options:[
                    {id:uuid(),option:"Anita",isCorrect:false},
                    {id:uuid(),option:"Suprema",isCorrect:true},
                    {id:uuid(),option:"kavana",isCorrect:false},
                    {id:uuid(),option:"nandana",isCorrect:false},
                ]
            },
            {
                id:uuid(),
                question:"Who rescued Tony Starck and Nebula from space?",
                options:[
                    {id:uuid(),option:"Hulk",isCorrect:true},
                    {id:uuid(),option:"Thor",isCorrect:false},
                    {id:uuid(),option:"Caption Marvel",isCorrect:true},
                    {id:uuid(),option:"Caption America",isCorrect:false},
                ]
            },
            {
                id:uuid(),
                question:"What is the National bird of India",
                options:[
                    {id:uuid(),option:"pickock",isCorrect:true},
                    {id:uuid(),option:"crow",isCorrect:false},
                    {id:uuid(),option:"parrot",isCorrect:true},
                    {id:uuid(),option:"Hen ",isCorrect:false},
                ]
            },
            {
                id:uuid(),
                question:"What did Thor say about Jan's fostres catchPrase?",
                options:[
                    {id:uuid(),option:"It's Crap",isCorrect:true},
                    {id:uuid(),option:"That's Bullshit",isCorrect:false},
                    {id:uuid(),option:"What ever",isCorrect:false},
                    {id:uuid(),option:"It's perfect",isCorrect:true},
                ]
            },
        ]
    },
    {

    }
],
};

module.exports=quizzes;
